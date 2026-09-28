import express from "express";
import cors from "cors";
import { env } from "./lib/env.js";
import { healthRouter } from "./routes/health.js";

const app = express();

app.use(cors({ origin: env.FRONTEND_ORIGIN }));
app.use(express.json());

app.use("/health", healthRouter);

app.listen(env.PORT, () => {
  console.log(`Backend listening on port ${env.PORT}`);
});
