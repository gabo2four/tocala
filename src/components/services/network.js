import { Router } from "express";
import * as Controller from "./controller";

const servicesRouter = Router();

servicesRouter.route("/").get(Controller.getInfo);

export default servicesRouter;
