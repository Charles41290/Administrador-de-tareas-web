const deleteBtn = () => {
    const i = document.createElement("i");
    i.classList.add("fas","fa-trash-alt","trashIcon", "icon");
    i.addEventListener("click",deleteTask)
    return i;
}

const deleteTask = (evento) => {
    /* buscamos eliminar el nodo padre, en este caso la etiqueta <li> llamada task */
    const parent = evento.target.parentElement;
    parent.remove()
    
}

export default deleteBtn;