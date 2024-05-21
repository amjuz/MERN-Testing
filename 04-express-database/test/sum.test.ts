import request from "supertest";
import { describe, it, expect, vi } from "vitest";
import { app } from "../src";
import { prisma } from "../src/db";

// shallow mocking

vi.mock('../src/db', ()=> {
    return {
        prisma: {
            sum: {
                create: vi.fn()
            }
        }
    }
})

describe("POST sum", ()=> {
    it("should be able to add two positive numbers", async ()=> {
        const res = await request(app).post("/sum").send({
            a: 14,
            b: 22
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(36);
    });

    it("should be able to add two negative numbers", async ()=> {

        const res = await request(app).post('/sum').send({
            a: -10,
            b: -12
        });
        expect(res.statusCode).toBe(200)
        expect(res.body.result).toBe(-22)
    });

    it("should return Validation error with status code 411",async ()=> {
        const res = await request(app).post('/sum').send({});
        expect(res.statusCode).toBe(411);
        expect(res.body.message).toBe("Validation error")
    });

})