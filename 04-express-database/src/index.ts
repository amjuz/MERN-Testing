
import express from "express"
import { z } from "zod";
import { prisma } from "./db";


export const app = express();

app.use(express.json())

const sumInput = z.object({
    a: z.number(),
    b: z.number()
})

app.post('/sum', async ( req, res )=> {
    const body = req.body

    const { success } = sumInput.safeParse(body);

    if(!success){
        return res.status(411).json({
            message: "Validation error"
        })
    }
    const result = body.a + body.b;

    await prisma.sum.create({
        data: {
            a: body.a,
            b: body.b,
            result: result
        }
    })

    res.json({
        result
    })
})

app.post('/subtract', async ( req, res )=> {
    const body = req.body

    const { success } = sumInput.safeParse(body);

    if(!success){
        return res.status(411).json({
            message: "Validation error"
        })
    }
    const result = body.a - body.b;

    await prisma.subtract.create({
        data: {
            a: body.a,
            b: body.b,
            result: result
        }
    })

    res.json({
        result
    })
})


