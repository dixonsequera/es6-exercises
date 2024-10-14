const rectangleArea = (largo, ancho) => largo * ancho;

const greet = (nombre) => `Hola, ${nombre}!`;

const mergeArray = (arr1, arr2) => [...arr1, ...arr2];

const ducplicateAndSum = (a, b, ...numeros) => {
  const suma = a + b;
  return numeros.map((numero) => numero + suma);
};

const setExercise = () => {
  const miSet = new Set([1, 2, 3, 3, 4, 5]);
  return miSet.size;
};

const miMapa = new Map();
miMapa.set("nombre", "Juan");
miMapa.set("edad", 30);
miMapa.set("profesion", "Desarrollador");

const mapExercise = () => {
  miMapa.set("profesion", "Ingeniero de Software");
  miMapa.delete("edad");

  return miMapa;
};

const countRepeated = (string) => {
  const count = new Map();

  for (let i = 0; i < string.length; i++) {
    const item = string[i];
    let counter = 0;

    if (count.has(item)) {
      counter = count.get(item) + 1
    } else {
      counter = 1;
    }

    count.set(item, counter);
  }
  return count;
};
