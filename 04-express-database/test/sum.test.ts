import request from "supertest";
import { describe, it, expect, vi } from "vitest";
import { app } from "../src";
import { prisma } from "../src/__mocks__/db";

// shallow mocking in same folder

// vi.mock('../src/db', ()=> {
//     return {
//         prisma: {
//             sum: {
//                 create: vi.fn()
//             }
//         }
//     }
// })

// shallow mocking - created __mocks__/db.ts inside src 
// for better readability

vi.mock('../src/db');

describe("POST sum", ()=> {

    it("should be able to add two positive numbers", async ()=> {

        prisma.sum.create.mockResolvedValue({
            id: 1,
            a: 14,
            b: 22,
            result:36
        })

        vi.spyOn(prisma.sum,"create");

        const res = await request(app).post("/sum").send({
            a: 14,
            b: 22
        });
        
        expect(prisma.sum.create).toHaveBeenCalledWith({
            data: {
                a: 14,
                b: 22,
                result:36
            }
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(36);
        expect(res.body.id).toBe(1);
    });

    it("should be able to add two negative numbers", async ()=> {

        prisma.sum.create.mockResolvedValue({
            id: 1,
            a: -10,
            b: -12,
            result: -22
        });

        vi.spyOn(prisma.sum,"create");

        const res = await request(app).post('/sum').send({
            a: -10,
            b: -12
        });

        expect(prisma.sum.create).toHaveBeenCalledWith({
            data: {
                a: -10,
                b: -12,
                result: -22
            }
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(-22);
        expect(res.body.id).toBe(1);
    });

    it("should return Validation error with status code 411",async ()=> {
        const res = await request(app).post('/sum').send({});
        expect(res.statusCode).toBe(411);
        expect(res.body.message).toBe("Validation error");
    });

});