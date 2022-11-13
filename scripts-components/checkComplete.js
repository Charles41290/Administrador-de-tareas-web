// creamos una funcion que retorne un objeto con la etiqueta <i> y sus clases
const checkComplete = () => {
    const i = document.createElement("i");
    //i.classList.add("far fa-check-square icon")// arroja error ya que permite unicamente un solo nombre de clase por .add. Se puede solucionar de la siguiente manera
    /*i.classList.add("far");i.classList.add("fa-check-square"); i.classList.add("icon");*/
    
    // otra forma mas compacta:
    i.classList.add("far","fa-check-square","icon");

    // añadimos el evento click a la etiqueta <span>
    console.log(i) // para ver cuales eran las clases antes que occurra el evento click 
    i.addEventListener("click", completeTask)
    return i;
}

// creamos la funcion completeTask para marcar las tareas completas
const completeTask = (evento) =>{
    elemento = evento.target; // .target es una referencia al objeto desde el cual se lanzo el evento
                                // si no se hace esa referencia no se sabe desde que objeto <i> ocurren el evento
    elemento.classList.toggle("fas")
    elemento.classList.toggle("completeIcon")
    //eliminamos la clase anterior "far"
    elemento.classList.toggle("far")
    console.log(elemento) // para ver las clases añadidas/quitadas durante el evento
}

export default checkComplete;