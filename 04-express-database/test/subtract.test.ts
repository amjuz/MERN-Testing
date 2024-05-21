import request from "supertest";
import { describe, it, expect, vi } from "vitest";
import { app } from "../src";
import { prisma } from "../src/db";

// shallow mocking 

vi.mock('../src/db', ()=> {
    return {
        prisma: {
            subtract : {
                create: vi.fn()
            }
        }
    }
})

describe("POST sum", ()=> {
    it("should be able to add two positive ingtegers", async ()=> {
        const res = await request(app).post("/subtract").send({
            a: 14,
            b: 22
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(-8);
    });

    it("should be able to add two negattive ingtegers", async ()=> {
        const res = await request(app).post("/subtract").send({
            a: -14,
            b: -52
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(38);
    });

    it('should return Validatioin error wiith a status code of 411', async()=> {
        const res = await request(app).post('/subtract').send({});
        expect(res.statusCode).toBe(411);
        expect(res.body.message).toBe('Validation error')
    });
})