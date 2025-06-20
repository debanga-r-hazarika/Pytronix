import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, FileText, ShoppingBag, XCircle, BookOpen, Star, RefreshCw } from 'lucide-react';

const QuickActions: React.FC = () => {
    const actions = [
        { label: 'Process New Orders', link: '/admin/orders?filter=new', icon: <ShoppingBag size={24}/> },
        { label: 'Review Replacements', link: '/admin/cancellations?type=exchange', icon: <RefreshCw size={24}/> },
        { label: 'Handle Cancellations', link: '/admin/cancellations?type=cancel', icon: <XCircle size={24}/> },
        { label: 'Manage Workshops', link: '/admin/workshop-requests', icon: <BookOpen size={24}/> },
        { label: 'Moderate Reviews', link: '/admin/reviews', icon: <Star size={24}/> },
        { label: 'Add New Product', link: '/admin/products/new', icon: <PlusCircle size={24}/> },
        { label: 'Generate Sales Report', link: '/admin/reports', icon: <FileText size={24}/> },
      ];
      

  return (
    <div className="bg-white dark:bg-light-navy rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {actions.map((action, index) => (
          <Link key={index} to={action.link} className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-dark-navy rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-center aspect-square">
            <div className="mb-2 text-neon-blue">{action.icon}</div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions; 