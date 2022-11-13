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
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    const valor = input.value;
    //const task = document.querySelector("[data-task]");
    const list = document.querySelector("[data-list]")   // seleccionamos la etiqueta <ul> 
    const task = document.createElement("li")  // necesitamos crear una nueva etiqueta <li> y agregarla a list
    // para que task no pierda el estilo definido en style necesitamos agregarle una clase
    task.classList.add('card');

    // creamos un template-String con las etiquetas html combinadas con la var value 
    const contenido =`  <div>
                            <i class="far fa-check-square icon"></i>
                            <span class="task">${valor}</span>
                        </div>
                        <i class="fas fa-trash-alt trashIcon icon"></i>`;
    // contenido se compone de  todas las etiquetas html junto con el valor de value(ingreso del usuario)
    
    // agregamos contenido a la etiqueta <li>, contenida en el objeto task
    task.innerHTML = contenido;

    // agregamos la etiqueta creada al objeto lista(contenedor)
    list.appendChild(task) // se añade la etique <li> a list (etiqueta <ul>)
    input.value = "";
    console.log(task);
}

btn.addEventListener("click", createTask); // create Task 
// parentesis ya que es una referencia a la funcion y no un llamado

