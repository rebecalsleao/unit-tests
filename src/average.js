/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2 , 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (list) => {
  let sumElements = 0;

  if (list.length === 0) {
    return undefined;
  }

  let existeValorNaoNumerico = false;

  list.forEach((element) => {
    if (typeof element !== 'number') {
      existeValorNaoNumerico = true;
    }
    sumElements = element + sumElements;
  });
  if (existeValorNaoNumerico) {
    return undefined;
  }
  let ave = sumElements / list.length;

  return Math.round(ave);
};

// if (typeof  !== "number") {
//     return undefined;
// }
module.exports = average;
