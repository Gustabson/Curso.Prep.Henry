// Do not change any of the function names

function mayuscula(nombre) {
  return nombre.charAt(0).toUpperCase()+ nombre.slice(1);
}

function invocarCallback(cb) {
  cb()
}

function operacionMatematica(n1, n2, cb) {
  return cb(n1, n2)
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  let save= 0;
  for (var i = 0; i < numeros.length; i++) {
    save+= numeros[i];
  } cb(save)
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(element => (cb(element)))
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
   array2=[];
  array.map(function(element){
    cb(element);
    array2.push(cb(element))
  });
  return array2;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  newarray=[];
  for (var i = 0; i < array.length; i++) {
    if (array[i].charAt(0)=== "a"){
      newarray.push(array[i]);
    }
  } return newarray;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
