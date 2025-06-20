import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface OrderStatusChartProps {
  data: { status: string; count: number }[];
}

const OrderStatusChart: React.FC<OrderStatusChartProps> = ({ data }) => {
  const chartData = [
    { name: 'Pending', count: data.find(d => d.status === 'pending')?.count || 0 },
    { name: 'Processing', count: data.find(d => d.status === 'processing')?.count || 0 },
    { name: 'Shipped', count: data.find(d => d.status === 'shipped')?.count || 0 },
    { name: 'Delivered', count: data.find(d => d.status === 'delivered')?.count || 0 },
    { name: 'Cancelled', count: data.find(d => d.status === 'cancelled')?.count || 0 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(128, 128, 128, 0.3)" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(30, 41, 59, 0.9)',
            borderColor: '#4f46e5',
            color: '#ffffff',
          }}
        />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" name="Order Count" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default OrderStatusChart; 