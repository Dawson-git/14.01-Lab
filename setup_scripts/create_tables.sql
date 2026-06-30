CREATE DATABASE IF NOT EXISTS downtown_donuts;

-- Switch to using it
USE downtown_donuts;

-- Create the comments table
CREATE TABLE IF NOT EXISTS comments (
  id         INT AUTO_INCREMENT PRIMARY KEY,  -- Unique ID for each comment
  name       VARCHAR(60)  NOT NULL,            -- Commenter's name (max 60 chars)
  comment    VARCHAR(500) NOT NULL,            -- The comment text (max 500 chars)
  created_at DATETIME     NOT NULL             -- When it was posted (set server-side)
);

-- A few sample comments to start with
INSERT INTO comments (name, comment, created_at) VALUES
  ('Maria L.',  'Best glazed donuts in the city. I drive 20 minutes just for these!', NOW()),
  ('Tom K.',    'The maple bacon donut is absolutely incredible. Worth every penny.', NOW()),
  ('Priya S.',  'Friendly staff and great coffee. Our team orders from here every Friday.', NOW());
