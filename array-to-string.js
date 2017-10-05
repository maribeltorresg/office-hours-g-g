/*
Crear una funcion que reciba como parametro un array y retorne una cadena
-> retorne quack! sneeze! boom!
*/
var arr = ["quack","sneeze","boom"];

function convertToString(array){
  var string = array.join('! ') + '!';
  return string;
}

var result = convertToString(arr);
console.log(result);
