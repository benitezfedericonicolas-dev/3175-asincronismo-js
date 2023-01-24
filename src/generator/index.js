/* Se pretende una funcion generadora que basicamente itinera como un ciclo pero de manera controlada*/

function* generador() { //el asterisco determina que la funcion sera generadora
    yield () => {
        console.log('lorem')
    }; //step 1 
    yield 2; //step 2
    yield 3; //step 3
};

const const_generador = generador(); 
const_generador.next().value(); //imprimira 'lorem'
console.log(const_generador.next().value); //imprimira 2
console.log(const_generador.next().value); //imprimira 3


//OTRO EJEMPLO =======================

function* itinerancia(var_array) {
    for (let valor of var_array) {
        yield valor
    }
}

const it = itinerancia([
    'Petrus',
    'Ioannes',
    'Paulus',
]);
//Avanzamos controladamente en el ciclo for of recorriendo la constante it
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().done);
console.log(it.next().done);

//un nuevo console.log(it.next().value); devolveria undefined

/* Se destaca que it.next() devolvera un objeto con dos propiedades: value y donde. 
            Value sera la yield correspondiente de la siguiente itinerancia, 
            Done (booleano) el cual es 
                        verdadero si el iterador ya llegó al final de la secuencia. En este caso value define opcionalmente el valor de retorno del iterador.
                        Es falso si el iterador puede dar un siguiente valor en la secuencia. Es equivalente a no definir la propiedad done. 
    */