import { Router } from "express";
import { Request, Response } from "express";

const route = Router();

route.get('/', (_req: Request, res: Response): void => {
    res.json({
        message: "Hello, World!"
    })
})

export default route;