CREATE OR REPLACE FUNCTION get_order_status_counts(start_date timestamptz, end_date timestamptz)
RETURNS TABLE(status text, count bigint) AS $$
BEGIN
  RETURN QUERY
    SELECT o.status, COUNT(o.id)
    FROM orders AS o
    WHERE o.created_at >= start_date AND o.created_at <= end_date
    GROUP BY o.status;
END;
$$ LANGUAGE plpgsql; 