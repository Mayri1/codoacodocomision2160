//funciones

function calcular(){
    let num=Number(prompt("n1"));
    let num2=Number(prompt("n1"));
    let op= prompt("ingrese operacion \n + para sumar \n - para restar \n * para multiplicar \n / para dividir")
    let resultado = 0;
    let elemento= document.getElementById("principal");
    
    if(op === "+"){
        resultado = num + num2;
        elemento.innerHTML+="<p> El resultado de la suma de "+num+" y "+num2+" es: "+
        resultado+"</p>";
    }else if(op === "-"){
        resultado = num - num2;
        elemento.innerHTML+="<p> El resultado de la resta de "+num+" y "+num2+" es: "+
        resultado+"</p>";
    }
    else if(op === "/"){
        resultado = num / num2;
        elemento.innerHTML+="<p> El resultado de la división de "+num+" y "+num2+" es: "+
        resultado+"</p>";
    }else if(op === "*"){
        resultado = num * num2;
        elemento.innerHTML+="<p> El resultado de la multiplicación de "+num+" y "+num2+" es: "+
        resultado+"</p>";
    }else{
        elemento.innerHTML+="El valor para la operación es incorrecto!";
    }
    }

    
    