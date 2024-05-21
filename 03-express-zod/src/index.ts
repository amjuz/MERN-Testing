
import express from "express"
import { z } from "zod";


export const app = express();

app.use(express.json())

const sumInput = z.object({
    a: z.number(),
    b: z.number()
})

app.post('/sum', ( req, res )=> {
    const body = req.body

    const { success } = sumInput.safeParse(body);

    if(!success){
        return res.status(411).json({
            message: "Validation error"
        })
    }
    const result = body.a + body.b;

    res.json({
        result
    })
})

app.post('/subtract', ( req, res )=> {
    const body = req.body

    const { success } = sumInput.safeParse(body);

    if(!success){
        return res.status(411).json({
            message: "Validation error"
        })
    }
    const result = body.a - body.b;

    res.json({
        result
    })
})


