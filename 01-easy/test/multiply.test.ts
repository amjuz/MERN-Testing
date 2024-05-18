
import { describe, expect, test } from '@jest/globals'
import { Multiply } from '../src/index'

describe("Multiply",()=>{

    test("should be able to multiply two positive number", ()=>{
        const result = Multiply(5, 6);
        expect(result).toBe(30);
    })

    test("should be able to multiply two negative number", ()=>{
        const result = Multiply(-5, -10);
        expect(result).toBe(50);
    })

    test("should be able to multiply negative and positive numbers", ()=>{
        const result = Multiply(7, -10);
        expect(result).toBe(-70);
    })
})