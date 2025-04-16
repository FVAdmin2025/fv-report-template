'use client';

import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, Sector
} from 'recharts';

// Enhanced market share chart using Recharts
const MarketShareChart = () => {
  const platforms = [
    { name: 'Shopify Plus', value: 40, color: '#223f3d' },
    { name: 'Commercetools', value: 22, color: '#959e92' },
    { name: 'BigCommerce', value: 16, color: '#daceba' },
    { name: 'Adobe Commerce', value: 12, color: '#c99061' },
    { name: 'Others', value: 10, color: '#747c75' },
  ];

  const [activeIndex, setActiveIndex] = React.useState(0);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const renderActiveShape = (props: any) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 6}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <text x={cx} y={cy - 10} dy={8} textAnchor="middle" fill="#333" className="text-sm font-semibold">
          {payload.name}
        </text>
        <text x={cx} y={cy + 15} textAnchor="middle" fill="#666" className="text-sm">
          {`${value}%`}
        </text>
      </g>
    );
  };

  return (
    <div className="data-card">
      <h3 className="font-montserrat font-bold text-lg text-primary mb-6">
        E-commerce Platform Market Share 2025 - DTC Brands $10M-$150M
      </h3>

      <div className="flex flex-col md:flex-row gap-6 mt-8">
        <div className="w-full md:w-1/2">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={platforms}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
                onMouseEnter={onPieEnter}
              >
                {platforms.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => [`${value}%`, 'Market Share']}
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: 'none',
                  borderRadius: '0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="w-full md:w-1/2">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={platforms}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12 }} />
              <YAxis
                type="category"
                dataKey="name"
                tick={{ fontSize: 12 }}
                width={100}
              />
              <Tooltip
                formatter={(value) => [`${value}%`, 'Market Share']}
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: 'none',
                  borderRadius: '0',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                }}
              />
              <Bar dataKey="value" radius={[0, 0, 0, 0]}>
                {platforms.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="text-right text-xs mt-6 text-primary/70">
        Source: BuiltWith Analytics, FunnelVision Research, Q1 2025
      </div>
    </div>
  );
};

// StatBox component with enhanced styling
const StatBox = ({ number, text }: { number: string; text: string }) => {
  return (
    <div className="data-card text-center transition-all duration-300 hover:bg-[#f8f9f6]">
      <div className="text-4xl font-bold text-secondary-gold mb-3 font-neue-montreal">
        {number}
      </div>
      <p className="text-sm text-primary font-montserrat">{text}</p>
    </div>
  );
};

