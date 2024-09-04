import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { FaSeedling, FaHeart } from 'react-icons/fa';

Chart.register(ArcElement, Tooltip, Legend);

const PieChartComponent = ({ title, data, colors, offset }) => {
  const chartData = {
    labels: ['Energy', 'Labor', 'Ingredients / Materials', 'Water', 'Waste'],
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

  const options = {
    plugins: {
      legend: {
        display: false, // Hide individual legends for each chart
      },
      tooltip: {
        enabled: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: '250px', height: '250px', margin: `20px ${offset}px`, position: 'relative' }}>
      <h3 style={{ textAlign: 'center' }}>{title}</h3>
      <Pie data={chartData} options={options} />
    </div>
  );
};

const ProductTimelinePage = () => {
  // Data for each pie chart
  const sourcingData = [20, 20, 30, 20, 10];
  const manufacturingData = [30, 20, 20, 20, 10];
  const packagingData = [15, 20, 30, 25, 10];
  const transportData = [25, 15, 20, 25, 15];

  // Natural color tones for each category
  const naturalColors = [
    '#A8D5BA', // Energy - Soft green
    '#F0A868', // Labor - Earthy orange
    '#9FD3C7', // Ingredients / Materials - Soft blue
    '#F3EED9', // Water - Light beige
    '#D1A65A', // Waste - Brown
  ];

  return (
    <div style={{ padding: '50px', backgroundColor: '#f0f8f7', fontFamily: "'Your Site Font'" }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Know Your Impact at Every Step</h2>

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
          top: '50%', // Adjust the top position
          left: '50px',
          right: '50px',
          height: '8px',
          backgroundColor: '#888',
          zIndex: '0',
          display: 'block',
          width: 'calc(100% - 100px)',
        }} />

        {/* Seed Icon for Conceptualization */}
        <FaSeedling style={{ fontSize: '50px', color: '#66bb6a', marginBottom: '-8px', zIndex: '1' }} />

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
              height: calc(100% - 60px) !important; /* Adjust the height */
              width: 8px !important;
              transform: translateX(-50%);
            }

            .fa-seedling {
              margin-bottom: -8px !important;
              z-index: 1 !important; /* Ensure the seedling is above the line */
            }

            .fa-heart {
              margin-top: -8px !important;
              z-index: 1 !important; /* Ensure the heart is above the line */
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
