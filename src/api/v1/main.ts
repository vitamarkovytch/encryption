import { Router } from "express";
import encryptionHandler from "./handlers/encryption";
import monkeysHandler from "./handlers/monkeys";

const apiRouter = Router();

apiRouter.use("/monkeys", monkeysHandler);
apiRouter.use(encryptionHandler);

export default apiRouter;
