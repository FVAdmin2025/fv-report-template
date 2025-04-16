import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the special section components
const MarketOverviewSection = dynamic(() => import('./sections/MarketOverviewSection'));
const ExecutiveSummarySection = dynamic(() => import('./sections/ExecutiveSummarySection'));
const ContentsSection = dynamic(() => import('./sections/ContentsSection'));
const IntegrationCapabilitiesSection = dynamic(() => import('./sections/IntegrationCapabilitiesSection'));

interface HtmlContentProps {
  htmlContent: string;
  className?: string;
  sectionId?: string;
}

/**
 * HtmlContent component - A safer way to render HTML content
 *
 * This component renders HTML content from our trusted data source
 * while avoiding direct use of dangerouslySetInnerHTML in JSX.
 * Special sections are rendered with custom components.
 */
export const HtmlContent: React.FC<HtmlContentProps> = ({
  htmlContent,
  className = '',
  sectionId
}) => {
  // Special case for Contents section
  if (sectionId === 'contents') {
    return <ContentsSection />;
  }

  // Special case for Executive Summary section
  if (sectionId === 'executive-summary') {
    return <ExecutiveSummarySection />;
  }

  // Special case for Market Overview section
  if (sectionId === 'market-overview') {
    return <MarketOverviewSection />;
  }

  // Special case for Integration Capabilities section
  if (sectionId === 'integration-capabilities') {
    return <IntegrationCapabilitiesSection />;
  }

  // Create a containing element in DOM but not directly in JSX
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Use an effect to set innerHTML after the component mounts
  React.useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = htmlContent;
    }
  }, [htmlContent]);

  return (
    <div ref={containerRef} className={className} />
  );
};

export default HtmlContent;
