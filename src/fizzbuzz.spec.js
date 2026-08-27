import fizzbuzz from "./fizzbuzz.js";

describe("FizzBuzz", () => {
  it("deberia generar el mismo numero si no sigue una regla", () => {
    expect(fizzbuzz(2)).toEqual("2");
  });

  it("deberia generar otro numero que no sigue una regla", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });

   it("deberia devolver 'Fizz' para múltiplos de 3", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });
   
  it("deberia tambien devolver 'Fizz' si es múltiplo de 3", () => {
    expect(fizzbuzz(6)).toEqual("Fizz");
  });

  it("deberia devolver 'Buzz' si es múltiplo de 5", () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });
  
  it("deberia devolver tambien 'Buzz' si es múltiplo de 5", () => {
    expect(fizzbuzz(25)).toEqual("Buzz");
  });

   it("deberia devolver 'FizzBuzz' si es múltiplo de 3 y 5", () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
  });

  it("deberia tambien devolver 'FizzBuzz' si es múltiplo de 3 y 5", () => {
    expect(fizzbuzz(30)).toEqual("FizzBuzz");
  });


});
