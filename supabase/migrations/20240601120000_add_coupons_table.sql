-- Create coupons table
CREATE TABLE IF NOT EXISTS coupons (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  code text UNIQUE NOT NULL,
  type text NOT NULL, -- e.g., 'free_shipping', 'discount'
  value numeric,      -- for discount coupons
  expires_at timestamptz,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Add coupon_code to orders table (nullable)
ALTER TABLE orders ADD COLUMN IF NOT EXISTS coupon_code text; 