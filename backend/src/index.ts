import express from "express";
import cors from "cors";
import logger from "./utils/logger.js";
import { AuthService } from "./auth/AuthService.js";
import pinoHttp from "pino-http";
import { router as authRouter } from "./auth/authController.js";
import { moodleRouter } from "./moodle/moodleController.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./utils/swagger.js";

const app = express();

// Basic request logging for platform logs
app.use((req, res, next) => {
  logger.info({ method: req.method, url: req.url }, "incoming request");
  next();
});

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
    optionsSuccessStatus: 200,
    preflightContinue: false
  })
);

// Handle preflight for all routes (Express 5 wildcard syntax)
app.options("/{*path}", cors());

// pino-http middleware (cast for TypeScript compatibility)
const pinoMiddleware = pinoHttp as unknown as (opts: any) => any;
app.use(
  pinoMiddleware({
    logger
  })
);

app.use(express.json({ limit: "50mb" }));
logger.info("Server starting");
const authService = new AuthService();

// Healthcheck for load balancers and quick debugging
app.get("/health", (_req, res) => res.status(200).json({ status: "ok" }));

app.use("/login", authRouter);
app.use("/moodle", moodleRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const port = process.env.PORT || 3000;
const host = process.env.HOST || "0.0.0.0";
app.listen(Number(port), host, () => {
  logger.info(`Server started on ${host}:${port}`);
  logger.info(`Swagger documentation available at http://${host}:${port}/api-docs`);
});
