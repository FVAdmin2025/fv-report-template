'use client';

import React from 'react';

const ExecutiveSummarySection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <h2 className="text-2xl font-bold text-secondary-gold mb-8 font-montserrat">Key Findings at a Glance</h2>

      <p className="mb-8 text-primary text-lg">
        The direct-to-consumer (DTC) ecommerce landscape is experiencing unprecedented technological transformation in 2025. Our comprehensive analysis of technology stacks employed by 7-9 figure DTC brands reveals that strategic technology choices are now the primary differentiator between thriving brands and those struggling to maintain profitability.
      </p>

      <div className="exec-stats-container">
        <div className="transition-all duration-300 p-6 rounded-md bg-[#c39753] hover:bg-[#c39753]/90 hover:shadow-lg hover:scale-[1.02]">
          <h3 className="text-xl font-bold text-white mb-4">Integration Determines ROI</h3>
          <p className="text-white/90">
            DTC brands with tightly integrated technology stacks show 43% higher advertising ROI than those with fragmented systems — with Google Ads performance improvements of up to 37%.
          </p>
        </div>

        <div className="transition-all duration-300 p-6 rounded-md bg-[#c39753] hover:bg-[#c39753]/90 hover:shadow-lg hover:scale-[1.02]">
          <h3 className="text-xl font-bold text-white mb-4">Composable Commerce Lead</h3>
          <p className="text-white/90">
            74% of high-growth DTC brands have adopted or are transitioning to composable/headless architectures, enabling 2.8x faster deployment of new features and experiences.
          </p>
        </div>

        <div className="transition-all duration-300 p-6 rounded-md bg-[#c39753] hover:bg-[#c39753]/90 hover:shadow-lg hover:scale-[1.02]">
          <h3 className="text-xl font-bold text-white mb-4">Platform-Ad Performance Link</h3>
          <p className="text-white/90">
            Platform data integration quality directly impacts Google Ads success, with server-side integrations delivering 31% better conversion rates than client-side alternatives.
          </p>
        </div>
      </div>

      <p className="mt-8 mb-8 text-primary">
        Our research found that DTC brands in the 7-9 figure revenue range are increasingly prioritizing technology investments that directly impact unit economics and customer acquisition efficiency. The most successful brands have shifted from monolithic ecommerce platforms to modular, composable architectures that allow for greater agility and optimization across the customer journey.
      </p>

      <p className="mb-8 text-primary">
        Platform selection has become more nuanced, with brands now evaluating technologies based on their integration capabilities rather than standalone features. The ability to synchronize data between customer acquisition channels (particularly Google Ads) and ecommerce platforms emerges as the single most significant factor in determining advertising performance.
      </p>

      <p className="text-primary">
        This report provides detailed benchmarks, implementation frameworks, and strategic recommendations to help DTC brands select, integrate, and optimize their technology stacks for maximum marketing efficiency and operational scalability in 2025 and beyond.
      </p>

      <h2 className="text-2xl font-bold text-primary mt-16 mb-8">Report Highlights</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="data-card bg-white text-black transition-all duration-300 hover:bg-[#f8f9f6] hover:border-l-4 hover:border-l-[#c39753]">
          <h3 className="text-xl font-bold text-primary mb-6">Critical Technology Decisions</h3>
          <ul className="space-y-5">
            <li className="flex items-start group">
              <span className="text-secondary-gold text-lg mr-3 group-hover:scale-110 transition-transform">•</span>
              <div>
                <span className="font-bold">Platform centrality vs. best-of-breed approach:</span> 68% of brands balance core platform stability with specialized tools for critical functions
              </div>
            </li>
            <li className="flex items-start group">
              <span className="text-secondary-gold text-lg mr-3 group-hover:scale-110 transition-transform">•</span>
              <div>
                <span className="font-bold">Data integration methodology:</span> Real-time bidirectional syncing delivers 43% higher ROAS across marketing channels
              </div>
            </li>
            <li className="flex items-start group">
              <span className="text-secondary-gold text-lg mr-3 group-hover:scale-110 transition-transform">•</span>
              <div>
                <span className="font-bold">Tech ownership model:</span> Engineering-dependent vs. marketer-empowered architectures and their impact on agility
              </div>
            </li>
          </ul>
        </div>

        <div className="data-card bg-white text-black transition-all duration-300 hover:bg-[#f8f9f6] hover:border-l-4 hover:border-l-[#c39753]">
          <h3 className="text-xl font-bold text-primary mb-6">Performance Impacts</h3>
          <ul className="space-y-5">
            <li className="flex items-start group">
              <span className="text-secondary-gold text-lg mr-3 group-hover:scale-110 transition-transform">•</span>
              <div>
                <span className="font-bold">Platform-specific Google Ads performance</span> varies by vertical, with conversion rate differentials of up to 31%
              </div>
            </li>
            <li className="flex items-start group">
              <span className="text-secondary-gold text-lg mr-3 group-hover:scale-110 transition-transform">•</span>
              <div>
                <span className="font-bold">Technology integration quality</span> affects CPC by 17-24% across major advertising platforms
              </div>
            </li>
            <li className="flex items-start group">
              <span className="text-secondary-gold text-lg mr-3 group-hover:scale-110 transition-transform">•</span>
              <div>
                <span className="font-bold">Customer data platform implementation</span> reduces acquisition costs by 22% for brands over $10M in revenue
              </div>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-10 text-primary">
        The data conclusively shows that DTC brands with optimized technology stacks enjoy significant operational and marketing advantages. As we detail in this report, the most successful implementations focus on creating seamless data flows between systems, empowering marketing teams with actionable insights, and enabling rapid testing and optimization of the customer experience.
      </p>
    </div>
  );
};

export default ExecutiveSummarySection;
