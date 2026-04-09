import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' }); // Ye line specifically .env.local ko read karti hai

/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL, // Yahan se .local hata diya hai
    }
};