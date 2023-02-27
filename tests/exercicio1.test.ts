import { exercicio1 } from "../src/exercicio1"

describe("exercicio1", ()=>{
    
    test("Deve ser inserido um numero no formato string e retornar um numero no formato number",()=>{
       const result = exercicio1("50")
       expect(result).toBe(50)
    })
})