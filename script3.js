import checkComplete from "./scripts-components/checkComplete.js";
import deleteBtn from "./scripts-components/deleteBtn.js";
( () => {
    //  seleccionamos el boton 
    const btn = document.querySelector("[data-form-button]");
    // seleccionamos el cuadro de texto
    const input = document.querySelector("[data-form-input]");
    // seleccionamos la etiqueta input para la fecha
    
    const addTask = (evento) => {
        // seleccionamos la etiqueta <ul>.ETIQUETA PADRE
        const list = document.querySelector("[data-list]");
        const task = createTask(evento);
        list.appendChild(task); // se añade la etique <li> a list (etiqueta <ul>)
                                /* <ul>
                                        <li>
                                            <div>
                                                <i> </i>
                                                <span></span>
                                            </div>
                                            <span> dd/mm/yyyy </span>
                                            <i></i>
                                        </li>
                                    </ul> */
    }

    const taskList  = [];
    
    // Arrow funcition
    const createTask = (evento) => {
        evento.preventDefault();
        const input = document.querySelector("[data-form-input]");
        const valor = input.value; // me devuelve el valor de la tarea ingresada en el input 

        //Fechas
        const calendar = document.querySelector("[data-form-date]");
        const date = calendar.value;
        const dateFormat = moment(date).format("DD/MM/YYYY")

        console.log(typeof(valor), typeof(dateFormat));
        
        // Almacenamiento de datos 
        const taskObj = {
            valor,
            dateFormat
        };

        // agrego el taskObj al array taskList creado fuera de esta funcion 
        taskList.push(taskObj);

        //sessionStorage.setItem("tasks", JSON.stringify(taskObj));
        localStorage.setItem("tasks", JSON.stringify(taskList));

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

        //creamos un elemento tipo <span>
        const dateElement = document.createElement("span");
        dateElement.innerHTML = dateFormat; //dateFormat esta definido en linea 20 -> returns <span> dd/mm/yyy <span>
        //console.log(dateElement);


        //agregamos titleTask a taskContent 
        taskContent.appendChild(titleTask); /*<div>
                                                <i> </i>
                                                <span></span>
                                            </div> */

        // agregamos contenido a la etiqueta <li>, contenida en el objeto task
        task.appendChild(taskContent); // añado a <li> la etiqueta <div> la cual tiene la etiqueta <i>
                                    /* <li>
                                            <div>
                                                <i> </i>
                                                <span></span>
                                            </div>
                                        </li>
                                            */ 

        task.appendChild(dateElement); /* <li>
                                            <div>
                                                <i> </i>
                                                <span></span>
                                            </div>
                                            <span> dd/mm/yyyy </span>
                                        </li>
                                            */ 
        
        task.appendChild(deleteBtn()); // agrego el boton(icono) a la etiqueta <li> 
                                            /* <li>
                                                    <div>
                                                        <i> </i>
                                                        <span></span>
                                                    </div>
                                                    <span> dd/mm/yyyy </span>
                                                    <i></i>
                                                </li>
                                            */
        // agregamos la etiqueta creada al objeto lista(contenedor)
        
        input.value = "";
        return task;
    }

    btn.addEventListener("click", addTask); // create Task no lleva parentesis ya que es una referencia a la funcion y no un llamado

}) ();


