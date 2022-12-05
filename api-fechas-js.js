const data = new Date() // instancia un objeto del tipo date
data.toLocaleDateString('es-AR') // formato de fecha DD/MM/YY
// podemos crear un objeto que defina como queremos que se imprima la fecha
const dataOptions = {
    weekend: 'long',
    year: 'numeric',
    month:'long',
    day: 'numeric'
}
data.toLocaleDateString('es-MX', dataOptions)// se imprime 25 de noviembre de 2022
data.toLocaleTimeString() // devuelve el timepo local de la forma hh:mm:ss

const horarioOptions = {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit', 
}

data.toLocaleString('es-MX', { 
    ...dataOptions, 
    ...horarioOptions
}) // devuelve -> 25 de noviembre de 2022, 21:38:19
// podemos combinar todas las opciones utilizando el metodo toLocaleString()
// "..."" se llama spread operator, el cual toma un objeto iterable y lo expande a elementos individuales

/* Si necesitamos usar ese formato en varios lugares del código, podemos utilizar el objeto Intl.DateTimeFormat que es un contructor, o sea, recibirá informaciones iniciales de cómo queremos que la fecha esté formateada.*/

const formataData = new Intl.DateTimeFormat('es-MX', {
    ...dataOptions,
    ...horarioOptions
})

// Llamando el metodo .format podemos formatear diferentes fechas en caso que sea necesario
formataData.format(data)

console.log(data.toLocaleString('es-MX', {
    ...dataOptions, 
    ...horarioOptions
}))
console.log(formataData.format(data))