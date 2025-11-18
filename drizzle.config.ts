import { defineConfig } from 'drizzle-kit';
import 'dotenv/config';

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

// how to Connect Drizzle ORM to the database AI!
/**
 * import { drizzle } from 'drizzle-orm/d1';
		export interface Env {
		<BINDING_NAME>: D1Database;
		}
		export default {
		async fetch(request: Request, env: Env) {
			const db = drizzle(env.<BINDING_NAME>);
		},
	}; AI
 */
export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'sqlite',
  driver: 'd1-http',
  dbCredentials: {
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID!,
    databaseId: process.env.CLOUDFLARE_DATABASE_ID!,
    token: process.env.CLOUDFLARE_D1_TOKEN!,
  },
});
