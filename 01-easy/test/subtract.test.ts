import { describe, expect, test } from "@jest/globals";
import { Subtract } from "../src";

describe("subtract", ()=> {
    test("should be able to subtract two positive numbers", ()=> {
        const result = Subtract(2,5);
        expect(result).toBe(-3);
    })

    test("should be able to subtract two negative numbers", ()=> {
        const result = Subtract(-8,-12);
        expect(result).toBe(4);
    })

    test("should be able to subtract positive and negative numbers", ()=> {
        const result = Subtract(-15,42);
        expect(result).toBe(-57);
    })
})