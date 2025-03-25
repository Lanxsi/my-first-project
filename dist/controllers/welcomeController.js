import { Router } from "express";
const route = Router();
route.get('/', (_req, res) => {
    res.json({
        message: "Hello, World!"
    });
});
export default route;
