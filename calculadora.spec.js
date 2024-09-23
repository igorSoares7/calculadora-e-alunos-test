const {somar, subtrair, multiplicar, dividir} = require("./calculadora")

test("Testa a soma de dois números", () => {
 expect(somar(2,5)).toBe(7);
 expect(somar(10,4)).toBe(14);
 expect(somar(-10,10)).toBe(0)
});

test("Testa a subtração de dois números", () => {
    expect(subtrair(10,4)).toBe(6);
    expect(subtrair(4,0)).toBe(4);
    expect(subtrair(0,4)).toBe(-4);
});
test("Testa a multiplicação de dois números", () => {
    expect(multiplicar(2,2)).toBe(4);
    expect(multiplicar(8,0)).toBe(0);
    expect(multiplicar(-10,2)).toBe(-20);
});
test("Testa a divisão de dois números", () => {
    expect(dividir(10,5)).toBe(2);
    expect(dividir(4,0)).toBe(-101);
    expect(dividir(0,2)).toBe(-101);
});


