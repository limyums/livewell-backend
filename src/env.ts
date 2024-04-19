import { config } from "dotenv";
import path from "path";

export const ENV = process.env.NODE_ENV || "development";
export const PATH = path.join(__dirname, `../.env.development`);

config({ path: PATH });

export const PORT = process.env.PORT || 4000;
export const DB_URL = process.env.DB_URL || "";
