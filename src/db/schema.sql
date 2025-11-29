DROP TABLE IF EXISTS users, music_links, user_sessions;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  username TEXT UNIQUE,
  password_hash TEXT
);

CREATE TABLE music_links (
  id INTEGER PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  original_url TEXT NOT NULL,
  platform TEXT NOT NULL,
  title TEXT,
  artist TEXT,
  genre TEXT,
  thumbnail_url TEXT,
  created_at INTEGER NOT NULL DEFAULT (UNIXEPOCH())
);

CREATE TABLE user_sessions (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  expires_at INTEGER NOT NULL
);
