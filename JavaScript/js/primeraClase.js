
alert('hola gente');
console.log('como estan?');

/*variables*/
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