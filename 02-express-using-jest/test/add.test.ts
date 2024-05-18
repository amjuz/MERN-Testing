
import { describe, expect, test } from '@jest/globals'
import request from 'supertest'
import { app } from '../src/index'

describe("POST sum",()=>{
    test("should be able to add two positive integers", async ()=> {
        const res = await request(app).post('/sum').send({
            a: 1,
            b: 2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(3);
    })

    test("should be able to add two negative numbers", async ()=> {
        const res = await request(app).post('/sum').send({
            a: -3,
            b: -14
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(-17)
    })
    
})

