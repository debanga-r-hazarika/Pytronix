import { supabase } from '../lib/supabaseClient';

// Key Metrics
export const getDashboardMetrics = async () => {
  const { data: products, error: productsError } = await supabase.from('products').select('id', { count: 'exact' });
  const { data: orders, error: ordersError } = await supabase.from('orders').select('id', { count: 'exact' });
  const { data: users, error: usersError } = await supabase.from('profiles').select('id', { count: 'exact' });
  const { data: revenue, error: revenueError } = await supabase.from('orders').select('total').eq('status', 'delivered');

  if (productsError || ordersError || usersError || revenueError) {
    console.error('Error fetching dashboard metrics:', productsError || ordersError || usersError || revenueError);
    throw new Error('Could not fetch dashboard metrics');
  }

  const totalRevenue = revenue.reduce((sum, order) => sum + order.total, 0);

  return {
    totalProducts: products.length,
    totalOrders: orders.length,
    totalUsers: users.length,
    totalRevenue,
  };
};

// Order Status Analytics
export const getOrderStatusAnalytics = async (year: number, month: number) => {
  const startDate = new Date(year, month - 1, 1);
  // Set to the end of the day on the last day of the month
  const endDate = new Date(year, month, 1); 
  endDate.setMilliseconds(endDate.getMilliseconds() - 1);

  const { data, error } = await supabase.rpc('get_order_status_counts', {
    start_date: startDate.toISOString(),
    end_date: endDate.toISOString(),
  });

  if (error) {
    console.error('Error fetching order status analytics:', error);
    throw new Error('Could not fetch order status analytics');
  }
  return data;
};

// Alert Center
export const getAlertCounts = async () => {
    const { count: newOrders, error: newOrdersError } = await supabase
      .from('orders')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'processing')
      .eq('is_viewed_by_admin', false);

    const { count: replacementRequests, error: replacementRequestsError } = await supabase
      .from('order_cancellation_requests')
      .select('*', { count: 'exact', head: true })
      .eq('type', 'exchange')
      .eq('status', 'pending');

    const { count: cancellationRequests, error: cancellationRequestsError } = await supabase
      .from('order_cancellation_requests')
      .select('*', { count: 'exact', head: true })
      .eq('type', 'cancel')
      .eq('status', 'pending');

    const { count: workshopRequests, error: workshopRequestsError } = await supabase
      .from('workshop_requests')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'pending');

    const { count: unmoderatedReviews, error: unmoderatedReviewsError } = await supabase
      .from('product_reviews')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'pending');
      
  if (newOrdersError || replacementRequestsError || cancellationRequestsError || workshopRequestsError || unmoderatedReviewsError) {
    console.error('Error fetching alert counts:', newOrdersError || replacementRequestsError || cancellationRequestsError || workshopRequestsError || unmoderatedReviewsError);
    throw new Error('Could not fetch alert counts');
  }

  return {
    newOrders: newOrders ?? 0,
    replacementRequests: replacementRequests ?? 0,
    cancellationRequests: cancellationRequests ?? 0,
    workshopRequests: workshopRequests ?? 0,
    unmoderatedReviews: unmoderatedReviews ?? 0,
  };
};

export const markOrderAsViewed = async (orderId: string) => {
    const { error } = await supabase
      .from('orders')
      .update({ is_viewed_by_admin: true })
      .eq('id', orderId);
  
    if (error) {
      console.error(`Error marking order ${orderId} as viewed:`, error);
      throw new Error('Could not mark order as viewed');
    }
  }; 