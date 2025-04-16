'use client';

import type React from 'react';
import { useState } from 'react';
import type { Section } from '@/types';
import { ChevronUp, Menu, Grid3X3, X } from 'lucide-react';

interface SectionNavigationProps {
  sections: Section[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const SectionNavigation: React.FC<SectionNavigationProps> = ({
  sections,
  activeSection,
  onSectionClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const toggleNavPanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navigation panel */}
      <div className={`nav-panel ${isOpen ? 'active' : ''}`}>
        <div className="py-4 px-6">
          {/* Header with close button and view toggle */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-primary font-neue-montreal">Report Sections</h3>
            <div className="flex items-center gap-2">
              <div className="view-tabs">
                <button
                  className={`view-tab ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid3X3 size={16} />
                </button>
                <button
                  className={`view-tab ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <Menu size={16} />
                </button>
              </div>
              <button
                className="p-1 rounded-full bg-primary/10 text-primary md:hidden"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Grid view */}
          {viewMode === 'grid' && (
            <div className="nav-grid">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => {
                    onSectionClick(section.id);
                    setIsOpen(false);
                  }}
                >
                  <div className="nav-item-content">
                    <span className="text-xs text-center font-montserrat">{section.title}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* List view */}
          {viewMode === 'list' && (
            <div className="nav-list max-h-[50vh] overflow-y-auto pr-2">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className={`nav-list-item ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => {
                    onSectionClick(section.id);
                    setIsOpen(false);
                  }}
                >
                  <div className="flex items-center">
                    <span className="w-6 h-6 flex items-center justify-center bg-primary/10 rounded-full text-xs mr-2 font-montserrat">
                      {index + 1}
                    </span>
                    <h4 className="font-medium font-montserrat">{section.title}</h4>
                  </div>

                  {section.subSections && section.subSections.length > 0 && (
                    <div className="pl-8 mt-2 space-y-1 text-sm text-primary/70">
                      {section.subSections.map((subSection) => (
                        <div key={subSection.id} className="py-1 hover:text-primary font-montserrat">
                          {subSection.title}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Toggle button */}
      <button
        className="nav-toggle"
        onClick={toggleNavPanel}
      >
        {isOpen ? <ChevronUp size={18} /> : <Menu size={18} />}
        <span className="ml-2 text-sm">Sections</span>
      </button>
    </>
  );
};

export default SectionNavigation;
