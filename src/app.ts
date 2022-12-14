import express, { Express } from "express";
import apiRouter from "./api/main";

const app: Express = express();

app.use(express.json());
app.use(apiRouter);

export default app;
