import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface ScoreGaugeProps {
  score: number;
}

export const ScoreGauge: React.FC<ScoreGaugeProps> = ({ score }) => {
  const data = [
    { name: 'Score', value: score },
    { name: 'Remaining', value: 1000 - score },
  ];
  
  const getColor = (s: number) => {
    if (s < 500) return '#ef4444'; // Red
    if (s < 700) return '#eab308'; // Yellow
    return '#16a34a'; // Green
  };

  const color = getColor(score);

  return (
    <div className="relative h-64 w-full flex flex-col items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="70%"
            startAngle={180}
            endAngle={0}
            innerRadius={80}
            outerRadius={110}
            paddingAngle={0}
            dataKey="value"
            stroke="none"
          >
            <Cell key="score" fill={color} />
            <Cell key="rest" fill="#e2e8f0" />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-[64%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-gray-500 text-sm font-medium">Кредитный рейтинг</p>
        <h3 className="text-3xl font-bold" style={{ color }}>{score}</h3>
        <p className="text-gray-400 text-xs mt-1">из 1000</p>
      </div>
    </div>
  );
};
