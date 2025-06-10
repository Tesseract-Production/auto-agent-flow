-- Quick fix for RLS policy errors
-- Run this in your Supabase SQL Editor

-- First, disable RLS temporarily to clean up
ALTER TABLE email_subscribers DISABLE ROW LEVEL SECURITY;

-- Drop all existing policies
DROP POLICY IF EXISTS "Allow public inserts on email_subscribers" ON email_subscribers;
DROP POLICY IF EXISTS "Allow authenticated read on email_subscribers" ON email_subscribers;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON email_subscribers;
DROP POLICY IF EXISTS "Enable read for authenticated users" ON email_subscribers;
DROP POLICY IF EXISTS "public_email_insert" ON email_subscribers;
DROP POLICY IF EXISTS "public_email_select" ON email_subscribers;

-- Re-enable RLS
ALTER TABLE email_subscribers ENABLE ROW LEVEL SECURITY;

-- Create simple, working policies
CREATE POLICY "public_email_insert" 
  ON email_subscribers 
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "public_email_select" 
  ON email_subscribers 
  FOR SELECT 
  USING (true);

-- Grant necessary permissions
GRANT INSERT ON email_subscribers TO anon;
GRANT SELECT ON email_subscribers TO anon;
GRANT INSERT ON email_subscribers TO authenticated;
GRANT SELECT ON email_subscribers TO authenticated;

