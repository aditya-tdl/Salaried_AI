import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import morgan from "morgan";

const app = express();

const allowedOrigins = [
  "http://localhost:3001",
  "https://jncvd963-3001.inc1.devtunnels.ms",
  "https://3rx6504d-5173.inc1.devtunnels.ms",
  "http://localhost:5173",
  "http://localhost:3000",
  "http://localhost:5174",
  "https://jncvd963-4000.inc1.devtunnels.ms",
];
// CORS configuration for cross-origin requests and credentials
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (e.g., mobile apps or Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(morgan("dev"));

app.use(cors(corsOptions));

app.use(cookieParser());
app.use(express.json());

app.use("/api", routes);

app.use(errorMiddleware);

export default app;
