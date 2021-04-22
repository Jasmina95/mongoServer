import express from "express";
import bodyParser from "body-parser";
import helmet from "helmet";
// if only folder is specified, index.js is meant to be imported
import router from "./router";

const app = express();
app.use(bodyParser.json());
app.use(helmet());

router(app);

export default app;