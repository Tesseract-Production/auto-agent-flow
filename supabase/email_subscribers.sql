-- Create email_subscribers table
CREATE TABLE IF NOT EXISTS email_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  first_name VARCHAR(100),
  source VARCHAR(100) NOT NULL,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_email_subscribers_email ON email_subscribers(email);

-- Create index on source for analytics
CREATE INDEX IF NOT EXISTS idx_email_subscribers_source ON email_subscribers(source);

-- Create index on created_at for time-based queries
CREATE INDEX IF NOT EXISTS idx_email_subscribers_created_at ON email_subscribers(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if needed
DROP POLICY IF EXISTS "Allow public inserts on email_subscribers" ON email_subscribers;
DROP POLICY IF EXISTS "Allow authenticated read on email_subscribers" ON email_subscribers;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON email_subscribers;
DROP POLICY IF EXISTS "Enable read for authenticated users" ON email_subscribers;

-- Create policy to allow inserts for anonymous users
CREATE POLICY "Enable insert for anonymous users" ON email_subscribers
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy to allow reading for authenticated users
CREATE POLICY "Enable read for authenticated users" ON email_subscribers
  FOR SELECT
  USING (true);

-- Optional: Create a function to get subscriber count
CREATE OR REPLACE FUNCTION get_subscriber_count()
RETURNS INTEGER AS $$
BEGIN
  RETURN (SELECT COUNT(*) FROM email_subscribers);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Optional: Create a function to get recent subscribers
CREATE OR REPLACE FUNCTION get_recent_subscribers(limit_count INTEGER DEFAULT 10)
RETURNS TABLE(
  id UUID,
  email VARCHAR,
  source VARCHAR,
  created_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    s.id,
    s.email,
    s.source,
    s.created_at
  FROM email_subscribers s
  ORDER BY s.created_at DESC
  LIMIT limit_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
-- Function to get recent subscribers for social proof (with first names)
CREATE OR REPLACE FUNCTION get_recent_subscribers_for_social_proof(limit_count INTEGER DEFAULT 5)
RETURNS TABLE(
  id UUID,
  first_name VARCHAR,
  source VARCHAR,
  created_at TIMESTAMP WITH TIME ZONE
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    s.id,
    s.first_name,
    s.source,
    s.created_at
  FROM email_subscribers s
  WHERE s.first_name IS NOT NULL AND s.first_name != ''
  ORDER BY s.created_at DESC
  LIMIT limit_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
