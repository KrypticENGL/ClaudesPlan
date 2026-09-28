import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(4000),
  SUPABASE_URL: z.url(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
  FRONTEND_ORIGIN: z.url().default("http://localhost:3000"),
});

export const env = envSchema.parse(process.env);
