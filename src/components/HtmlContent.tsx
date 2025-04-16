import type { FC } from "react";

/**
 * Renders HTML that was parsed from the report.
 * Styling is inherited from the surrounding Card / page.
 */
const HtmlContent: FC<{ html: string }> = ({ html }) => (
  <div
    className="prose max-w-none"
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

export default HtmlContent;

