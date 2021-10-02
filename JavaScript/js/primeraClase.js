
alert('hola gente');
console.log('como estan?');

/*variables*/
/*palabra reservada nombre = asignamos valor */
var nombre;
let palabra= 'holis'
const PI= 3.1416;
let num2 = 18;
let hayClases= true;

/*tipos: numero, null, undefined, strings, boolean, chart, objetos, funciones*/

console.log( PI * num2)
console.log(num2 + 36 + ' ' + palabra);
if(hayClases){
    console.log('Nos conectamos al meet');
}else{
    console.log('No nos conectamos al meet');
}

/*&& y, || o*/
/*DOM*/

let elemento = document.getElementById('principal');
//console.log(elemento);
elemento.innerHTML= 'mi valor para innerHTML';
elemento.innerHTML += "<p>"+ palabra +"</p>";
document.write('<h3 class="text-center bg-primary">hola en metodo write </h3>')

if(nombre == undefined){
    elemento.innerHTML+= "Estamos sin valor definido"
    elemento.innerHTML+= "<p>mayra</p>";
    elemento.innerHTML+= "<p>Camila</p>";
    elemento.style.backgroundColor = "pink"


}
/*
let mensaje = prompt('Introduce tu mensaje');
elemento.innerHTML += "<h3>" + mensaje + "</h3>";
elemento.innerHTML += "<div class='alert alert-success' role='alert'>A simple success alert—check it out!</div>";
*/

//let menu = prompt("seleccione el pedido: \n 1. Milanesa con pure \n 2. Milanesa napolitana con fritas \n 3. Milanesa con fritas")
let menu="2";
if(menu==1){
    elemento.innerHTML = "<div class='alert alert-success' role='alert'>Disfrute su milanesa con pure!</div>";
}else if( menu ==2){
    elemento.innerHTML = "<div class='alert alert-success' role='alert'>disfrute su napollitana con flitas!</div>";
}else if( menu == 3){
    elemento.innerHTML = "<div class='alert alert-success' role='alert'>Disfrute su mila con fritas!</div>";
}else{
    alert("dede elegir una opcion valida");
    let menu = prompt("seleccione el pedido: \n 1. Milanesa con pure \n 2. Milanesa napolitana con fritas \n 3. Milanesa con fritas")
}
/*
switch (menu) {
    case 1:
        let menu = prompt("seleccione el pedido: \n 1. Milanesa con pure \n 2. Milanesa napolitana con fritas \n 3. Milanesa con fritas")
        break;

    default:elemento.innerHTML = "<div class='alert alert-success' role='alert'>Introduzca un valor valodi</div>";
        break;
}
*/
/*
let num = parseInt(prompt("ingrese un numero"));
let nume2 = parseInt(prompt("ingrese un numero"));
let resultado = "el resultado de la suma entre : " +num + "y"+ num2 + "es: " + (num+num2);
*/

let alumnos= ["mayra", "micaela", "nicolas", "santino"];
for(let a=0; a<alumnos.length; a++ ){
elemento.innerHTM+= `
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${alumnos[a]}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

`;

}
alumnos.push("ariadna");
alumnos[5]="luis"
alumnos.forEach((alumno, index)=>{
    elemento.innerHTM+= `
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${index} ${alumno}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

`;
})