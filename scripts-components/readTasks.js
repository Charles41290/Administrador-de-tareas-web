import { createTask } from "./addTask.js";
import dateElement from "./dateElement.js";
import { uniqueDates, orderDates}  from "../services/date.js";

const displayTasks = () => {
    //console.log(uuid.v4()); uuid.v4 me genera un identificador unico 
    const list = document.querySelector("[data-list]");
    
    // obtenemos la info almacena en localStorage
    const tasksList = JSON.parse(localStorage.getItem("tasks")) || [];
    const dates = uniqueDates(tasksList);
    orderDates(dates);

    dates.forEach ( date => {
        const dateMoment = moment (date, "DD/MM/YYYY")
        list.appendChild(dateElement(date))
        tasksList.forEach((task) => {
            const taskDate = moment(task.dateFormat, "DD/MM/YYYY");
            const diff = dateMoment.diff(taskDate); // diferencia entre las fechas almacenadas en localStorage y las nuevas fechas ingresadas
            if (diff == 0) {
                list.appendChild(createTask(task)); // lo agregamos como hijo a la etiqueta <ul>   
            }
                
        });


    })

    /*
    // cada valor de taskList lo agregamos para que aparezca en la pag
    tasksList.forEach((task) => {
        list.appendChild(createTask(task)); // lo agregamos como hijo a la etiqueta <ul>       
    });
    */


}

export default displayTasks;