
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const SimplePieChart = () => {

  // DATA FOR PIE CHART
  const data = [
    { name: 'Malware Infection', value: 7 },
    { name: 'Suspicions Login attempt', value: 3 },
    { name: 'Data Breach', value: 13 },
  ];

  const COLORS = ['#FFA500', '#FFFF00', '#DA2121'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

 

  return (
    <>
        <div >
            <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                    <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    </>
  );
};

export default SimplePieChart;
