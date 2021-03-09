
/**
 * Recebe uma matriz e ordena ela pelo conteúdo.
 * Considere que virão apenas listas de números ou palavras.
 * @param array list
 */
function sortList(list){
  if (!isNaN(list[0])){
    list.sort(function(a, b) {
    return a - b;
    });
  }
  else{
    list.sort();
  }
	return list;
}

module.exports = sortList;
