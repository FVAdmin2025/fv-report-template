"use client";

import dynamic from 'next/dynamic';
import { reportSections, reportMetadata } from '@/data/report-data';

// Dynamic import with no SSR for the HorizontalReportContainer
const HorizontalReportContainer = dynamic(
  () => import('@/components/HorizontalReportContainer'),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <HorizontalReportContainer
        sections={reportSections}
        metadata={reportMetadata}
      />
    </main>
  );
}
