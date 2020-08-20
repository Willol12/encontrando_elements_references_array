//ENCONTRANDO ELEMENTOS DO TIPO DE REFERENCIA ARRAY

const marcas = [
  {id:4, nome: 'd'},
  {id:1, nome: 'a'},
  {id:2, nome: 'b'},
  {id:3, nome: 'c'},
  
];

const marca = marcas.find(function(marca){
  //ele vai procurar em marcas oque colocar depois dos 3 iguais
  return marca.nome ==='d';
});
console.log(marca);