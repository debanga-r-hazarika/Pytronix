import React, { useState, useEffect, useCallback } from 'react';
import { DollarSign, Package, RefreshCw, Users } from 'lucide-react';
import StatCard from '../../components/admin/StatCard';
import OrderStatusChart from '../../components/admin/OrderStatusChart';
import AlertPanel from '../../components/admin/AlertPanel';
import QuickActions from '../../components/admin/QuickActions';
import { getDashboardMetrics, getOrderStatusAnalytics, getAlertCounts } from '../../services/adminService';
import { sub, format } from 'date-fns';
import { supabase } from '../../lib/supabaseClient';

const AdminDashboard: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [metrics, setMetrics] = useState({ totalProducts: 0, totalOrders: 0, totalUsers: 0, totalRevenue: 0 });
    const [alerts, setAlerts] = useState({ newOrders: 0, replacementRequests: 0, cancellationRequests: 0, workshopRequests: 0, unmoderatedReviews: 0 });
    const [chartData, setChartData] = useState([]);
    const [selectedDate, setSelectedDate] = useState({ month: new Date().getMonth() + 1, year: new Date().getFullYear() });

    const fetchData = useCallback(async () => {
        try {
            setLoading(true);
            const [metricsData, alertsData, analyticsData] = await Promise.all([
                getDashboardMetrics(),
                getAlertCounts(),
                getOrderStatusAnalytics(selectedDate.year, selectedDate.month)
            ]);
            setMetrics(metricsData);
            setAlerts(alertsData);
            setChartData(analyticsData);
        } catch (error) {
            console.error("Failed to fetch dashboard data:", error);
        } finally {
            setLoading(false);
        }
    }, [selectedDate]);

    useEffect(() => {
        fetchData();
        
        const channel = supabase.channel('realtime-alerts');
        channel
            .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, () => {
                getAlertCounts().then(setAlerts);
            })
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };

    }, [fetchData]);

    if (loading) {
        return <div>Loading...</div>;
    }

  return (
    <div className="p-4 sm:p-6 md:p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Admin Dashboard</h1>
        <button onClick={() => fetchData()} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-light-navy transition">
            <RefreshCw className="w-5 h-5 text-gray-700 dark:text-soft-gray" />
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Revenue" value={`₹${metrics.totalRevenue.toLocaleString()}`} icon={<DollarSign />} colorClass="bg-green-100 text-green-600" />
        <StatCard title="Total Orders" value={metrics.totalOrders} icon={<Package />} colorClass="bg-blue-100 text-blue-600" />
        <StatCard title="Total Products" value={metrics.totalProducts} icon={<Package />} colorClass="bg-purple-100 text-purple-600" />
        <StatCard title="Total Users" value={metrics.totalUsers} icon={<Users />} colorClass="bg-yellow-100 text-yellow-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 bg-white dark:bg-light-navy p-6 rounded-xl shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Order Status Analytics</h3>
            <div className="flex items-center space-x-2">
              <select 
                value={selectedDate.month} 
                onChange={(e) => setSelectedDate(d => ({ ...d, month: +e.target.value }))}
                className="bg-gray-50 dark:bg-dark-navy border border-gray-300 dark:border-gray-600 rounded-md p-1"
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map(m => <option key={m} value={m}>{format(new Date(2000, m - 1), 'MMMM')}</option>)}
              </select>
              <select 
                value={selectedDate.year} 
                onChange={(e) => setSelectedDate(d => ({ ...d, year: +e.target.value }))}
                className="bg-gray-50 dark:bg-dark-navy border border-gray-300 dark:border-gray-600 rounded-md p-1"
              >
                {[...Array(5)].map((_, i) => new Date().getFullYear() - i).map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
          </div>
          <OrderStatusChart data={chartData} />
        </div>
        <div className="lg:col-span-1">
          <AlertPanel alerts={alerts} />
        </div>
      </div>
      
      <QuickActions />

    </div>
  );
};

export default AdminDashboard;