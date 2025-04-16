import type React from 'react';
import type { Section } from '@/types';

interface TableOfContentsProps {
  sections: Section[];
  onSectionClick: (sectionId: string) => void;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({
  sections,
  onSectionClick
}) => {
  // Helper function to get subtitle safely
  const getSubtitle = (section: Section) => {
    if (!section.subSections || section.subSections.length === 0) {
      return 'Key findings and insights';
    }
    return section.subSections[0].title;
  };

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-8">
      <h2 className="font-neue-montreal text-3xl font-bold text-primary mb-10">
        Contents
      </h2>

      <div className="border-t border-b border-primary/10 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="flex items-start cursor-pointer group"
              onClick={() => onSectionClick(section.id)}
            >
              <div className="mr-4 shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-background font-semibold">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-lg text-primary group-hover:text-secondary-gold transition-colors">
                  {section.title}
                </h3>
                <p className="text-sm text-primary/70 mt-1 font-montserrat">
                  {getSubtitle(section)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-right mt-12 text-sm text-primary/60">
        From FunnelVision
      </div>
    </div>
  );
};

export default TableOfContents;
