import SectionRenderer from "@/components/SectionRenderer";
import { getSectionBySlug } from "@/lib/sections";

export default async function SectionPage({ params }: { params: { slug: string }}) {
  const section = await getSectionBySlug(params.slug);
  return <SectionRenderer section={section} />;
}

