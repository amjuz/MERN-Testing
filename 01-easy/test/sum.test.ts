import { describe, expect, it, test } from "@jest/globals"
import { Sum } from '../src/index'

describe('Sum', ()=> {

    test("should be able to add two positive numbers", ()=>{
        const result = Sum(1,2);
        expect(result).toBe(3);
    })

    test("should be able to add two negative numbers", ()=>{
        const result = Sum(-2,-3);
        expect(result).toBe(-5);
    })

    test("should be able to add positive and negative numbers", ()=>{
        const result = Sum(-10, 5);
        expect(result).toBe(-5);
    })
})