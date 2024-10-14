describe("Ejercicios de ES6", function () {

  it("debe calcular correctamente el área de un rectángulo", function () {
    expect(rectangleArea(4, 5)).toBe(20);
  });

  it("debe greet correctamente usando funciones flecha", function () {
    expect(greet('Carlos')).toBe('Hola, Carlos!');
  });

  it("debe combinar dos arreglos usando el operador spread", function () {
    expect(mergeArray([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  it("debe duplicar y sumar correctamente los números", function () {
    expect(ducplicateAndSum(2, 3, 4, 5)).toEqual([9, 10]);
  });

  // Ejercicio 4: Sets y Maps
  it("debe devolver el tamaño correcto del Set", function () {
    expect(setExercise()).toBe(5);
  });

  it("debe modificar el mapa correctamente", function () {
    const mapa = mapExercise();
    expect(mapa.has('nombre')).toBe(true);
    expect(mapa.get('nombre')).toBe('Juan');
    expect(mapa.has('edad')).toBe(false);
    expect(mapa.get('profesion')).toBe('Ingeniero de Software');
  });

  it("should count repeated characters in a long string with spaces correctly", function() {
    const result = countRepeated("hello world this is a test");

    expect(result.get('h')).toBe(2);
    expect(result.get('e')).toBe(2);
    expect(result.get('l')).toBe(3);
    expect(result.get('o')).toBe(2);
    expect(result.get('w')).toBe(1);
    expect(result.get('r')).toBe(1);
    expect(result.get('d')).toBe(1);
    expect(result.get('t')).toBe(3);
    expect(result.get('i')).toBe(2);
    expect(result.get('s')).toBe(3);
    expect(result.get('a')).toBe(1);
    expect(result.get(' ')).toBe(5);
  });
});
