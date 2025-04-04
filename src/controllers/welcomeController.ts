import { Router } from "express";

const route = Router();

// TODO в тебе мають бути прописані типи для параметрів, в лібі express є типи Request та Response і знову таки має бути чіткий тип що повертає твоя функція

route.get('/', (_req, res) => {
    res.json({
        message: "Hello, World!"
    })
})

export default route;