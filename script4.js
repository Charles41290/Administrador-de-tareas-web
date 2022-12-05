
import addTask from "./scripts-components/addTask.js";
import displayTasks from "./scripts-components/readTasks.js";

( () => {
    //  seleccionamos el boton 
    const btn = document.querySelector("[data-form-button]");

    btn.addEventListener("click", addTask); // create Task no lleva parentesis ya que es una referencia a la funcion y no un llamado
    displayTasks();

}) ();


