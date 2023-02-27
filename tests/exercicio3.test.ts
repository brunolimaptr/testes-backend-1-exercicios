import { exercicio3 } from "../src/exercicio3"

describe("exercicio3", ()=>{
    
    test("procurar Astrodev nessa lista",()=>{
       const result = exercicio3("Astrodev")
       expect(result).toContain("Astrodev")
    })
})