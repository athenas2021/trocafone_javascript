
function findFirstBiggestWord($inputString){
 	var arr = $inputString.split(" ");
   var tam = arr.length;
   var maior = arr[0];

   for (var i=0; i<=tam; i++){
   var primeiro = arr[i];
   var taman = primeiro.length;
   	if  (arr[i] > maior){
     	maior = arr[i];
     }
   }
 	return maior;
 }


module.exports = findFirstBiggestWord;
