export const uniqueDates = (tasks) => {
    const unique = [];
    tasks.forEach ( (task) => {
        
        if  (!unique.includes(task.dateFormat)){ // si la fecha en cuestion no existe entocnes se agrega al array unique
            unique.push(task.dateFormat)
        }
        //console.log(unique);
    })

    return unique;
    
}

// Ordenar fechas
export const orderDates = (dates) => {
    return dates.sort( (a, b) => {
        const firstDate = moment(a, "DD/MM/YYYY");
        const secondDate = moment(b, "DD/MM/YYYY")
        return firstDate - secondDate;
    })
}