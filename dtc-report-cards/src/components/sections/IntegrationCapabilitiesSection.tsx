'use client';

import React from 'react';

const IntegrationCapabilitiesMatrix = () => {
  const platforms = [
    {
      name: 'Shopify Plus',
      apiRobustness: 'Good',
      googleAdsIntegration: 'Excellent',
      webhookSupport: 'Good',
      eventStreaming: 'Average',
      dataCompleteness: 'Good'
    },
    {
      name: 'Commercetools',
      apiRobustness: 'Excellent',
      googleAdsIntegration: 'Good',
      webhookSupport: 'Excellent',
      eventStreaming: 'Excellent',
      dataCompleteness: 'Excellent'
    },
    {
      name: 'BigCommerce',
      apiRobustness: 'Excellent',
      googleAdsIntegration: 'Good',
      webhookSupport: 'Good',
      eventStreaming: 'Average',
      dataCompleteness: 'Good'
    },
    {
      name: 'Adobe Commerce',
      apiRobustness: 'Good',
      googleAdsIntegration: 'Average',
      webhookSupport: 'Average',
      eventStreaming: 'Average',
      dataCompleteness: 'Good'
    },
    {
      name: 'Salesforce Commerce',
      apiRobustness: 'Good',
      googleAdsIntegration: 'Average',
      webhookSupport: 'Good',
      eventStreaming: 'Good',
      dataCompleteness: 'Average'
    }
  ];

  const getRatingClass = (rating: string) => {
    switch (rating) {
      case 'Excellent':
        return 'bg-[#4cd78a] text-white';
      case 'Good':
        return 'bg-[#c99061] text-white';
      case 'Average':
        return 'bg-[#f6c32c] text-white';
      default:
        return '';
    }
  };

  return (
    <div className="bg-white rounded-md overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="overflow-x-auto">
        <table className="data-table w-full">
          <thead>
            <tr>
              <th className="bg-[#223f3d] text-white">Platform</th>
              <th className="bg-[#223f3d] text-white">API Robustness</th>
              <th className="bg-[#223f3d] text-white">Google Ads Integration</th>
              <th className="bg-[#223f3d] text-white">Webhook Support</th>
              <th className="bg-[#223f3d] text-white">Event Streaming</th>
              <th className="bg-[#223f3d] text-white">Data Completeness</th>
            </tr>
          </thead>
          <tbody>
            {platforms.map((platform) => (
              <tr key={platform.name} className="transition-all duration-300 hover:bg-[#f8f9f6]">
                <td className="bg-white text-primary font-medium">{platform.name}</td>
                <td className="bg-white">
                  <span className={`inline-block px-3 py-1 rounded-md text-xs font-semibold ${getRatingClass(platform.apiRobustness)} transition-all duration-300 hover:shadow-sm hover:scale-105`}>
                    {platform.apiRobustness}
                  </span>
                </td>
                <td className="bg-white">
                  <span className={`inline-block px-3 py-1 rounded-md text-xs font-semibold ${getRatingClass(platform.googleAdsIntegration)} transition-all duration-300 hover:shadow-sm hover:scale-105`}>
                    {platform.googleAdsIntegration}
                  </span>
                </td>
                <td className="bg-white">
                  <span className={`inline-block px-3 py-1 rounded-md text-xs font-semibold ${getRatingClass(platform.webhookSupport)} transition-all duration-300 hover:shadow-sm hover:scale-105`}>
                    {platform.webhookSupport}
                  </span>
                </td>
                <td className="bg-white">
                  <span className={`inline-block px-3 py-1 rounded-md text-xs font-semibold ${getRatingClass(platform.eventStreaming)} transition-all duration-300 hover:shadow-sm hover:scale-105`}>
                    {platform.eventStreaming}
                  </span>
                </td>
                <td className="bg-white">
                  <span className={`inline-block px-3 py-1 rounded-md text-xs font-semibold ${getRatingClass(platform.dataCompleteness)} transition-all duration-300 hover:shadow-sm hover:scale-105`}>
                    {platform.dataCompleteness}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-right text-xs p-3 text-primary/70 bg-white">
        Source: FunnelVision Platform Assessment, Q1 2025
      </div>
    </div>
  );
};

const KeyIntegrationInsight = () => {
  return (
    <div className="callout transition-all duration-300 hover:bg-[#c2d5b2] hover:shadow-md">
      <h3 className="font-montserrat font-bold text-lg text-primary mb-4">Key Integration Insight</h3>
      <p className="text-primary">
        Commercetools stands out with superior integration capabilities across all dimensions, particularly in API robustness and event streaming. These capabilities translate directly to more effective data synchronization with advertising platforms and analytics systems, supporting superior marketing performance.
      </p>
    </div>
  );
};

const GoogleAdsIntegrationPoint = ({
  title,
  impact,
  description,
  benefits
}: {
  title: string;
  impact: string;
  description: string;
  benefits: string[]
}) => {
  return (
    <div className="data-card transition-all duration-300 hover:shadow-lg hover:border-l-4 hover:border-l-[#4cd78a]">
      <div className="flex justify-between items-start mb-4">
        <h4 className="font-montserrat font-bold text-lg text-primary">{title}</h4>
        <span className="roi-impact impact-high transition-all duration-300 hover:scale-105">+{impact} ROAS impact</span>
      </div>
      <p className="text-primary mb-4">{description}</p>
      <div>
        <h5 className="text-sm font-bold mb-2">Key Benefits:</h5>
        <ul className="list-disc pl-5 space-y-1">
          {benefits.map((benefit) => (
            <li key={`${title}-${benefit.substring(0, 20)}`} className="text-sm group">
              <span className="transition-all duration-300 group-hover:text-[#4cd78a]">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const IntegrationChallengeCard = ({
  title,
  challenge,
  impact,
  solutions
}: {
  title: string;
  challenge: string;
  impact: string;
  solutions: string[]
}) => {
  return (
    <div className="data-card transition-all duration-300 hover:shadow-lg hover:border-l-4 hover:border-l-[#c39753]">
      <h3 className="font-montserrat font-bold text-lg text-primary mb-2">{title}</h3>
      <p className="text-primary/90 font-bold mb-1">Challenge:</p>
      <p className="text-primary mb-4">{challenge}</p>

      <p className="text-primary/90 font-bold mb-1">Impact:</p>
      <p className="text-primary mb-4">{impact}</p>

      <p className="text-primary/90 font-bold mb-1">Effective Solutions:</p>
      <ul className="list-disc pl-5 space-y-1 text-sm">
        {solutions.map((solution, index) => (
          <li key={index} className="text-sm group">
            <span className="transition-all duration-300 group-hover:text-[#c39753]">{solution}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const MarketingTechQuote = () => {
  return (
    <blockquote className="transition-all duration-300 hover:bg-[#fffdf8] hover:shadow-md">
      "The quality of your technology integrations directly determines your Google Ads performance. We saw a 34% lift in ROAS simply by implementing server-side conversion tracking and enhancing our product feed integration—without changing our creative or bidding strategies at all."
      <cite>— Michael Chang, Director of Marketing Technology at Urban Petals (DTC Home Goods, $34M annual revenue)</cite>
    </blockquote>
  );
};

const IntegrationCapabilitiesSection = () => {
  const googleAdsIntegrationPoints = [
    {
      title: 'Server-Side Conversion Tracking',
      impact: '39%',
      description: 'Direct server to server transmission of conversion data to Google Ads, bypassing client-side limitations.',
      benefits: [
        'Improved conversion accuracy (+23%)',
        'Overcomes ad blockers and cookie limitations',
        'Enhanced offline conversion attribution'
      ]
    },
    {
      title: 'Enhanced Ecommerce Data',
      impact: '31%',
      description: 'Comprehensive product interaction and purchase data synchronized with Google Analytics and Google Ads.',
      benefits: [
        'Granular product performance insights',
        'Enhanced audience segmentation',
        'Improved product-level ROAS optimization'
      ]
    },
    {
      title: 'Customer Lifetime Value Signals',
      impact: '24%',
      description: 'Integration of purchase history and predicted LTV data to optimize customer acquisition targeting.',
      benefits: [
        'Acquisition targeting by lifetime value',
        'Reduced acquisition costs for high-LTV segments',
        'More accurate budget allocation across campaigns'
      ]
    },
    {
      title: 'Product Feed Optimization',
      impact: '17%',
      description: 'Automated, real-time synchronization of product data with Google Merchant Center.',
      benefits: [
        'Enhanced product ad display relevance',
        'Real-time inventory and pricing accuracy',
        'Improved product approval rates and quality scores'
      ]
    }
  ];

  const integrationChallenges = [
    {
      title: 'Data Synchronization Latency',
      challenge: 'Delayed data synchronization between ecommerce platforms and marketing systems, resulting in suboptimal campaign optimization.',
      impact: '17% lower ROAS for brands with synchronization delays exceeding 1 hour.',
      solutions: [
        'Implementation of event-driven architecture (68% of high performers)',
        'Utilization of streaming data platforms like Kafka or Kinesis (42%)',
        'Development of custom middleware for real-time synchronization (37%)'
      ]
    },
    {
      title: 'Integration Data Quality',
      challenge: 'Incomplete or inconsistent data transmission between systems, compromising analytics accuracy and campaign performance.',
      impact: '24% lower ROAS for brands with significant data quality issues.',
      solutions: [
        'Implementation of data validation layers (73% of high performers)',
        'Centralized customer data platforms with unified profiles (62%)',
        'Regular data quality audits and monitoring (58%)'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8">
      <h2 className="text-2xl font-bold text-primary mb-6">Integration Capabilities Matrix</h2>

      <p className="text-primary mb-6">
        The integration capabilities of ecommerce platforms vary significantly, directly impacting marketing performance and operational efficiency. Our assessment evaluates leading platforms across key integration dimensions:
      </p>

      <IntegrationCapabilitiesMatrix />

      <div className="my-10">
        <KeyIntegrationInsight />
      </div>

      <h2 className="text-2xl font-bold text-primary mb-6">Critical Google Ads Integration Points</h2>

      <p className="text-primary mb-6">
        The quality of integration between ecommerce platforms and Google Ads significantly impacts advertising performance. Our research identified five critical integration points that determine effectiveness:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {googleAdsIntegrationPoints.slice(0, 2).map((point) => (
          <GoogleAdsIntegrationPoint
            key={point.title}
            title={point.title}
            impact={point.impact}
            description={point.description}
            benefits={point.benefits}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {googleAdsIntegrationPoints.slice(2, 4).map((point) => (
          <GoogleAdsIntegrationPoint
            key={point.title}
            title={point.title}
            impact={point.impact}
            description={point.description}
            benefits={point.benefits}
          />
        ))}
      </div>

      <h2 className="text-2xl font-bold text-primary mb-6">Integration Challenges & Solutions</h2>

      <p className="text-primary mb-6">
        Our research identified common integration challenges faced by DTC brands and effective solutions implemented by high-performing organizations:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {integrationChallenges.map((challenge, index) => (
          <IntegrationChallengeCard
            key={index}
            title={challenge.title}
            challenge={challenge.challenge}
            impact={challenge.impact}
            solutions={challenge.solutions}
          />
        ))}
      </div>

      <MarketingTechQuote />
    </div>
  );
};

export default IntegrationCapabilitiesSection;
