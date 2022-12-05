import { uniqueDates } from "../services/date.js";
import checkComplete from "./checkComplete.js";
import deleteBtn from "./deleteBtn.js";
import displayTasks from "./readTasks.js";

const addTask = (evento) => {

    evento.preventDefault();

    // seleccionamos la etiqueta <ul>.ETIQUETA PADRE
    const list = document.querySelector("[data-list]");
    const input = document.querySelector("[data-form-input]");
    //Fechas
    const calendar = document.querySelector("[data-form-date]");

    const valor = input.value; // me devuelve el valor de la tarea ingresada en el input 
    const date = calendar.value;
    const dateFormat = moment(date).format("DD/MM/YYYY"); // moment fue importada en el archivo index

    // Valido que la tarea no sea vacia o que no se elija fecha

    if (valor == "" || date ==""){
        return; // me impide que el codigo de abajo se ejecute y se se agregue tareas vacias
    }
    
    input.value = "";
    calendar.value = "";

    const complete = false;


    // Almacenamiento de datos 
    const taskObj = {
        valor,
        dateFormat,
        complete, 
        id : uuid.v4() // crea un identifcador unico
    };

    list.innerHTML = "";

    const taskList  = JSON.parse(localStorage.getItem('tasks'))  || []; // retorna un objeto en caso que hubiese algo almacenado en localStorage. Si no, retorna un array vacio

    // agrego el taskObj al array taskList (anteriormente creado fuera de esta funcion) actualmente tackList tiene lo recuperado desde localStorage
    taskList.push(taskObj);
    //sessionStorage.setItem("tasks", JSON.stringify(taskObj));
    localStorage.setItem("tasks", JSON.stringify(taskList));

    displayTasks();

    /*
    Se sustituyo por readTasks()
    const task = createTask(taskObj);
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

// Arrow funcition
export const createTask = ({valor, dateFormat, complete, id }) => { // del objeto que recibo como param le indico que tomar -> id corresponde al identificador unico creado por uuid.v4

    // necesitamos crear una nueva etiqueta <li> y agregarla a list. ETIQUETA HIJO
    const task = document.createElement("li"); 
        task.classList.add('card');// para que task no pierda el estilo definido en style necesitamos agregarle una clase

        const check = checkComplete(id); // retorna un elemento html
        if(complete){
            check.classList.toggle("fas")
            check.classList.toggle("completeIcon")
            check.classList.toggle("far")
        }
    
    // creamos <div>
    const taskContent = document.createElement("div"); //PADRE de <i>
        taskContent.appendChild(check) //HIJO (etiqueta <i class= "far fa-check-square icon">)
                                            /* <div>
                                                    <i> </i>
                                                </div>*/

    // titleTask contiene la etiqueta <span>
    const titleTask = document.createElement("span");
        titleTask.classList.add("task"); 
        titleTask.innerText = valor; // Asignamos el valor ingresado por el usuario en el form

    //creamos un elemento tipo <span>
    const dateElement = document.createElement("span");
        dateElement.innerHTML = dateFormat; //dateFormat esta definido en linea 16 -> returns <span> dd/mm/yyy <span>
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
    
    task.appendChild(deleteBtn(id)); // agrego el boton(icono) a la etiqueta <li> 
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

    return task;
}

export default addTask;