'use client';

import React from 'react';

interface ContentItem {
  number: number;
  title: string;
  description: string;
  id: string;
}

const ContentsSection = () => {
  const contentItems: ContentItem[] = [
    {
      number: 1,
      title: 'Executive Summary',
      description: 'Key findings and strategic takeaways',
      id: 'executive-summary'
    },
    {
      number: 2,
      title: 'Introduction & Methodology',
      description: 'Research approach and data sources',
      id: 'introduction'
    },
    {
      number: 3,
      title: 'Market Overview',
      description: 'DTC technology landscape and adoption statistics',
      id: 'market-overview'
    },
    {
      number: 4,
      title: 'Integration Capabilities & Challenges',
      description: 'Data flow, compatibility, and implementation costs',
      id: 'integration-capabilities'
    },
    {
      number: 5,
      title: 'Impact on Advertising Performance',
      description: 'Technology choice effects on Google Ads ROI',
      id: 'advertising-performance'
    },
    {
      number: 6,
      title: 'Emerging Technology Trends',
      description: 'Innovations reshaping DTC commerce',
      id: 'technology-trends'
    },
    {
      number: 7,
      title: 'Strategic Recommendations',
      description: 'Selection and integration best practices',
      id: 'recommendations'
    },
    {
      number: 8,
      title: 'Conclusion & Future Outlook',
      description: 'Where DTC technology is heading',
      id: 'conclusion'
    }
  ];

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Update URL with hash
      history.pushState(null, '', `#${sectionId}`);

      // Get the container and find the section index
      const container = document.querySelector('.horizontal-scroll-container');
      if (container) {
        const sections = Array.from(container.querySelectorAll('.section-card'));
        const index = sections.findIndex(section => section.id === sectionId);

        if (index !== -1) {
          // Scroll to the appropriate section smoothly
          container.scrollTo({
            left: index * window.innerWidth,
            behavior: 'smooth',
          });
        }
      }
    }
  };

  return (
    <div className="contents-page bg-[#f5f6f1]">
      <div className="section-content-html max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          {contentItems.map((item) => (
            <div
              key={item.number}
              className="contents-item flex items-start cursor-pointer group transition-all duration-100 hover:bg-secondary-mint/5 py-2"
              onClick={() => handleSectionClick(item.id)}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-medium text-lg mr-4">
                {item.number}
              </div>
              <div className="flex-grow">
                <h3 className="text-primary font-bold text-lg group-hover:text-secondary-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-primary/70 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-12 text-sm text-primary/70">
          <div>
            Report Version 1.2.0 • May 2025
          </div>
          <div>
            From FunnelVision
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentsSection;
