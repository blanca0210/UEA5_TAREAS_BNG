//buscar la respuesta

//fetch('json.json')
//.then (response => response.json())
//.then (json =>{
    //document.getElementById('adn').innerHTML=json.frase2;
    //document.getElementById('id1').innerHTML=json.frase1;
    //document.getElementById('numero').innerHTML=json.cantidad1;
    //console.log(json.frase1)
//})

fetch('json.json')
.then (response => response.json())
.then (json =>{
    document.getElementById('luna').innerHTML=json.frase1;
    document.getElementById('estrellas').innerHTML=json.frase2;
    document.getElementById('tu').innerHTML=json.frase3;
})
