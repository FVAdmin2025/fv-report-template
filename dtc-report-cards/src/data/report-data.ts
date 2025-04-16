import type { Section } from '@/types';

export const reportSections: Section[] = [
  {
    id: 'contents',
    title: 'Contents',
    content: "<!-- Custom component will render instead of this HTML -->"
  },
  {
    id: 'executive-summary',
    title: 'Executive Summary',
    content: "<!-- Custom component will render instead of this HTML -->"
  },
  {
    id: 'introduction',
    title: 'Introduction & Methodology',
    content: `
      <h2>The Technology Imperative</h2>
      <p>For direct-to-consumer brands, technology decisions have evolved from operational considerations to strategic imperatives. As competition intensifies and customer acquisition costs continue to rise, the effectiveness of a brand's technology stack directly impacts its ability to compete and grow profitably.</p>

      <p>This report focuses specifically on how technology platform choices and integration strategies affect the performance of 7-9 figure DTC brands, with particular attention to their impact on advertising efficiency and customer acquisition economics.</p>

      <div style="background-color: rgba(183, 204, 166, 0.4); padding: 1.5rem; margin: 1.5rem 0;">
        <h3>Why This Matters Now</h3>
        <p>With Google's Progressive Web App requirements, the deprecation of third-party cookies, and the evolution of AI-driven marketing tools, 2025 represents a pivotal moment for DTC technology infrastructure. Brands that optimize their technology stacks now will secure lasting competitive advantages in customer acquisition efficiency and operational agility.</p>
      </div>

      <h2>Research Methodology</h2>
      <p>This report synthesizes multiple research streams to provide a comprehensive view of technology performance in the DTC space:</p>

      <ul>
        <li><strong>Quantitative Platform Analysis:</strong> Performance data from 327 DTC brands with annual revenues between $10M and $150M</li>
        <li><strong>Technology Implementation Survey:</strong> Detailed technology stack assessments from 184 DTC marketing and technology leaders</li>
        <li><strong>Advertising Performance Data:</strong> Google Ads and Meta Ads performance metrics correlated with technology implementation details</li>
        <li><strong>In-Depth Case Studies:</strong> 12 detailed examinations of high-performing and struggling technology implementations</li>
        <li><strong>Industry Expert Interviews:</strong> Insights from 18 technology leaders at platform providers, agencies, and successful DTC brands</li>
      </ul>

      <p>All data was collected between January and March 2025, ensuring the findings reflect the current state of the market and technology landscape.</p>
    `,
    subSections: [
      {
        id: 'scope-definitions',
        title: 'Scope & Definitions',
        content: `
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin: 2rem 0;">
            <div style="background-color: #ffffff; padding: 1.5rem; border: 1px solid rgba(200, 200, 200, 0.3);">
              <h3>DTC Technology Stack</h3>
              <p>The complete set of integrated technologies that power online shopping experiences, customer data management, marketing automation, and business operations.</p>
            </div>

            <div style="background-color: #ffffff; padding: 1.5rem; border: 1px solid rgba(200, 200, 200, 0.3);">
              <h3>Integration Effectiveness</h3>
              <p>The seamlessness of data flow between systems, measured by latency, accuracy, completeness, and bidirectionality of synchronization.</p>
            </div>

            <div style="background-color: #ffffff; padding: 1.5rem; border: 1px solid rgba(200, 200, 200, 0.3);">
              <h3>Performance Impact</h3>
              <p>Quantifiable effects on key performance indicators including conversion rates, customer acquisition costs, lifetime value, and advertising return on investment.</p>
            </div>
          </div>

          <blockquote>
            "The difference between high-performing DTC brands and the rest isn't just their product or creative—it's how effectively their technology enables them to identify, acquire, and retain high-value customers at scale."
            <cite>— Sarah Chen, CTO at Flourish Beauty (DTC brand with 127% YoY growth)</cite>
          </blockquote>
        `
      }
    ]
  },
  {
    id: 'market-overview',
    title: 'Market Overview',
    content: "<!-- Custom component will render instead of this HTML -->"
  },
  {
    id: 'integration-capabilities',
    title: 'Integration Capabilities & Challenges',
    content: "<!-- Custom component will render instead of this HTML -->"
  },
  {
    id: 'benchmarks',
    title: 'Platform Performance Benchmarks',
    content: `
      <h2>Performance by Platform Type</h2>
      <p>Our analysis of 327 DTC brands reveals significant performance differences based on platform selection and implementation approach. The following metrics represent aggregated performance indicators across key categories:</p>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Platform Type</th>
              <th>Avg. Conversion Rate</th>
              <th>Page Load Speed</th>
              <th>Google Ads ROAS</th>
              <th>Customer Acquisition Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monolithic SaaS</td>
              <td>2.7%</td>
              <td>2.8s</td>
              <td>4.1x</td>
              <td>$42</td>
            </tr>
            <tr>
              <td>On-Premise/Enterprise</td>
              <td>2.4%</td>
              <td>3.3s</td>
              <td>3.7x</td>
              <td>$47</td>
            </tr>
            <tr>
              <td>Headless/Composable</td>
              <td>3.2%</td>
              <td>1.9s</td>
              <td>5.8x</td>
              <td>$36</td>
            </tr>
            <tr>
              <td>Best-of-Breed</td>
              <td>2.9%</td>
              <td>2.5s</td>
              <td>4.8x</td>
              <td>$39</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>Key performance insight: Headless and composable architectures demonstrate superior performance across all metrics, with particularly strong advantages in conversion rates (18% higher than average) and Google Ads ROAS (41% higher than average).</p>
    `
  },
  {
    id: 'conclusion',
    title: 'Conclusion & Future Outlook',
    content: `
      <h2>The Path Forward for DTC Technology</h2>
      <p>The trends and data presented in this report point to a clear evolution in how successful DTC brands approach technology decisions. The shift from platform-centric to integration-centric thinking represents a fundamental change in how brands evaluate, implement, and leverage their technology investments.</p>

      <h3>Key Takeaways</h3>
      <div class="conclusion-points">
        <div class="conclusion-point">
          <h4>Integration Is the New Feature Set</h4>
          <p>The ability to seamlessly connect systems and data flows has surpassed feature richness as the primary consideration in technology selection. Brands are increasingly willing to trade comprehensive all-in-one solutions for architectures that enable frictionless data exchange.</p>
        </div>

        <div class="conclusion-point">
          <h4>Composable Architectures Will Dominate</h4>
          <p>The superior performance metrics of composable and headless implementations across all key indicators points to their inevitable dominance in the 7-9 figure DTC space. By 2026, we project that over 85% of brands in this segment will have adopted or be actively transitioning to composable approaches.</p>
        </div>

        <div class="conclusion-point">
          <h4>Marketing-Engineering Alignment Is Critical</h4>
          <p>The brands achieving the highest ROI from their technology investments are those that have established strong collaboration models between marketing and engineering teams. This alignment enables both technical excellence and marketing agility.</p>
        </div>
      </div>

      <h3>Looking Ahead: 2026 and Beyond</h3>
      <p>As DTC technology continues to evolve, several emerging trends will shape the landscape in the coming years:</p>

      <ul>
        <li><strong>AI-Augmented Marketing Orchestration:</strong> The integration of generative AI into customer journey orchestration will enable increasingly sophisticated personalization at scale.</li>
        <li><strong>Zero/First-Party Data Ecosystems:</strong> As third-party data becomes less available, platforms that excel at zero and first-party data collection and activation will become mission-critical.</li>
        <li><strong>Cross-Channel Identity Resolution:</strong> Technologies that can maintain consistent customer identification across channels and devices will gain increased prominence and investment.</li>
      </ul>

      <p>The brands that will thrive in this evolving landscape will be those that view their technology stack not as a collection of tools but as a strategic asset that directly enables competitive differentiation and customer acquisition efficiency.</p>
    `
  }
];

export const reportMetadata = {
  title: 'The DTC Technology Stack Report 2025',
  subtitle: 'DTC Trends and Insights',
  author: 'FunnelVision.AGENCY',
  year: 2025,
  headerButtons: [
    'Market Analytics',
    'Integration Insights',
    'Performance Metrics'
  ],
  tagline: 'Data-driven insights for 7-9 figure DTC brands'
};
