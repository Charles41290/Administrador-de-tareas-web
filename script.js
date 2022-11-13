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

    // seleccionamos la etiqueta <ul>.ETIQUETA PADRE
    const list = document.querySelector("[data-list]");  
    
     // necesitamos crear una nueva etiqueta <li> y agregarla a list. ETIQUETA HIJO
    const task = document.createElement("li"); 
    task.classList.add('card');// para que task no pierda el estilo definido en style necesitamos agregarle una clase

    // creamos <div>
    const taskContent = document.createElement("div"); //PADRE de <i>
    taskContent.appendChild(checkComplete()) //HIJO (etiqueta <i class= "far fa-check-square icon">)
                                            /* <div>
                                                    <i> </i>
                                                </div>*/
    // titleTask contiene la etiqueta <span>
    const titleTask = document.createElement("span");
    titleTask.classList.add("task"); 
    titleTask.innerText = valor; // Asignamos el valor ingresado por el usuario en el form

    //agregamos titleTask a taskContent 
    taskContent.appendChild(titleTask); /*<div>
                                            <i> </i>
                                            <span></span>
                                        </div> */


    // creamos un template-String con las etiquetas html combinadas con la var value 
    const contenido =`
                        <i class="fas fa-trash-alt trashIcon icon"></i>`;
    // contenido se compone de  todas las etiquetas html junto con el valor de value(ingreso del usuario)
    
    // agregamos contenido a la etiqueta <li>, contenida en el objeto task
    task.appendChild(taskContent); // añado a <li> la etiqueta <div> la cual tiene la etiqueta <i>
                                /* <li>
                                        <div>
                                            <i> </i>
                                            <span></span>
                                        </div>
                                    </li>
                                        */ 
    
    // agregamos la etiqueta creada al objeto lista(contenedor)
    list.appendChild(task); // se añade la etique <li> a list (etiqueta <ul>)
                            /* <ul>
                                    <li>
                                        <div>
                                            <i> </i>
                                            <span></span>
                                        </div>
                                    </li>
                                </ul> */
    input.value = "";
}

btn.addEventListener("click", createTask); // create Task no lleva parentesis ya que es una referencia a la funcion y no un llamado


// creamos una funcion un objeto con la etiqueta <i> y sus clases
const checkComplete = () => {
    const i = document.createElement("i");
    //i.classList.add("far fa-check-square icon")// arroja error ya que permite unicamente un solo nombre de clase por .add. Se puede solucionar de la siguiente manera
    i.classList.add("far");
    i.classList.add("fa-check-square");
    i.classList.add("icon");
    return i;
}

