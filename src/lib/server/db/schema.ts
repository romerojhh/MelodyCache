import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const users = sqliteTable('users', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	username: text('username').unique(),
	passwordHash: text('password_hash')
});

export const music_links = sqliteTable('music_links', {                                                     
    id: integer('id').primaryKey({ autoIncrement: true }),                                                  
    userId: text('user_id')                                                                                
        .notNull()                                                                                          
        .references(() => users.id),                                                                         
    originalUrl: text('original_url').notNull(),                                                           
    platform: text('platform').notNull(),                                                                   
    title: text('title'),                                                                                   
    artist: text('artist'),                                                                                 
    genre: text('genre'),                                                                                   
    thumbnailUrl: text('thumbnail_url'),                                                                   
    createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.default(sql`(unixepoch())`),                                                    
});

export const sessions = sqliteTable('session', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	userId: text('user_id')
		.notNull()
		.references(() => users.id),
	expiresAt: integer('expires_at', { mode: 'timestamp' })
		.notNull()
});

export type Sessions = typeof sessions.$inferSelect;

export type Users = typeof users.$inferSelect;

export type MusicLinks = typeof music_links.$inferSelect
