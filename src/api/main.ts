import { Router } from "express";
import v1ApiRouter from "./v1/main";

const apiRouter = Router();

apiRouter.use("/api/v1", v1ApiRouter);

export default apiRouter;
