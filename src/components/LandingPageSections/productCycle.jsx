import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { FaSeedling, FaHeart } from 'react-icons/fa';

Chart.register(ArcElement, Tooltip, Legend);

const PieChartComponent = ({ title, data, colors, offset }) => {
  const chartData = {
    labels: ['Energy', 'Labor', 'Ingredients / Materials', 'Water', 'Waste', 'Ownership & Identity','Corporate Social Responsibility (CSR)'],
    datasets: [
      {
        label: title,
        data: data,
        backgroundColor: colors,
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  };

  const certificationsInfo = {
    Energy: ['Energy Star', 'ISO 50001'],
    Labor: ['Fair Trade Certified', 'SA8000'],
    'Ingredients / Materials': ['USDA Organic', 'Cradle to Cradle Certified'],
    Water: ['Water Stewardship', 'Alliance for Water Stewardship'],
    Waste: ['Zero Waste Certified', 'Recycling Certification'],
    OwnershipAndIdentity: ['Women-Owned','Black-Owned', 'Worker-Owned Cooperative'],
    CorporateSocialResponsibility: ['charitable donations','give back programs', 'political donations'],
  };
  
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        usePointStyle: true,
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            const certifications = certificationsInfo[label] || [];
            const certificationList = certifications.join(', ') || 'No certifications';
            return `\nCertifications: ${certificationList}`;
          },
        },
        backgroundColor: 'rgba(NaN, 229, 223, 0.86)',
        bodySpacing: 4,
        padding: 10,
        cornerRadius: 4,
        titleAlign: 'left',
        bodyFont: {
          size: 12,
          weight: 'normal',
        },
        bodyColor: '#fff',
        multiKeyBackground: '#000',
        boxPadding: 10,
        displayColors: true,
        xAlign: 'center',
        yAlign: 'center',
        caretPadding: 10,
        titleFont: {
          weight: 'bold',
          size: 14,
        },
        footerFont: {
          size: 10,
          style: 'italic',
        },
        // Tooltip custom styling to handle text wrapping
        custom: function (tooltipModel) {
          const tooltipEl = tooltipModel.tooltipEl;
          if (tooltipEl) {
            tooltipEl.style.zIndex = '9999'; // Ensure it is on top
            tooltipEl.style.maxWidth = '250px'; // Set max width
            tooltipEl.style.whiteSpace = 'pre-wrap'; // Ensure text wrapping
            tooltipEl.style.wordWrap = 'break-word'; // Break words if necessary
          }
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
      <div style={{ maxWidth: '250px', height: '250px', margin: `20px ${offset}px`, position: 'relative', overflow: 'visible' }}>
        <h3 style={{ textAlign: 'center' }}>{title}</h3>
        <Pie data={chartData} options={options} />
      </div>

  );
};

const ProductTimelinePage = () => {
  // Data for each pie chart
  const sourcingData = [15, 15, 15, 15, 15, 15, 10];
  const manufacturingData = [15, 15, 15, 15, 15, 15, 10];
  const packagingData = [15, 15, 15, 15, 15, 15, 10];
  const transportData = [15, 15, 15, 15, 15, 15, 10];

  // Natural color tones for each category
  const naturalColors = [
    '#A8D5BA', // Energy - Soft green
    '#F0A868', // Labor - Earthy orange
    '#A78BBF', // OwnershipAndIdentity - muted Purple
    '#9FD3C7', // Ingredients / Materials - Soft blue
    '#F3EED9', // Water - Light beige
    '#D1A65A', // Waste - Brown
    '#E9967A', // CorporateSocialResponsibility - Warm coral
  ];

  return (
    <div style={{ padding: '50px', backgroundColor: '#4E99A9', fontFamily: "'Your Site Font'" }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 600, fontSize: '2rem',  textTransform: 'capitalize' }}>
        Know Your Impact at Every Step
      </h1>

      {/* Color Legend */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px', marginBottom: '10px' }}>
          <div style={{ width: '15px', height: '15px', marginRight: '8px', backgroundColor: '#A8D5BA' }}></div>
          <span>Energy</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px', marginBottom: '10px' }}>
          <div style={{ width: '15px', height: '15px', marginRight: '8px', backgroundColor: '#F0A868' }}></div>
          <span>Labor</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px', marginBottom: '10px' }}>
          <div style={{ width: '15px', height: '15px', marginRight: '8px', backgroundColor: '#9FD3C7' }}></div>
          <span>Ingredients / Materials</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px', marginBottom: '10px' }}>
          <div style={{ width: '15px', height: '15px', marginRight: '8px', backgroundColor: '#F3EED9' }}></div>
          <span>Water</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px', marginBottom: '10px' }}>
          <div style={{ width: '15px', height: '15px', marginRight: '8px', backgroundColor: '#D1A65A' }}></div>
          <span>Waste</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px', marginBottom: '10px' }}>
          <div style={{ width: '15px', height: '15px', marginRight: '8px', backgroundColor: '#A78BBF' }}></div>
          <span>Ownership & Identity</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px', marginBottom: '10px' }}>
          <div style={{ width: '15px', height: '15px', marginRight: '8px', backgroundColor: '#E9967A' }}></div>
          <span> Corporate Social Responsibility (CSR)</span>
        </div>
      </div>

      {/* Timeline with Icons and Pie Charts */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        {/* Timeline Line */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50px',
          right: '50px',
          height: '8px',
          backgroundColor: '#2C3A46',
          zIndex: '0',
          display: 'block',
          width: 'calc(100% - 100px)',
        }} />

        {/* Seed Icon for Conceptualization */}
        <FaSeedling style={{ fontSize: '50px', color: '#6FC8B2', marginBottom: '-8px', zIndex: '1' }} />

        {/* Pie Charts along the line */}
        <PieChartComponent title="Sourcing" data={sourcingData} colors={naturalColors} offset={20} />
        <PieChartComponent title="Manufacturing & Assembly" data={manufacturingData} colors={naturalColors} offset={-20} />
        <PieChartComponent title="Packaging" data={packagingData} colors={naturalColors} offset={20} />
        <PieChartComponent title="Transport" data={transportData} colors={naturalColors} offset={-20} />
        

        {/* Heart Icon for User Sentiment */}
        <FaHeart style={{ fontSize: '50px', color: '#ff6f61', marginTop: '-8px', zIndex: '1' }} />
      </div>

      {/* Media query to switch to vertical layout on smaller screens */}
      <style>
        {`
          @media (max-width: 1024px) {
            div[style*="justify-content: space-between"] {
              flex-direction: column !important;
              justify-content: center !important;
              align-items: center !important;
            }

            div[style*="top: 50%"] {
              top: 0 !important;
              left: 50% !important;
              right: auto !important;
              height: calc(100% - 60px) !important;
              width: 8px !important;
              transform: translateX(-50%);
            }

            .fa-seedling {
              margin-bottom: -8px !important;
              z-index: 1 !important;
            }

            .fa-heart {
              margin-top: -8px !important;
              z-index: 1 !important;
            }

            div[style*="margin: 20px"] {
              margin-left: 0 !important;
              margin-right: 0 !important;
              transform: translateX(0) !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ProductTimelinePage;
