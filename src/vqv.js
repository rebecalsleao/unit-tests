/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:

  Parâmetros:
  - Uma string;
  - Um número.

  Comportamento:
  vqv(Tunico, 30) // Retorna:
  'Oi, meu nome é Tunico!
  Tenho 30 anos,
  trabalho na Trybe e mando muito em programação!
  #VQV!'

  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.
*/

const vqv = (string, numero) => {
  const person = {
    name: string,
    age: numero,
  };

  if (person.name === undefined && person.age === undefined) {
    return undefined;
  }

  const textPerson = `Oi, meu nome é ${person.name}!
Tenho ${person.age} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;

  return textPerson;
};

module.exports = vqv;
