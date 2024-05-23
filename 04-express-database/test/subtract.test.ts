import request from "supertest";
import { describe, it, expect, vi } from "vitest";
import { app } from "../src";
import { prisma } from "../src/__mocks__/db";

// shallow mocking 

vi.mock('../src/db')

describe("POST subtract", ()=> {
    it("should be able to add two positive ingtegers", async ()=> {

        prisma.subtract.create.mockResolvedValue({
            id: 1,
            a: 14,
            b: 22,
            result: -8
        })

        vi.spyOn(prisma.subtract,"create")

        const res = await request(app).post("/subtract").send({
            a: 14,
            b: 22
        });

        expect(prisma.subtract.create).toHaveBeenCalledWith({
            data: {
                a: 14,
                b: 22,
                result: -8 
            }
        });

        expect(res.body.id).toBe(1);
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(-8);
    });

    it("should be able to add two negattive ingtegers", async ()=> {

        prisma.sum.create.mockResolvedValue({
            id: 1,
            a: -14,
            b: -52,
            result: 38
        });

        vi.spyOn(prisma.subtract,"create");

        const res = await request(app).post("/subtract").send({
            a: -14,
            b: -52
        });

        expect(prisma.subtract.create).toHaveBeenCalledWith({
            data: {
                a: -14, 
                b: -52,
                result: 38
            }
        });
        expect(res.body.id).toBe(1);
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(38);
    });

    it('should return Validatioin error wiith a status code of 411', async()=> {
        const res = await request(app).post('/subtract').send({});
        expect(res.statusCode).toBe(411);
        expect(res.body.message).toBe('Validation error')
    });
});