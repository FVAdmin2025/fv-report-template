'use client';

import type React from 'react';
import { useRef, useState, useEffect, useCallback } from 'react';
import type { Section } from '@/types';
import SectionCard from './SectionCard';
import SectionNavigation from './SectionNavigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HorizontalReportContainerProps {
  sections: Section[];
  metadata: {
    title: string;
    subtitle: string;
    author: string;
    year: number;
    headerButtons: string[];
    tagline: string;
  };
}

const HorizontalReportContainer: React.FC<HorizontalReportContainerProps> = ({
  sections,
  metadata
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const [isScrolling, setIsScrolling] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [canMoveNext, setCanMoveNext] = useState(true);

  // Get current section index
  const activeSectionIndex = sections.findIndex(section => section.id === activeSection);

  // Check if the active section is scrolled to the bottom
  const checkIfAtBottom = useCallback(() => {
    const activeRef = sectionRefs.current[activeSectionIndex];
    if (activeRef) {
      const contentElement = activeRef.querySelector('.section-content');
      if (contentElement) {
        const isBottom = contentElement.scrollHeight - contentElement.scrollTop <= contentElement.clientHeight + 100; // 100px tolerance
        setIsAtBottom(isBottom);
        setCanMoveNext(isBottom);
      }
    }
  }, [activeSectionIndex]);

  // Handle scrolling to a section
  const scrollToSection = useCallback((sectionId: string) => {
    const index = sections.findIndex((section) => section.id === sectionId);
    if (index !== -1 && containerRef.current) {
      setIsScrolling(true);

      // Apply smooth transition
      containerRef.current.scrollTo({
        left: index * window.innerWidth,
        behavior: 'smooth',
      });

      setActiveSection(sectionId);

      // Update URL hash without scrolling
      history.replaceState(null, '', `#${sectionId}`);

      // Reset scrolling state after animation
      setTimeout(() => {
        setIsScrolling(false);
        // Scroll to top of the new section
        const newActiveRef = sectionRefs.current[index];
        if (newActiveRef) {
          const contentElement = newActiveRef.querySelector('.section-content');
          if (contentElement) {
            contentElement.scrollTop = 0;
            setIsAtBottom(false);
            setCanMoveNext(false); // Require scrolling to bottom first
          }
        }
      }, 700);
    }
  }, [sections]);

  // Navigation to prev/next section
  const goToPrevSection = useCallback(() => {
    if (activeSectionIndex > 0 && !isScrolling) {
      scrollToSection(sections[activeSectionIndex - 1].id);
    }
  }, [activeSectionIndex, sections, scrollToSection, isScrolling]);

  const goToNextSection = useCallback(() => {
    // Only allow next if we've scrolled to bottom or if this setting is disabled
    if (activeSectionIndex < sections.length - 1 && !isScrolling && (canMoveNext || !canMoveNext)) {
      scrollToSection(sections[activeSectionIndex + 1].id);
    }
  }, [activeSectionIndex, sections, scrollToSection, isScrolling, canMoveNext]);

  // Scroll active section to bottom
  const scrollToBottom = useCallback(() => {
    const activeRef = sectionRefs.current[activeSectionIndex];
    if (activeRef) {
      const contentElement = activeRef.querySelector('.section-content');
      if (contentElement) {
        contentElement.scrollTo({
          top: contentElement.scrollHeight,
          behavior: 'smooth'
        });
      }
    }
  }, [activeSectionIndex]);

  // Set up intersection observer to detect active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return;

        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const id = entry.target.id;
            if (id) {
              setActiveSection(id);
              // Update URL hash without scrolling
              history.replaceState(null, '', `#${id}`);
            }
          }
        }
      },
      { threshold: 0.5, root: containerRef.current }
    );

    for (const ref of sectionRefs.current) {
      if (ref) observer.observe(ref);
    }

    return () => {
      for (const ref of sectionRefs.current) {
        if (ref) observer.unobserve(ref);
      }
    };
  }, [isScrolling]);

  // Add scroll event listener to check if at bottom
  useEffect(() => {
    // Find the section content div for the active section
    const activeRef = sectionRefs.current[activeSectionIndex];
    if (activeRef) {
      const contentElement = activeRef.querySelector('.section-content');
      if (contentElement) {
        const handleScroll = () => {
          checkIfAtBottom();
        };

        contentElement.addEventListener('scroll', handleScroll);

        // Initial check
        checkIfAtBottom();

        return () => {
          contentElement.removeEventListener('scroll', handleScroll);
        };
      }
    }
  }, [activeSectionIndex, checkIfAtBottom]);

  // Check URL hash on initial load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      // Use setTimeout to ensure the component is fully mounted
      const timer = setTimeout(() => {
        scrollToSection(hash);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [scrollToSection]);

  // Handle wheel event for horizontal scrolling
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (containerRef.current && !isScrolling) {
        // Only handle vertical wheel events to convert to horizontal scroll
        if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
          // Find the section content div for the active section
          const activeRef = sectionRefs.current[activeSectionIndex];
          if (activeRef) {
            const contentElement = activeRef.querySelector('.section-content') as HTMLElement;

            if (contentElement) {
              // Check if at top or bottom for navigation
              const isAtTop = contentElement.scrollTop === 0;
              const isAtBottom = contentElement.scrollHeight - contentElement.scrollTop <= contentElement.clientHeight + 5;

              // If scrolling up and at the top, go to previous section
              if (event.deltaY < 0 && isAtTop) {
                event.preventDefault();
                goToPrevSection();
              }
              // If scrolling down and at the bottom, go to next section
              else if (event.deltaY > 0 && isAtBottom) {
                event.preventDefault();
                goToNextSection();
              }
            }
          }
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [goToNextSection, goToPrevSection, isScrolling, activeSectionIndex]);

  // Set up section refs array
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, sections.length);
    while (sectionRefs.current.length < sections.length) {
      sectionRefs.current.push(null);
    }
  }, [sections.length]);

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        goToPrevSection();
      } else if (event.key === 'ArrowRight') {
        goToNextSection();
      } else if (event.key === 'End') {
        scrollToBottom();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [goToPrevSection, goToNextSection, scrollToBottom]);

  // Function to set the reference safely
  const setSectionRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    sectionRefs.current[index] = el;
  }, []);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-background">
      {/* Navigation arrows */}
      <button
        onClick={goToPrevSection}
        className={`fixed top-1/2 left-4 z-20 p-2 bg-primary text-white transform -translate-y-1/2 transition-all duration-300 ${activeSectionIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-80 hover:opacity-100 hover:shadow-md'}`}
        aria-label="Previous section"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNextSection}
        className={`fixed top-1/2 right-4 z-20 p-2 bg-primary text-white transform -translate-y-1/2 transition-all duration-300 ${activeSectionIndex === sections.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-80 hover:opacity-100 hover:shadow-md'}`}
        aria-label="Next section"
      >
        <ChevronRight size={24} />
      </button>

      {/* Scroll indicator - only show if not at bottom and not on first render */}
      <AnimatePresence>
        {!isAtBottom && activeSectionIndex >= 0 && !isScrolling && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.6, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-10 text-center pointer-events-none"
          >
            <div className="bg-primary/50 text-white px-4 py-1 rounded-sm text-xs backdrop-blur-sm">
              Scroll down to continue
            </div>
            <div className="mt-1 animate-bounce">
              <ChevronRight size={16} className="text-primary/50 transform rotate-90" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Horizontal scrolling container */}
      <div
        ref={containerRef}
        className="horizontal-scroll-container"
      >
        {/* Report Section Cards */}
        {sections.map((section, index) => (
          <SectionCard
            key={section.id}
            ref={setSectionRef(index)}
            section={section}
            isActive={activeSection === section.id}
          />
        ))}
      </div>

      {/* Navigation component */}
      <SectionNavigation
        sections={sections}
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />
    </div>
  );
};

export default HorizontalReportContainer;
