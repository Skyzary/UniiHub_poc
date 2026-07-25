import express from "express";
import cors from "cors";
import logger from "./utils/logger.ts";
import { AuthService } from "./auth/AuthService.ts";
import pinoHttp from "pino-http";
import { router as authRouter } from "./auth/authController.ts";
import { moodleRouter } from "./moodle/moodleController.ts";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./utils/swagger.ts";

const app = express();

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

app.use(
  pinoHttp({
    logger
  })
);
app.use(express.json({ limit: "50mb" }));
logger.info("Server started");
const authService = new AuthService();

app.use("/login", authRouter);
app.use("/moodle", moodleRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => {
  logger.info("Server started on port 3000");
  logger.info(
    "Swagger documentation available at http://localhost:3000/api-docs"
  );
});
