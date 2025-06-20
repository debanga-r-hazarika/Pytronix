ALTER TABLE public.product_reviews
ADD COLUMN status TEXT DEFAULT 'pending';

COMMENT ON COLUMN public.product_reviews.status IS 'The moderation status of the review (pending, approved, rejected)'; 