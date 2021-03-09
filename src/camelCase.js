/**
 * Deve receber uma string e retornar em camelCase
 * Ex: "an apple" deve retornar "anApple"
 * @see https://pt.wikipedia.org/wiki/CamelCase
 */
function camelCase($inputString){

    var x = $inputString.replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, ' ');
    return (x.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, ''));
};

module.exports = camelCase;
