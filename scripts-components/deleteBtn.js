import displayTasks from "./readTasks.js";
const deleteBtn = (id) => {
    const i = document.createElement("i");
    i.classList.add("fas","fa-trash-alt","trashIcon", "icon");
    i.addEventListener("click",() => deleteTask(id))
    return i;
}

const deleteTask = (id) => {
    const li = document.querySelector("[data-list]")
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const index = tasks.findIndex((item) => item.id == id)
    tasks.splice(index, 1) // elimina 1 elemento a partir del index 
    //tasks.splice(id, 1);
    console.log(tasks);
    li.innerHTML = "";
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks(); // para que actualice la pagina

}

export default deleteBtn;