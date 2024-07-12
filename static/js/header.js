class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      this.innerHTML = `
     <header class="header">
            <div class="container">
                <div class="row align-items-center justify-content-between">
                    <div class="logo">
                    <img id="logo-pagina" src="`+BASE_PATH+`static/imagenes/codoacodo.png" width="100" alt="Frontend-Museum">
                    <a href="#">Ferretería</a>
                    </div>
                    <button type="button" class="nav-toggler">
                    <span></span>
                    </button>
                    <nav class="nav">
                    <ul>
                        <li><a href="`+BASE_PATH+`index.html" class="active">Inicio</a></li>
                        <li><a href="`+BASE_PATH+`paginas/listado.html">Listado</a></li>
                        <li><a href="`+BASE_PATH+`paginas/altas.html">Altas</a></li>
                        <li><a href="`+BASE_PATH+`paginas/modificaciones.html">Modificaciones</a></li>
                        <li><a href="`+BASE_PATH+`paginas/listadoEliminar.html">Eliminaciones</a></li>
                    </ul>
                    </nav>
                </div>
            </div>
            <script src="static/js/script.js"></script>
            <div id="progressBar"></div>
        </header>

      `;
    }
  }
  customElements.define('header-component', Header);