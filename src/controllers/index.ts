import { Router } from "express";
import welcomeController from "./welcomeController.js";

const routes: Router[] = [welcomeController];

export default routes;
