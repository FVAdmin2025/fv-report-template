import React from 'react';

const IntroductionSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
        {/* Left column */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">The Technology Imperative</h2>

          <p className="text-primary mb-6">
            For direct-to-consumer brands, technology decisions have evolved from operational considerations to strategic imperatives. As competition intensifies and customer acquisition costs continue to rise, the effectiveness of a brand's technology stack directly impacts its ability to compete and grow profitably.
          </p>

          <p className="text-primary mb-8">
            This report focuses specifically on how technology platform choices and integration strategies affect the performance of 7-9 figure DTC brands, with particular attention to their impact on advertising efficiency and customer acquisition economics.
          </p>

          <div className="bg-[#C8D9C2] bg-opacity-40 p-8 rounded-sm">
            <h3 className="text-xl font-semibold text-primary mb-4">Why This Matters Now</h3>

            <p className="text-primary">
              With Google's Progressive Web App requirements, the deprecation of third-party cookies, and the evolution of AI-driven marketing tools, 2025 represents a pivotal moment for DTC technology infrastructure. Brands that optimize their technology stacks now will secure lasting competitive advantages in customer acquisition efficiency and operational agility.
            </p>
          </div>
        </div>

        {/* Right column */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">Research Methodology</h2>

          <p className="text-primary mb-6">
            This report synthesizes multiple research streams to provide a comprehensive view of technology performance in the DTC space:
          </p>

          <ul className="space-y-4 mb-6">
            <li className="flex items-start">
              <span className="text-primary font-bold mr-2">•</span>
              <div>
                <span className="font-bold">Quantitative Platform Analysis:</span> Performance data from 327 DTC brands with annual revenues between $10M and $150M
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-2">•</span>
              <div>
                <span className="font-bold">Technology Implementation Survey:</span> Detailed technology stack assessments from 184 DTC marketing and technology leaders
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-2">•</span>
              <div>
                <span className="font-bold">Advertising Performance Data:</span> Google Ads and Meta Ads performance metrics correlated with technology implementation details
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-2">•</span>
              <div>
                <span className="font-bold">In-Depth Case Studies:</span> 12 detailed examinations of high-performing and struggling technology implementations
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-2">•</span>
              <div>
                <span className="font-bold">Industry Expert Interviews:</span> Insights from 18 technology leaders at platform providers, agencies, and successful DTC brands
              </div>
            </li>
          </ul>

          <p className="text-primary mt-8">
            All data was collected between January and March 2025, ensuring the findings reflect the current state of the market and technology landscape.
          </p>
        </div>
      </div>

      {/* Scope & Definitions Section */}
      <div className="mt-16 mb-16">
        <h2 className="text-2xl font-bold text-primary mb-8">Scope & Definitions</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-100 rounded-sm p-6">
            <h3 className="text-xl font-semibold text-primary mb-3">DTC Technology Stack</h3>
            <p className="text-primary">
              The complete set of integrated technologies that power online shopping experiences, customer data management, marketing automation, and business operations.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-sm p-6">
            <h3 className="text-xl font-semibold text-primary mb-3">Integration Effectiveness</h3>
            <p className="text-primary">
              The seamlessness of data flow between systems, measured by latency, accuracy, completeness, and bidirectionality of synchronization.
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-sm p-6">
            <h3 className="text-xl font-semibold text-primary mb-3">Performance Impact</h3>
            <p className="text-primary">
              Quantifiable effects on key performance indicators including conversion rates, customer acquisition costs, lifetime value, and advertising return on investment.
            </p>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="border-l-4 border-accent p-6 mb-16">
        <blockquote className="italic text-primary text-lg mb-2">
          "The difference between high-performing DTC brands and the rest isn't just their product or creative—it's how effectively their technology enables them to identify, acquire, and retain high-value customers at scale."
        </blockquote>
        <cite className="text-primary/70 block">
          — Sarah Chen, CTO at Flourish Beauty (DTC brand with 127% YoY growth)
        </cite>
      </div>
    </div>
  );
};

export default IntroductionSection;
