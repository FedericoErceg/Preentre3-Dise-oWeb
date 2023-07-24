const titulo = document.getElementById("tituloEmpresa");
let imgLogo = document.getElementById("logoEmpresa");
let agrandado = document.getElementById("agrandar");
let reduccion = document.getElementById("reducir");
let tamañoActualTitulo = 40;
//carga de los productos al JS 
const listaProductos = [];
class productos {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = 0;
  }
}
const tortaDeChocolate = new productos("Torta de Chocolate", 1300);
const pastaFrola = new productos("Pasta Frola", 800);
const cajaCaramelos = new productos(`Caja de Caramelos`, 600);
const pepitas = new productos("Pepitas", 200);
const chocotorta = new productos("Chocotorta", 1500);
const flan = new productos("Flan", 600);
listaProductos.push(tortaDeChocolate);
listaProductos.push(pastaFrola);
listaProductos.push(cajaCaramelos);
listaProductos.push(pepitas);
listaProductos.push(chocotorta);
listaProductos.push(flan);

listaProductos.sort((a, b) => a.precio - b.precio);
//guardamos el array en la local storage para despues utilizar 
localStorage.setItem("productos", JSON.stringify(listaProductos));
console.log(JSON.parse(localStorage.getItem("productos")));

//buscador
let barraBusqueda = document.getElementById("barraDeBusqueda"); // recordar este es el input del HTML
let menuDesplegable = document.getElementById("menuDesplegable");
function buscadorInput() {
  let buscador = barraBusqueda.value.toLowerCase();
  let resultadoBusqueda = listaProductos.filter((prod) =>
    prod.nombre.toLowerCase().includes(buscador)
  );

  menuDesplegable.innerHTML = "";
  resultadoBusqueda.forEach((prod) => {
    const li = document.createElement("li");
    li.textContent = prod.nombre;
    menuDesplegable.style.color = "black";
    menuDesplegable.appendChild(li);
  });

  //condicional para mostrar o ocultar el menu, por eso estoy usando el "block" y el "none", con la forma de escribir de la clase 12
  menuDesplegable.style.display =
    resultadoBusqueda.length > 0 && buscador !== "" ? "block" : "none";

  document.addEventListener("click", (event) => {
    if (
      !menuDesplegable.contains(event.target) &&
      event.target !== barraBusqueda
    ) {
      menuDesplegable.style.display = "none";
    }
  });
}
barraBusqueda.addEventListener("input", buscadorInput);
// creacion del ecomerce
function Ecomerce(){
  let mostrarCarrito = document.getElementById("carritoItems");
  let carritoProductos = JSON.parse(localStorage.getItem("productos")) || [];
  function MostrarCarrito1() {
    mostrarCarrito.innerHTML = "";
    carritoProductos.forEach((prod) => {
      let indexH5 = document.createElement("div")
      indexH5.innerHTML = `<h5>${prod.nombre}</h5>
                            <h6>Cantidad: ${prod.cantidad}</h6>
                            <h6> precio Total: $ ${prod.precio * prod.cantidad}</h6>`;
      mostrarCarrito.append(indexH5);
    })
  }
  // Torta de chocolate
  function carritoTorta() {
    const sumarCarritoTorta = document.getElementById("btnCarritoSuma1");
    const restarCarritoTorta = document.getElementById("btnCarritoResta1");
    
    sumarCarritoTorta.addEventListener('click', () => {
      const tortaChocolate = carritoProductos.find((prod) => {
        return prod.nombre === "Torta de Chocolate"
      })

      if(tortaChocolate){
        tortaChocolate.cantidad += 1;
        localStorage.setItem("productos", JSON.stringify(carritoProductos));
        MostrarCarrito1();
      }
    })
    restarCarritoTorta.addEventListener('click', () => {
      const tortaChocolate = carritoProductos.find((prod) => {
        return prod.nombre === "Torta de Chocolate"
      })
  
      if(tortaChocolate && tortaChocolate.cantidad > 0){
        tortaChocolate.cantidad -= 1;
        localStorage.setItem("productos", JSON.stringify(carritoProductos));
        MostrarCarrito1();
      }
    })
  }
  // pasta frola
  function carritoPastaFrola() {
    const sumarCarritoFrola = document.getElementById('btnCarritoSuma2');
    const restarCarritoFrola = document.getElementById('btnCarritoResta2');
  
    sumarCarritoFrola.addEventListener('click', () => {
      const frola = carritoProductos.find((prod) => {
        return prod.nombre === "Pasta Frola"
      })
  
      if(frola){
        frola.cantidad += 1;
        localStorage.setItem("productos", JSON.stringify(carritoProductos));
        MostrarCarrito1();
      }
    })
    restarCarritoFrola.addEventListener('click', () => {
      const frola = carritoProductos.find((prod) => {
        return prod.nombre === "Pasta Frola"
      })
  
      if(frola && frola.cantidad > 0){
        frola.cantidad -= 1;
        localStorage.setItem("productos", JSON.stringify(carritoProductos));
        MostrarCarrito1();
      }
    })
  }
  // caja de caramelos
  function carritoCajaCaramelos(){
    const sumarCarritoCaramelos = document.getElementById('btnCarritoSuma3');
    const restarCarritoCaramelos = document.getElementById('btnCarritoResta3');
  
    sumarCarritoCaramelos.addEventListener('click', () => {
      const caramelos = carritoProductos.find((prod) => {
        return prod.nombre === "Caja de Caramelos"
      })
      if(caramelos){
        caramelos.cantidad += 1;
        localStorage.setItem("productos", JSON.stringify(carritoProductos))
        MostrarCarrito1()
      }
    })
    restarCarritoCaramelos.addEventListener('click', () => {
      const caramelos = carritoProductos.find((prod) => {
        return prod.nombre === "Caja de Caramelos"
      })
      if(caramelos && caramelos.cantidad > 0){
        caramelos.cantidad -= 1;
        localStorage.setItem("productos", JSON.stringify(carritoProductos));
        MostrarCarrito1()
      }
    })
  }
  // Pepitas
  function Pepitas(){
    const sumarCarritoPepitas = document.getElementById("btnCarritoSuma4");
    const restarCarritoPepitas = document.getElementById("btnCarritoResta4");
  
    sumarCarritoPepitas.addEventListener('click', () => {
      const pepitas = carritoProductos.find((prod) => {
        return prod.nombre === "Pepitas"
      });
      if(pepitas){
        pepitas.cantidad += 1;
        localStorage.setItem("productos", JSON.stringify(carritoProductos));
        MostrarCarrito1()
      }
    })
    restarCarritoPepitas.addEventListener('click', () => {
      const pepitas = carritoProductos.find((prod) => {
        return prod.nombre === "Pepitas"
      })
      if(pepitas && pepitas.cantidad > 0){
        pepitas.cantidad -= 1;
        localStorage.setItem("productos", JSON.stringify(carritoProductos));
        MostrarCarrito1();
      }
    })
  }
  // Chocotorta
  function Chocotorta(){
    const sumarCarritoChoco = document.getElementById("btnCarritoSuma5");
    const restarCarritoChoco = document.getElementById("btnCarritoResta5");
  
    sumarCarritoChoco.addEventListener('click', () => {
      const choco = carritoProductos.find((prod) => {
        return prod.nombre === "Chocotorta"
      })
      if(choco){
        choco.cantidad += 1;
        localStorage.setItem("productos", JSON.stringify(carritoProductos));
        MostrarCarrito1();
      }
    })
    restarCarritoChoco.addEventListener('click', () => {
      const choco = carritoProductos.find((prod) => {
        return prod.nombre === "Chocotorta"
      })
      if(choco && choco.cantidad > 0){
        choco.cantidad -= 1;
        localStorage.setItem("productos", JSON.stringify(carritoProductos));
        MostrarCarrito1();
      }
    })
  }
  // Flan
  function flannn(){
    const sumarCarritoFlan = document.getElementById("btnCarritoSuma6");
    const restarCarritoFlan = document.getElementById("btnCarritoResta6");
  
    sumarCarritoFlan.addEventListener('click', () => {
      const flann = carritoProductos.find((prod) => {
        return prod.nombre === "Flan"
      })
      if(flann){
        flann.cantidad += 1;
        localStorage.getItem("productos", JSON.stringify(carritoProductos));
        MostrarCarrito1();
      }
    })
    restarCarritoFlan.addEventListener('click', () => {
      const flann = carritoProductos.find((prod) => {
        return prod.nombre === "Flan"
      })
      if(flann && flann.cantidad > 0){
        flann.cantidad -= 1;
        localStorage.setItem("productos", JSON.stringify(carritoProductos));
        MostrarCarrito1();
      }
    })
  }
  
  flannn()  //tiene tres "nnn" porque, al tener el mismo escrito que flan se generaba una especie de confucion en el navegador y no se ejecutaba la funcion :( 
  Chocotorta()
  Pepitas()
  carritoCajaCaramelos()
  carritoPastaFrola()
  carritoTorta()

}
Ecomerce();
//cosas esteticas para jugar
function modificacionesEsteticas() {
  function cambiarColor() {
    //En esta funcion estamos aplicando cambios directamente en el titulo H1
    titulo.classList.toggle("activa");  // aca solo queria demostrar que se usar la funcion de .toggle
  }
  titulo.onclick = () => {
    cambiarColor();
  };
  //modificacion del tamaño del titulo.
  agrandado.onclick = () => {
    tamañoActualTitulo++;
    titulo.style.fontSize = `${tamañoActualTitulo}px`;
  };
  reduccion.onclick = () => {
    tamañoActualTitulo--;
    titulo.style.fontSize = `${tamañoActualTitulo}px`;
  };
}

modificacionesEsteticas();
