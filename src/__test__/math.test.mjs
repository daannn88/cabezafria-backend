import { rest, sum } from "../utils/math.mjs";

describe('Funciones de Math(suma)', ()=>{
    it('debe sumar dos numeros correctamente',()=>{
        //Given
        const a = 5
        const b = 3
        //When
        const result = sum(a,b)
        //Then
        expect(result).toBe(8) //Assertion 1
        expect(typeof result).toBe('number') //Assertion 2
    });
    it('debe lanzar error cuando los valores no son validos', ()=>{
        //Given
        const a = 5
        const b = "Juan"
        //When
        //Then
        expect(()=>sum(a, b)).toThrow('Valores invalidos') //Assertion 3
    })
});

describe('Funciones de Math(resta)', ()=>{
    it('debe restar dos numeros correctamente',()=>{
        //Given
        const a = 8
        const b = 5
        //When
        const result = rest(a,b)
        //Then
        expect(result).toBe(3) //Assertion 1
        expect(typeof result).toBe('number') //Assertion 2
    });
    it('debe lanzar error cuando los valores no son validos', ()=>{
        //Given
        const a = 8
        const b = "5"
        //When
        //Then
        expect(()=>rest(a, b)).toThrow('Valores invalidos') //Assertion 3
    })
});