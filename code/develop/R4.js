'use strict';

var contenido = document.querySelector('#contenido');


function traer(){
    fetch('http://api.weatherstack.com/current?access_key=c3782eacc74968284751062b1d53e51c&query=Buenos_Aires')     //fetch me trae algo, lo que ponga en el parentesis
    .then(res => res.json())
    .then(data => {
        
        tabla(data)
        
    })
        
}

function tabla(data){
    contenido.innerHTML += `
    <tr>
        <th scope="row">${data.location.country}</th>
        <td>${data.location.name}</td>
        <td>${data.location.localtime}</td>
        <td>${data.current.temperature}</td>
    </tr>
    `
}