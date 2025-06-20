import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Box, RefreshCw, XOctagon, BookOpen, Star } from 'lucide-react';

interface AlertPanelProps {
  alerts: {
    newOrders: number;
    replacementRequests: number;
    cancellationRequests: number;
    workshopRequests: number;
    unmoderatedReviews: number;
  };
}

const AlertPanel: React.FC<AlertPanelProps> = ({ alerts }) => {
  const alertItems = [
    {
      count: alerts.newOrders,
      label: 'New Unreviewed Orders',
      link: '/admin/orders?filter=new',
      icon: <Box className="w-5 h-5" />,
      color: 'text-red-500',
    },
    {
      count: alerts.replacementRequests,
      label: 'Pending Replacement Requests',
      link: '/admin/cancellations?type=exchange',
      icon: <RefreshCw className="w-5 h-5" />,
      color: 'text-yellow-500',
    },
    {
      count: alerts.cancellationRequests,
      label: 'Pending Cancellation Requests',
      link: '/admin/cancellations?type=cancel',
      icon: <XOctagon className="w-5 h-5" />,
      color: 'text-yellow-500',
    },
    {
      count: alerts.workshopRequests,
      label: 'New Workshop Bookings',
      link: '/admin/workshop-requests',
      icon: <BookOpen className="w-5 h-5" />,
      color: 'text-blue-500',
    },
    {
      count: alerts.unmoderatedReviews,
      label: 'Unmoderated Reviews',
      link: '/admin/reviews',
      icon: <Star className="w-5 h-5" />,
      color: 'text-purple-500',
    },
  ];

  return (
    <div className="bg-white dark:bg-light-navy rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Alert Center</h3>
      <div className="space-y-4">
        {alertItems.map((alert, index) =>
          alert.count > 0 ? (
            <Link key={index} to={alert.link}>
              <div className="bg-gray-50 dark:bg-dark-navy p-4 rounded-lg flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                <div className="flex items-center">
                  <span className={`mr-3 ${alert.color}`}>{alert.icon}</span>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{alert.label}</p>
                </div>
                <span className={`font-bold text-lg ${alert.color}`}>{alert.count}</span>
              </div>
            </Link>
          ) : null
        )}
        {alertItems.every(a => a.count === 0) && (
          <p className="text-sm text-gray-500 dark:text-gray-400">No active alerts. All systems normal.</p>
        )}
      </div>
    </div>
  );
};

export default AlertPanel; 