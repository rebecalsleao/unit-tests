const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se `productDatails` é uma função', () => {
    expect(typeof productDetails).toEqual('function');
  });
  it('Verifica se o retorno do `productDatails` é uma array', () => {
    const retorno = productDetails('Alcool gel', 'Máscara');
    expect(Array.isArray(retorno)).toEqual(true);
  });

  it('Verifica se o array retornado de `productDatails` existem dois itens', () => {
    const retorno = productDetails('Alcool gel', 'Máscara');
    expect(retorno.length).toEqual(2);
  });

  it('Verifica se os dois itens do array retornado pela função são objetos', () => {
    const retorno = productDetails('Alcool gel', 'Máscara');
    expect(typeof retorno[0]).toEqual('object');
    expect(typeof retorno[1]).toEqual('object');
  });

  it('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    const retorno = productDetails('Alcool', 'Mascara');
    expect(retorno[0].name !== retorno[1].name).toEqual(true);

    // expect(typeof productDetails()).toEqual('object');
  });

  it('Verifica se os dois productIds terminam com 123.', () => {
    const retorno = productDetails('Alcool gel', 'Máscara');
    expect(retorno[0].details.productId).toEqual('Alcool gel123');
    expect(retorno[1].details.productId).toEqual('Máscara123');
  });
});

// ESCREVA SEUS TESTES ABAIXO:
// Teste se productDetails é uma função.
// Teste se o retorno da função é um array.
// Teste se o array retornado pela função contém dois itens dentro.
// Teste se os dois itens dentro do array retornado pela função são objetos.
// Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
// Teste se os dois productIds terminam com 123.