// Enhanced platform adoption table
const PlatformAdoptionTable = () => {
  const data = [
    {
      vertical: 'Fashion & Apparel',
      topPlatform: 'Shopify Plus',
      marketShare: '39%',
      yoyChange: '-3%',
      emergingChallenger: 'Commercetools',
      direction: 'down'
    },
    {
      vertical: 'Beauty & Cosmetics',
      topPlatform: 'Shopify Plus',
      marketShare: '44%',
      yoyChange: '-1%',
      emergingChallenger: 'Fabric',
      direction: 'down'
    },
    {
      vertical: 'Health & Wellness',
      topPlatform: 'Shopify Plus',
      marketShare: '52%',
      yoyChange: '+2%',
      emergingChallenger: 'BigCommerce Enterprise',
      direction: 'up'
    },
    {
      vertical: 'Home Goods',
      topPlatform: 'BigCommerce',
      marketShare: '31%',
      yoyChange: '+5%',
      emergingChallenger: 'Shopify Plus',
      direction: 'up'
    },
    {
      vertical: 'Food & Beverage',
      topPlatform: 'Commercetools',
      marketShare: '27%',
      yoyChange: '+8%',
      emergingChallenger: 'Shopify Plus',
      direction: 'up'
    },
  ];

  return (
    <div className="bg-white rounded-md overflow-hidden shadow-sm">
      <table className="w-full">
        <thead>
          <tr>
            <th className="bg-[#223f3d] text-white p-4 text-left font-semibold">Vertical</th>
            <th className="bg-[#223f3d] text-white p-4 text-left font-semibold">Top Platform</th>
            <th className="bg-[#223f3d] text-white p-4 text-left font-semibold">Market Share</th>
            <th className="bg-[#223f3d] text-white p-4 text-left font-semibold">YoY Change</th>
            <th className="bg-[#223f3d] text-white p-4 text-left font-semibold">Emerging Challenger</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.vertical} className="border-b border-gray-100">
              <td className="p-4 bg-white text-primary font-medium">{row.vertical}</td>
              <td className="p-4 bg-white text-primary">{row.topPlatform}</td>
              <td className="p-4 bg-white text-primary">{row.marketShare}</td>
              <td className="p-4 bg-white">
                <span className={`inline-flex items-center ${row.direction === 'up' ? 'text-success font-semibold' : row.direction === 'down' ? 'text-error font-semibold' : ''}`}>
                  {row.yoyChange}
                  {row.direction === 'up' && <span className="ml-1">↑</span>}
                  {row.direction === 'down' && <span className="ml-1">↓</span>}
                </span>
              </td>
              <td className="p-4 bg-white text-primary">{row.emergingChallenger}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-right text-xs p-3 text-primary/70 bg-white">
        Source: FunnelVision Platform Analysis, BuiltWith Data, Industry Surveys, Q1 2025
      </div>
    </div>
  );
};

// Quote component
const MarketInsightQuote = () => {
  return (
    <blockquote className="transition-all duration-300 hover:bg-[#fffdf8]">
      "We're seeing a fundamental shift in how DTC brands approach technology selection. It's no longer about which platform has the most features—it's about which architecture will deliver the most cohesive customer experience while enabling marketing teams to leverage data for acquisition and retention."
      <cite className="block mt-4 text-sm text-primary/70">— Marcus Rivera, VP of Engineering at Velvet Home (DTC Home Goods, $87M annual revenue)</cite>
    </blockquote>
  );
};

// Key Integration Insight callout
const KeyIntegrationInsight = () => {
  return (
    <div className="callout transition-all duration-300 hover:bg-[#c2d5b2]">
      <h3 className="text-lg font-bold text-primary mb-3">Key Integration Insight</h3>
      <p className="text-primary">
        Commercetools stands out with superior integration capabilities across all dimensions, particularly in API robustness and event streaming. These capabilities translate directly to more effective data synchronization with advertising platforms and analytics systems, supporting superior marketing performance.
      </p>
    </div>
  );
};

// Performance Insight callout
const PerformanceInsight = () => {
  return (
    <div className="callout transition-all duration-300 hover:bg-[#c2d5b2]">
      <h3 className="text-lg font-bold text-primary mb-3">Performance Insight</h3>
      <p className="text-primary">
        Headless and composable commerce implementations consistently outperform monolithic approaches across all key performance indicators. The most significant differentiator is Google Ads ROAS, where composable architectures achieve a 41% higher return than traditional enterprise platforms. This performance gap is primarily driven by improved site speed, enhanced conversion rate optimization flexibility, and superior data integration with advertising platforms.
      </p>
    </div>
  );
};

// Key Integration Finding callout
const KeyIntegrationFinding = () => {
  return (
    <div className="callout transition-all duration-300 hover:bg-[#c2d5b2]">
      <h3 className="text-lg font-bold text-primary mb-3">Key Integration Finding</h3>
      <p className="text-primary">
        Server-side data integration architectures demonstrate significantly higher Google Ads performance, with ROAS improvements of up to 43% compared to client-side integration approaches. This performance gap is primarily due to more accurate attribution, enhanced data quality, and the ability to leverage server-to-server conversion tracking with Google Ads.
      </p>
    </div>
  );
};

