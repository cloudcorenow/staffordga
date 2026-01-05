-- Contact Submissions Table for D1 Database
-- This table stores contact form submissions with geographic validation
-- Only submissions from US IP addresses will be accepted

CREATE TABLE IF NOT EXISTS contact_submissions (
  id TEXT PRIMARY KEY DEFAULT (lower(hex(randomblob(16)))),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT NOT NULL,
  ip_address TEXT NOT NULL,
  country_code TEXT NOT NULL,
  created_at TEXT DEFAULT (datetime('now'))
);

-- Create an index on created_at for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at
ON contact_submissions(created_at);

-- Create an index on country_code for analytics
CREATE INDEX IF NOT EXISTS idx_contact_submissions_country
ON contact_submissions(country_code);

-- Rate Limiting Table
-- Tracks submission attempts per IP address to prevent spam
CREATE TABLE IF NOT EXISTS rate_limits (
  ip_address TEXT PRIMARY KEY,
  submission_count INTEGER DEFAULT 1,
  first_attempt TEXT DEFAULT (datetime('now')),
  last_attempt TEXT DEFAULT (datetime('now'))
);

-- Create an index on last_attempt for cleanup queries
CREATE INDEX IF NOT EXISTS idx_rate_limits_last_attempt
ON rate_limits(last_attempt);
