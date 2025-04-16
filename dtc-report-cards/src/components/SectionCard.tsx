'use client';

import React, { forwardRef } from 'react';
import type { Section } from '@/types';
import HtmlContent from './HtmlContent';

interface SectionCardProps {
  section: Section;
  isActive: boolean;
}

const SectionCard = forwardRef<HTMLDivElement, SectionCardProps>(({
  section,
  isActive
}, ref) => {
  return (
    <div
      ref={ref}
      id={section.id}
      className="section-card bg-[#f5f6f1] transition-all duration-300 hover:shadow-lg"
    >
      <div className="section-content">
        <div className="mx-auto px-8 md:px-12 lg:px-16 pt-10">
          {/* Section title and attribution */}
          <div className="relative flex justify-between items-center mb-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#223f3d]">{section.title}</h2>
            <div className="text-sm text-primary/70">
              From FunnelVision
            </div>
          </div>

          <hr className="border-t border-[#e5e7e3] mb-2" />
          <hr className="border-t border-[#e5e7e3] mb-10" />

          {/* Main Content */}
          <div className="section-content-html max-w-5xl mx-auto">
            <HtmlContent
              htmlContent={section.content}
              className="prose prose-lg max-w-none font-montserrat"
              sectionId={section.id}
            />
          </div>

          {/* Sub Sections */}
          {section.subSections && section.subSections.length > 0 && (
            <div className="mt-12 space-y-12 max-w-5xl mx-auto">
              {section.subSections.map((subSection) => (
                <div
                  key={subSection.id}
                  className="subsection"
                >
                  <h3 className="section-subtitle font-bold">{subSection.title}</h3>
                  <HtmlContent
                    htmlContent={subSection.content}
                    className="prose prose-lg max-w-none font-montserrat"
                    sectionId={`${section.id}-${subSection.id}`}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Bottom padding for better UX */}
          <div className="h-16" />
        </div>
      </div>
    </div>
  );
});

SectionCard.displayName = 'SectionCard';

export default SectionCard;
