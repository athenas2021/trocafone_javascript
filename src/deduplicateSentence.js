/**
 * Deve receber uma frase e remover duplicatas em sequência.
 * Por exemplo, na frase "Hello Hello Jack." deve retornar "Hello Jack."
 * Mas na frase "Hello Jack. Hello Ana." não deve haver alterações então
 * deve retornar "Hello Jack. Hello Ana."
 */
 function deduplicateSentence($inputString){
   var arr = $inputString.split(" ");
   var x = $inputString.length;

   for (var i=0; i<=x;i++){
    var primeiro = arr[i];
    var segundo = arr[i+1];
   	if (primeiro== (segundo)){
     	arr.splice(i, 1);

     }

   }
 	return arr.toString().replace(/,/g," " );
 }


module.exports = deduplicateSentence;
