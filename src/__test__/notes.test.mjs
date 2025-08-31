import { promedio } from "../utils/notes.mjs";

describe('Funciones de Notas', ()=>{
    it('debe calcular el promedio',()=>{
        //Given
        const total = 20
        const cantNotas = 4
        //When
        const result = promedio(total, cantNotas)
        //Then
        expect(result).toBe(5) //Assertion 1
        expect(typeof result).toBe('number') //Assertion 2
    });
    it('debe calcular el promedio',()=>{
        //Given
        expect(promedio(15, 3)).toBe(5);
        expect(promedio(100, 10)).toBe(10);
    });
});
