import express from "express";
import Controller from "./controller";
import { upload } from "./multes.config";

const routes = express.Router();

routes.get("/", Controller.index);
routes.post("/payment-ticket", upload.single("nfe"), Controller.create);

export default routes;
