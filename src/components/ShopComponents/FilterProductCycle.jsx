import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { FaSeedling, FaHeart } from 'react-icons/fa';

Chart.register(ArcElement, Tooltip, Legend);

const PieChartComponent = ({ title, data, colors, offset }) => {
  const chartData = {
    labels: ['Energy', 'Labor', 'Ingredients / Materials', 'Water', 'Waste', 'Ownership & Identity', 'Corporate Social Responsibility (CSR)'],
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
    OwnershipAndIdentity: ['Women-Owned', 'Black-Owned', 'Worker-Owned Cooperative'],
    CorporateSocialResponsibility: ['charitable donations', 'give back programs', 'political donations'],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            const label = context.label || '';
            const certifications = certificationsInfo[label] || [];
            const certificationList = certifications.join(', ') || 'No certifications';
            return `Certifications: ${certificationList}`;
          },
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

const ProductCycleFilter = () => {
  const initialColors = [
    '#D3D3D3', // Grayscale for Energy
    '#A9A9A9', // Grayscale for Labor
    '#808080', // Grayscale for Ingredients / Materials
    '#BEBEBE', // Grayscale for Water
    '#696969', // Grayscale for Waste
    '#A9A9A9', // Grayscale for Ownership & Identity
    '#DCDCDC', // Grayscale for CSR
  ];

  const [colors, setColors] = useState(initialColors);

  // Function to update the colors based on performance (Full Green, Yellow, Red)
  const updateColorsBasedOnSelection = (selectedCertifications) => {
    // Logic to map selected certifications to color
    const newColors = colors.map((color, index) => {
      // Assuming selectedCertifications contains a score or flag for each category (e.g., [good, moderate, poor])
      const performance = selectedCertifications[index];
      if (performance === 'good') return '#66bb6a'; // Green
      if (performance === 'moderate') return '#FFDD57'; // Yellow
      if (performance === 'poor') return '#FF6F61'; // Red
      return color; // Default to original if no performance data
    });

    setColors(newColors);
  };

  // Example user action, replace this with actual filter logic
  const handleUserFilterSelection = () => {
    const examplePerformance = ['good', 'moderate', 'good', 'poor', 'moderate', 'good', 'poor'];
    updateColorsBasedOnSelection(examplePerformance);
  };

  return (
    <div style={{ padding: '50px', backgroundColor: '#f0f8f7', fontFamily: "'Your Site Font'" }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', fontWeight: 600 }}>
        Filter Products to See How They Perform! ( THIS FEATURE IS IN PROGRESS )
      </h1>

      {/* Filter button to simulate selection */}
      {/* <button onClick={handleUserFilterSelection}>Select Filters</button> */}

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px', flexWrap: 'wrap' }}>
        {/* Legend */}
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px', marginBottom: '10px' }}>
          <div style={{ width: '15px', height: '15px', marginRight: '8px', backgroundColor: '#66bb6a' }}></div>
          <span>Good Performance</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px', marginBottom: '10px' }}>
          <div style={{ width: '15px', height: '15px', marginRight: '8px', backgroundColor: '#FFDD57' }}></div>
          <span>Moderate Performance</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px', marginBottom: '10px' }}>
          <div style={{ width: '15px', height: '15px', marginRight: '8px', backgroundColor: '#FF6F61' }}></div>
          <span>Poor Performance</span>
        </div>
      </div>

      {/* Pie charts */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', flexDirection: 'row', flexWrap: 'wrap' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50px', right: '50px', height: '8px', backgroundColor: '#888', zIndex: '0', width: 'calc(100% - 100px)' }} />
        <FaSeedling style={{ fontSize: '50px', color: '#66bb6a', marginBottom: '-8px', zIndex: '1' }} />
        <PieChartComponent title="Sourcing" data={[15, 15, 15, 15, 15, 15, 10]} colors={colors} offset={20} />
        <PieChartComponent title="Manufacturing & Assembly" data={[15, 15, 15, 15, 15, 15, 10]} colors={colors} offset={-20} />
        <PieChartComponent title="Packaging" data={[15, 15, 15, 15, 15, 15, 10]} colors={colors} offset={20} />
        <PieChartComponent title="Transport" data={[15, 15, 15, 15, 15, 15, 10]} colors={colors} offset={-20} />
        <FaHeart style={{ fontSize: '50px', color: '#ff6f61', marginTop: '-8px', zIndex: '1' }} />
      </div>
    </div>
  );
};

export default ProductCycleFilter;
