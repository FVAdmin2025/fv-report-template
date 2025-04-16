import type { FC } from "react";

/**
 * Generic raw‑HTML renderer.
 * The parent card or page supplies typography & spacing.
 */
const HtmlContent: FC<{ html: string }> = ({ html }) => (
  <div
    className="prose max-w-none"
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

export default HtmlContent;
