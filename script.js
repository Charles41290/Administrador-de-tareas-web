//  seleccionamos el boton 
const btn = document.querySelector("[data-form-button]")
// seleccionamos el cuadro de texto
const input = document.querySelector("[data-form-input]")

/* Añadimos evento click en el boton*/

// listener -> capta eventos (click, tecla pulsada, etc)

/*
btn.addEventListener("click", function(evento){
    evento.preventDefault()
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
});
// al dar click se genera el objeto input, luego
// cargamos en pantalla la propiedad value 
*/

// Arrow funcition
const createTask = (evento) => {
    evento.preventDefault()
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}

btn.addEventListener("click", createTask); // create Task 
// parentesis ya que es una referencia a la funcion y no un llamado

