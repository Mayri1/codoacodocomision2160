
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
                        <a class="nav-link text-white" href="ConvierteteEnOrador">Conviértete en orador</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" id="verde" href="comprarTickets" onclick="comprarTickets()">Comprar tickets</a>
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
    
    <div class="container-fluid d-flex justify-content-center formularioTickets">
        <div class="row">
             <div class="d-flex formCortos" >
               <div class="col-6 m-2">
                    <input type="text" class="form-control" placeholder="Nombre" aria-label="First name">
               </div>
               <div class="col-6 m-2">
                   <input type="text" class="form-control" placeholder="Apellido" aria-label="Last name">
               </div>
           </div>
               <div class="col-12 m-2 formLargo"  >
                  <input type="email" class="form-control" placeholder="Correo" aria-label="email">
             </div>
    
            <div class="d-flex formCortos">
               <div class="col-6 m-2">
                    <label  class="form-label">Cantidad</label>
                    <input type="number" class="form-control" placeholder="Cantidad" aria-label="number">
                </div>
          
                <div class="col-6 m-2">
                    <label  class="form-label">Categoría</label>
                    <select class="form-select" aria-label="Default select example">
                        <option value="1">Estudiante</option>
                        <option value="2">Trainee</option>
                        <option value="3">Junior</option>
                   </select>
               </div>
           </div>
    
            <div class="form-row">
    
               <div id="totalPagar" class="alert alert-primary col-12 m-2 " role="alert" >Total a Pagar: $</div>
    
               <div class="d-flex ">
                  <div class="btn-tickets m-2">
                      <button class="btn text-white" type="reset">Borrar</button>
                  </div>
                  <div class="btn-tickets m-2">
                      <button class="btn text-white" type="button" id="botonCalcular">Resumen</button>
                  </div>
                  
              </div>
    
          </div>
    
    </div>
    
    </main>    

    
    `;
    document.querySelector("#botonCalcular").addEventListener('click',()=>{
      let inputs = document.querySelectorAll('input');
      let descuento = document.querySelector('#opciones').value;
      console.log(inputs);
      
      let comprador ={
        nombre: inputs[0].value,
        apellido: inputs[1].value,
        correo: inputs[2].value,
        cantidad: input[3].value

      }
      calcularValor(descuento, comprador.cantidad)
    });
}
const calcularValor=(desc, cantEntrada)=>{
  let resultado=0;
  let alert= document.querySelector('#totalPagar');
     if(desc == "estudiantes"){
       
       (cantEntrada*200)*0.2;
       
     alert.innerHTML+= resultado;
     }
    
}