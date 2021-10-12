let mediaqueryList= window.matchMedia("(max-width:700px)");
let menu= document.getElementById("menu"); 


if(mediaqueryList.matches){
    menu.innerHTML=`
    <nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
        <img src="../Integrador1/img/codoacodo.png" alt="" style="height: 35px;">
      <a class="navbar-brand" href="#">Conf Bs As</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Conf Bs As</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">La conferencia</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Los oradores</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">El lugar y la fecha</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Conviertete en orador</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Comprar ticket</a>
            </li> 
          </ul>
        
        </div>
      </div>
    </div>
  </nav>

`
};

