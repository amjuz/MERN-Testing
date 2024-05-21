import { describe, expect, it } from 'vitest';
import request from 'supertest'
import { app } from '../src/index';


describe("POST sum", ()=> {
    it("should be able to add two positive numbers", async ()=> {
        const res = await request(app).post('/sum').send({
            a: 2,
            b: 5
        });

        expect(res.body.result).toBe(7);
    })

    it("should return a status code 411 with validation error",async ()=> {
        const res = await request(app).post('/sum').send({});
        expect(res.statusCode).toBe(411);
        expect(res.body.message).toBe("Validation error");
    })
});