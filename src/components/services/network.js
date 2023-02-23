import { Router } from "express";
import * as Controller from "./controller";

const servicesRouter = Router();

servicesRouter.route("/").get(Controller.getArtists);

export default servicesRouter;
