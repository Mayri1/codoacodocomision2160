

let seccion= document.getElementById("section");

function comprarTickets() {
    seccion.innerHTML = `
    <!-- MENU -->

    <header>
        <div class="container-fuid">
          <div class="row ">
             <nav class="navbar navbar-expand-lg" id="menu" >
                <div class="container-fluid">
                  <div class="izquierda">
                    
                    <a class="navbar-brand text-white" href="#">Conf Bs As</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="derecha">
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                      <li class="nav-item">
                        <a class="nav-link active " aria-current="page" href="#">La conferencia</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="losOradores">Los oradores</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="lugarYfecha">El lugar y la fecha</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link text-white"  href="#convierteteOrador">Conviértete en orador</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="verde"  onclick="comprarTickets()">Comprar tickets</a>
                      </li>
                      </div>
                     </ul>
                  </div>
               </div>
              </nav>
        </div>
    
    <!-- INICIO -->
    
    
    <div class="container-fluid ">
        <div class="row d-flex justify-content-center mt-4">
              <div class="card border-primary mg-3" style="max-width: 18rem; border-radius:0px; margin: 3px; height: 250px;
              text-align: center;"">
                    <div class="card-body-dos" style="max-width: 18rem; border-radius:0px; margin: 3px; height: 250px;
                    text-align: center;">
                        <h4 class="card-title-dos mt-3">Estudiante</h4>
                        <p class="card-text-dos">Tienen un descuento</p>
                        <h6>80%</h6>
                        <p class="text-secondary">* presentar documentación</p>
                    </div>
              </div>
    
              <div class="card border-primary" style="max-width: 18rem; border-radius:0px; margin: 3px; height: 250px;
              text-align: center;">
                 <div class="card-body-dos">
                      <h4 class="card-title-dos mt-3">Trainee</h4>
                      <p class="card-text-dos">Tienen un descuento</p>
                      <h6>50%</h6>
                      <p class="text-secondary">* presentar documentación</p>
                </div>
              </div>
              <div class="card border-warning" style="max-width: 18rem; border-radius:0px; margin: 3px; height: 250px;
              text-align: center;">
                 <div class="card-body-dos">
                      <h4 class="card-title-dos mt-3">Junior</h4>
                      <p class="card-text-dos">Tienen un descuento</p>
                      <h6>15%</h6>
                      <p class="text-secondary">* presentar documentación</p>
                 </div>
              </div>
      </div>
    </header>
    <main>
    <!-- SUBTITULO -->
    
       <div class="subtitulo text-uppercase text-center">
           <small>venta</small>
           <h2>valor de ticket $200</h2>
       </div>
    </div>
    
    <!-- FORMULARIO -->
    
    <div class="container-fluid d-flex justify-content-center formularioTickets" >
        <div class="row">
             <div class="d-flex formCortos" >
               <div class="col-6 m-2">
                    <input type="text" class="form-control" placeholder="Nombre" aria-label="First name" >
               </div>
               <div class="col-6 m-2">
                   <input type="text" class="form-control" placeholder="Apellido" aria-label="Last name" ">
               </div>
           </div>
               <div class="col-12 m-2 formLargo"  >
                  <input type="email" class="form-control" placeholder="Correo" aria-label="email" >
             </div>
    
            <div class="d-flex formCortos">
               <div class="col-6 m-2">
                    <label  class="form-label">Cantidad</label>
                    <input type="number" class="form-control" placeholder="Cantidad" aria-label="number" >
                </div>
          
                <div class="col-6 m-2">
                    <label  class="form-label">Categoría</label>
                    <select id="opciones" class="form-select" aria-label="Default select example">
                        <option value="estudiante">Estudiante</option>
                        <option value="trainee">Trainee</option>
                        <option value="junior">Junior</option>
                   </select>
               </div>
           </div>
    
            <div class="form-row">
    
               <div id="totalPagar" class="alert alert-primary col-12 m-2 " role="alert" >Total a Pagar: $</div>
    
               <div class="d-flex ">
                  <div class="btn-tickets m-2">
                      <button type="reset" onclick="limpiar()" class="btn text-white" >Borrar</button>
                  </div>
                  <div class="btn-tickets m-2">
                      <button type="button" class="btn text-white"  id="botonCalcular" data-bs-toggle="modal" data-bs-target="#exampleModal">Resumen</button>
       
                  </div>
                  
              </div>
    
          </div>
    
    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ticket N° </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary">Confirmar compra</button>
          </div>
        </div>
      </div>
    </div>

    </main>   


    
    `;
    document.querySelector("#botonCalcular").addEventListener('click',()=>{ 
      let inputs = document.querySelectorAll('input');
      let descuento = document.querySelector('#opciones').value;
      
      let comprador ={
        nombre: inputs[0].value,
        apellido: inputs[1].value,
        correo: inputs[2].value,
        cantidad: inputs[3].value
      };
      
      calcularValor(descuento, comprador.cantidad, comprador);

    });

  
}

const calcularValor=(desc, cantEntr, comp)=>{
    let resultado=0;
    let descuento=0;
    let numT= document.querySelector("#exampleModalLabel");
    for (let index=0; index<8; index++) {
         numT.innerHTML+=crearNumTicket();
    }
    let modal= document.querySelector(".modal-body");
  
    let alert= document.querySelector("#totalPagar");
    if(desc == "estudiante"){
     resultado=(cantEntr*200)*0.2;
     descuento=(cantEntr*200)*0.8;
     alert.innerHTML="Total a Pagar: $"
     alert.innerHTML+= resultado;
    }else if(desc== "trainee"){
        resultado=(cantEntr*200)*0.5;
        descuento=(cantEntr*200)*0.5;
        alert.innerHTML="Total a Pagar: $"
        alert.innerHTML+= resultado;
    }else{
        resultado=(cantEntr*200)*0.85;
        descuento=(cantEntr*200)*0.15;
        alert.innerHTML="Total a Pagar: $"
        alert.innerHTML+= resultado;
    }
    modal.innerHTML= `
   <p>Nombre: ${comp.nombre}</p>
   <p>Apellido: ${comp.apellido}</p>
   <p>Correo: ${comp.correo}</p>
   <p>Categoria: ${desc}</p>
   <p>Cantidad de entradas: ${comp.cantidad}</p>
   <p>Descuento: ${descuento}</p>
   <p>Total a pagar: ${resultado}</p>
    `
};

const crearNumTicket=()=>{
    return Math.floor(Math.random()*7);
}
const limpiar=()=>{
  let alert= document.querySelector("#totalPagar");
  alert.innerHTML= "Total a Pagar: $";
  
}