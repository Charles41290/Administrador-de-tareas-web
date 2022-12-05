// creamos una funcion que retorne un objeto con la etiqueta <i> y sus clases
const checkComplete = ( id ) => {
    const i = document.createElement("i");
    //i.classList.add("far fa-check-square icon")// arroja error ya que permite unicamente un solo nombre de clase por .add. Se puede solucionar de la siguiente manera
    /*i.classList.add("far");i.classList.add("fa-check-square"); i.classList.add("icon");*/
    
    // otra forma mas compacta:
    i.classList.add("far","fa-check-square","icon");

    // añadimos el evento click a la etiqueta <span>
    //console.log(i) // para ver cuales eran las clases antes que occurra el evento click 
    i.addEventListener("click", (evento) => completeTask(evento, id))
    return i;
}

// creamos la funcion completeTask para marcar las tareas completas
const completeTask = (evento, id) =>{
    let elemento = evento.target; // .target es una referencia al objeto desde el cual se lanzo el evento
                                // si no se hace esa referencia no se sabe desde que objeto <i> ocurren el evento
    elemento.classList.toggle("fas")
    elemento.classList.toggle("completeIcon")
    //eliminamos la clase anterior "far"
    elemento.classList.toggle("far")
    //console.log(elemento) // para ver las clases añadidas/quitadas durante el evento
    console.log("check-id", id);
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    //console.log(tasks);

    // busco dentro de tasks el index para el objeto cuyo id sea igual al que le paso como param a la funcion completeTask
    const index = tasks.findIndex( item => item.id == id);
    // accedo tasks[index] y al atributo complete y niego el valor que tenga complete (true or false)
    tasks[index]["complete"] =! tasks[index]["complete"];
    // guardamos la modificacion en localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

    console.log(tasks);
}

export default checkComplete;
