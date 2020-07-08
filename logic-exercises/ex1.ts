//A

type result = {
  total: number;
  multiplication: number;
  quantity: number;
};

function calc(array: any): any {
  let total: number = 0;
  let multiplicacao: number = 1;

  for (let i = 0; i < array.length; i++) {
    total = total + array[i];
    multiplicacao = multiplicacao * array[i];
  }
  const result = {
    total: total,
    multiplicacao: multiplicacao,
    quantity: array.length,
  };
  return result;
}

const testeArray = [10, 5, 8];

// console.log(calc(testeArray));

//B
type resultMinMax = {
  min: number,
  max: number
}

function arrayMinMax(array: number[]) {
  let min: number = Infinity;
  let max: number = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i];
    }

    if (max < array[i]) {
      max = array[i];
    }
  }
  const resultMinMax = {
    min,
    max
  };

  return resultMinMax;
};

const testeArray2 = [-5,2,3,4,6,10,12,15];

console.log(arrayMinMax(testeArray2));

