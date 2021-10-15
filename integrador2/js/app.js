let seccion = document.getElementById("section");
// seccion.style.visibility="hidden"
const comprarTickets=()=>{
    seccion.innerHTML=`
        <div class="container">
            <div class="row">
                <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
                    <div class="card-group">
                        <div class="card">
                            <div class="card-body border border-primary mr-1">
                                    <h5 class="card-title text-center">Estudiante</h5> 
                                    <p class="card-text text-center">Tienen un decuento</p>                           
                                    <p class="card-title text-center font-weight-bold">80%</p>                           
                                    <p class="card-text text-center"><small class="text-muted">* presentar documentación</small></p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body border border-primary mr-1">
                                    <h5 class="card-title text-center">Estudiante</h5> 
                                    <p class="card-text text-center">Tienen un decuento</p>                           
                                    <p class="card-title text-center font-weight-bold">80%</p>                           
                                    <p class="card-text text-center"><small class="text-muted">* presentar documentación</small></p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body border border-primary mr-1">
                                    <h5 class="card-title text-center">Estudiante</h5> 
                                    <p class="card-text text-center">Tienen un decuento</p>                           
                                    <p class="card-title text-center font-weight-bold">80%</p>                           
                                    <p class="card-text text-center"><small class="text-muted">* presentar documentación</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col text-uppercase text-center">
                    <small>Venta</small>
                    <h2>Valor de tcket $200</h2>
                </div>
            </div>
            <div class="row">
                <div class="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
                    <form>
                        <div class="form-row">
                        <div class="d-flex">
                            <div class="form-group col-6 col-md-6">
                                <input type="text" class="form-control" placeholder="Nombre">
                            </div>
                            <div class="form-group col-6 col-md-6">
                                <input type="text" class="form-control" placeholder="Apellido">
                            </div>
                            </div>
                            <div class="form-group col-12 col-md-12">
                                <input type="email" class="form-control" placeholder="Correo">
                            </div>
                            <div class="d-flex">
                            <div class="form-group col-12 col-md-6">
                                <label for="">Cantidad</label>
                                <input id="cantidadEntrada" type="text" class="form-control" placeholder="Cantidad">
                            </div>
                            <div class="form-group col-12 col-md-6">
                                <label for="">Categoria</label>
                                <select class="form-select" id="inputState">
                                    <option value="estudiante" selected>Estudiante</option>
                                    <option value="trainee">Trainee</option>
                                    <option value="junior">Junior</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col">
                                <div id="totalCompra" class="alert alert-primary" role="alert">
                                    Total a pagar: $
                                </div>
                            </div>
                        </div>
                        <div class="form-row d-flex">
                            <div class="form-group col">
                                <button type="reset" class="btn btn-codo btn-block">Borrar</button>
                            </div>
                            <div class="form-group col">
                                <button type="button" id="botonCalcular" class="btn btn-codo btn-block">Resumen</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;
};