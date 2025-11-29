PRAGMA defer_foreign_keys=TRUE;
CREATE TABLE users (   id INTEGER PRIMARY KEY,   username TEXT UNIQUE,   password_hash TEXT );
INSERT INTO "users" VALUES(1,'testuser','hashed_password');
CREATE TABLE music_links (   id INTEGER PRIMARY KEY,   user_id INTEGER REFERENCES users(id),   original_url TEXT NOT NULL,   platform TEXT NOT NULL,   title TEXT,   artist TEXT,   genre TEXT,   thumbnail_url TEXT,   created_at INTEGER NOT NULL DEFAULT (UNIXEPOCH()) );
INSERT INTO "music_links" VALUES(1,1,'https://music.youtube.com/watch?v=1fpkdSfPzio&list=PLkuT_sWG2Q9tbogLBLh8TCJS3UIv1LVGe','Youtube Music','Ghost Town (feat. PARTYNEXTDOOR)','Kanye West','Rock','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT79snQSmKQEsZSYtUJTq8VDogt-Wy7M6CMRg&s',1764417452);
CREATE TABLE user_sessions (   id INTEGER PRIMARY KEY,   user_id INTEGER NOT NULL REFERENCES users(id),   expires_at INTEGER NOT NULL );