// Why This Matters Now callout
const WhyThisMattersNow = () => {
  return (
    <div className="callout transition-all duration-300 hover:bg-[#c2d5b2]">
      <h3 className="text-lg font-bold text-primary mb-3">Why This Matters Now</h3>
      <p className="text-primary">
        With Google's Progressive Web App requirements, the deprecation of third-party cookies, and the evolution of AI-driven marketing tools, 2025 represents a pivotal moment for DTC technology infrastructure. Brands that optimize their technology stacks now will secure lasting competitive advantages in customer acquisition efficiency and operational agility.
      </p>
    </div>
  );
};

// Market Dynamics Section component
const MarketDynamicsSection = () => {
  return (
    <div className="mt-14">
      <h3 className="section-subtitle">Key Market Dynamics</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
        <div className="data-card transition-all duration-300 hover:shadow-md">
          <h4 className="font-montserrat font-bold text-primary text-lg mb-3">Platform Consolidation</h4>
          <p className="text-primary font-montserrat">
            The mid-market DTC platform landscape is consolidating, with the top five platforms now controlling 82% of the market, up from 76% in 2024. This trend is driven by increased integration capabilities, which provide competitive advantages for established platforms.
          </p>
        </div>

        <div className="data-card transition-all duration-300 hover:shadow-md">
          <h4 className="font-montserrat font-bold text-primary text-lg mb-3">Rise of Composable Commerce</h4>
          <p className="text-primary font-montserrat">
            The shift toward composable and headless architectures continues to accelerate, with 74% of DTC brands either implementing or actively evaluating these approaches. This represents a 23% increase from 2024, spurred by the need for greater flexibility in frontend experiences and integration with marketing technologies.
          </p>
        </div>

        <div className="data-card transition-all duration-300 hover:shadow-md">
          <h4 className="font-montserrat font-bold text-primary text-lg mb-3">Integration-First Decision Making</h4>
          <p className="text-primary font-montserrat">
            Platform selection criteria have evolved, with 68% of DTC technology decision-makers now ranking integration capabilities as their top priority, ahead of feature sets (42%) and cost (37%). This shift reflects the growing recognition that seamless data flow between systems directly impacts marketing performance and operational efficiency.
          </p>
        </div>

        <div className="data-card transition-all duration-300 hover:shadow-md">
          <h4 className="font-montserrat font-bold text-primary text-lg mb-3">Technology Investment Patterns</h4>
          <p className="text-primary font-montserrat">
            DTC brands in the 7-9 figure range are increasing their technology investments by an average of 31% in 2025, with the largest share directed toward customer data infrastructure (42%) and composable commerce implementations (27%).
          </p>
        </div>
      </div>

      <MarketInsightQuote />
    </div>
  );
};

const MarketOverviewSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <p className="text-primary font-montserrat mb-8">
        The DTC technology ecosystem continues to evolve at a rapid pace, with platform consolidation occurring alongside the proliferation of specialized solutions. Our analysis of market share and adoption trends reveals several key developments shaping the landscape in 2025:
      </p>

      <MarketShareChart />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
        <StatBox
          number="74%"
          text="of DTC brands in the 7-9 figure range are using or actively exploring composable commerce approaches"
        />
        <StatBox
          number="43%"
          text="higher average Google Ads ROAS for brands with comprehensive server-side data integration"
        />
        <StatBox
          number="31%"
          text="of brands plan to replatform or significantly modify their tech stack in the next 12 months"
        />
      </div>

      <h3 className="section-subtitle">Platform Adoption by Vertical</h3>
      <PlatformAdoptionTable />

      <div className="my-10">
        <KeyIntegrationInsight />
      </div>

      <MarketDynamicsSection />

      <div className="my-10">
        <PerformanceInsight />
      </div>

      <div className="mt-10 mb-6">
        <KeyIntegrationFinding />
      </div>

      <div className="my-10">
        <WhyThisMattersNow />
      </div>
    </div>
  );
};

export default MarketOverviewSection;
