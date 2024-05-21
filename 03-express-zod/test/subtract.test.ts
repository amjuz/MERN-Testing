
import { describe, expect, it } from "vitest";
import request from "supertest";
import { app } from "../src";

describe("POST subtract", ()=> {
    it("should be able to subtract two positive numbers", async()=>{
        const res = await request(app).post('/subtract').send({
            a: 12,
            b: 5
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(7);
    });

    it("should return ststaus code 411 with validattion error", async()=> {
        const res = await request(app).post('/subtract').send({});
        expect(res.statusCode).toBe(411);
        expect(res.body.message).toBe("Validation error");
    });
});