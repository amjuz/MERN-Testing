import { describe, expect, test } from "@jest/globals";
import request from "supertest";
import { app } from "../src";

describe("POST subtract", ()=> {
    test("should be able to subtract two positive numbers", async ()=> {
        const res = await request(app).post('/subtract').send({
            a: 20,
            b: 50
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(-30);
    });

    test("should be able to subtract two negative numbers", async ()=> {
        const res = await request(app).post('/subtract').send({
            a: -32,
            b: -17
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(-15)
    })
})