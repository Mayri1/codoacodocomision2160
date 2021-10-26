let mediaqueryList= window.matchMedia("(max-width:700px)");
let menu= document.getElementById("menu"); 


if(mediaqueryList.matches){
    menu.innerHTML=`
    <header>
    <div class="container-fuid">
      <div class="row ">
         <nav class="navbar navbar-dark navbar-expand-lg" id="menu" >
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

`
};

