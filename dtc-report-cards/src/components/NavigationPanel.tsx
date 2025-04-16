import type React from 'react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ChevronUp, Menu, Grid3X3 } from 'lucide-react';
import type { Section } from '@/types';

interface NavigationPanelProps {
  sections: Section[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NavigationPanel: React.FC<NavigationPanelProps> = ({
  sections,
  activeSection,
  onSectionClick,
  open,
  onOpenChange,
}) => {
  return (
    <>
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetTrigger asChild>
          <Button
            className="toggle-btn"
            size="sm"
          >
            {open ? <ChevronUp size={20} /> : <Menu size={20} />}
            <span className="ml-2">Sections</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[70vh] p-0 bg-[hsl(var(--dtc-background))] text-[hsl(var(--dtc-text))] border-t border-[hsl(var(--dtc-accent))]">
          <div className="p-4">
            <Tabs defaultValue="grid" className="w-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Report Sections</h2>
                <TabsList className="bg-[hsla(var(--dtc-background),0.6)]">
                  <TabsTrigger
                    value="grid"
                    className="data-[state=active]:bg-[hsl(var(--dtc-accent))] data-[state=active]:text-white"
                  >
                    <Grid3X3 size={16} />
                  </TabsTrigger>
                  <TabsTrigger
                    value="list"
                    className="data-[state=active]:bg-[hsl(var(--dtc-accent))] data-[state=active]:text-white"
                  >
                    <Menu size={16} />
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="grid" className="mt-0">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {sections.map((section) => (
                    <div
                      key={section.id}
                      className={`nav-thumbnail ${activeSection === section.id ? 'active' : ''}`}
                      onClick={() => {
                        onSectionClick(section.id);
                        onOpenChange(false);
                      }}
                    >
                      <div className="aspect-video bg-[hsl(var(--dtc-muted-green))] p-4 flex items-center justify-center">
                        <span className="text-center text-sm font-medium">{section.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="list" className="mt-0">
                <div className="space-y-1">
                  {sections.map((section) => (
                    <div
                      key={section.id}
                      className={`list-view-item ${activeSection === section.id ? 'active' : ''}`}
                      onClick={() => {
                        onSectionClick(section.id);
                        onOpenChange(false);
                      }}
                    >
                      <span className="font-medium">{section.title}</span>

                      {section.subSections && section.subSections.length > 0 && (
                        <ul className="ml-4 mt-1 space-y-1">
                          {section.subSections.map((subSection) => (
                            <li
                              key={subSection.id}
                              className="text-sm text-[hsla(var(--dtc-text),0.8)] hover:text-[hsl(var(--dtc-text))]"
                            >
                              {subSection.title}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default NavigationPanel;
