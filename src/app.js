import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
// if only folder is specified, index.js is meant to be imported
import router from "./router";

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());

router(app);

export default app;
