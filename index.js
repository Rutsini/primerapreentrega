
alert("Le pediremos que ingrese unos datos para poder crear su cuenta");

class Login {
    constructor(){
      this.usuario = usuario
      this.contraseña = contraseña
      this.domicilioComprador = domicilioComprador
    };
  };
  
  const datosLogin = [];
  
  let usuario = prompt ("Ingrese el nombre usuario que quiera para crear su cuenta");
  let contraseña= prompt ("Ingrese una contraseña segura para crear su cuenta");
  let domicilioComprador = prompt ("Necesitaremos su vivienda para llevarle los producto.\nIngresela por favor");
  
  let crearUsuario = prompt ("Ingrese su usuario creado");
  let crearContraseña = prompt ("Ingrese su contraseña creada");
  

  const listaDePrecios = [];

  class Catalogo{
      constructor(id, producto, precio) {
          this.id = id
          this.producto = producto
          this.precio = precio
      }
  };

const producto1 = new Catalogo (1, "Auriculares", 8000)
const producto2 = new Catalogo (2, "Gabinetes", 10000)
const producto3 = new Catalogo (3, "Discos duros", 5000)
const producto4 = new Catalogo (4, "Procesadores", 30000)
const producto5 = new Catalogo (5, "Placas graficas", 60000)
const producto6 = new Catalogo (6, "Teclados", 7000)
const producto7 = new Catalogo (7, "Placas madre", 9000)
const producto8 = new Catalogo (8, "Monitores", 25000)
const producto9 = new Catalogo (9, "Mouses", 3000)
const producto10 = new Catalogo (10, "Memorias RAM", 4000)
const producto11 = new Catalogo (11, "Cable HDMI", 400)
const producto12 = new Catalogo (12, "Coollers", 1000)
const producto13 = new Catalogo (13, "Mouse pads", 2200)
const producto14 = new Catalogo (14, "Antenas WIFI", 400)
const producto15 = new Catalogo (15, "Fuente de potencia", 5300)
const producto16 = new Catalogo (16, "Parlantes", 3800)
const producto17 = new Catalogo (17, "Pasta termica", 200)
const producto18 = new Catalogo (18, "Sillas gamer", 35000)
const producto19 = new Catalogo (19, "Micofonos", 12000)
const producto20 = new Catalogo (20, "Cable VGA", 250)


listaDePrecios.push(producto1);
listaDePrecios.push(producto2);
listaDePrecios.push(producto3);
listaDePrecios.push(producto4);
listaDePrecios.push(producto5);
listaDePrecios.push(producto6);
listaDePrecios.push(producto7);
listaDePrecios.push(producto8);
listaDePrecios.push(producto9);
listaDePrecios.push(producto10);
listaDePrecios.push(producto11);
listaDePrecios.push(producto12);
listaDePrecios.push(producto13);
listaDePrecios.push(producto14);
listaDePrecios.push(producto15);
listaDePrecios.push(producto16);
listaDePrecios.push(producto18);
listaDePrecios.push(producto19);
listaDePrecios.push(producto20);


let precioTotal = 0;

  const carrito = [];
  
  
  while(crearUsuario === usuario && crearContraseña === contraseña){
    eleccionDeProducto()
    break;
  }

  function eleccionDeProducto(){
    let cantidad = parseInt(prompt("¿Cuantos Productos desea comprar?\n(Entre 1 y 20 productos por carrito"));

    while(cantidad < 1 ){
      
        alert ("El valor ingresado es invalido");
        cantidad = parseInt(prompt("¿Cuantos Productos desea comprar?"));
        
    }while(cantidad > 20){
        alert("El valor ingresado es invalido");
        cantidad = parseInt(prompt("¿Cuantos Productos desea comprar?"));
        }
    
        alert("Ingrese los productos que quiera comprar");
        do{
            let mensaje = ""
    
            for(elemento of listaDePrecios){
             mensaje+=elemento.id + "-" + elemento.producto + " a $ " + elemento.precio + "\n"
            }
    
            let respuesta = prompt(mensaje);
    
            let indentificarProducto = listaDePrecios.find ( elem => elem.id || elem.producto === respuesta);
            
            precioTotal += indentificarProducto.precio
          
            carrito.push(respuesta.toUpperCase());
            console.log(carrito.lenght);
            
          }while(carrito.length != cantidad);
          
          const carritoCompleto = carrito.concat(["Precio a pagar: " + "$ " + precioTotal]);
            alert(carritoCompleto.join("\n"));
            
            pago();
    }

    function pago (){   
        
    let formaDePago = prompt ("¿Como realizara el pago? \n Ingrese el numero de la operación" + "\n1-Efectivo\n2-Trajeta de credito");
    switch(formaDePago){
        case "1" :
          alert("En unos minutos llegaran los productos a " + domicilioComprador + " y debera pagar al repartidor $" + precioTotal);
          alert("Gracias por visitar nuestra pagina, espero disfrute los productos");
          break;
        case "2" :
          ingreso()
          alert("Luego de que recibamos el pago, le mandaremos al repartidor a " + domicilioComprador);
          break;
      };

  };
 

    function ingreso (si){
        alert("Para pagar ofrecemos 6 o 12 cuotas sin interes o 18 cuotas con 15% de interes");
        si = prompt("¿Quieres calcular el monto por cuotas? \nsi\nno");
        if (si == "si"){
            alert("El valor total a pagar es " + "$ " + precioTotal);
            cuotas = parseInt(prompt("Ingresa el numero de cuotas \n6 cuotas\n12 cuotas\n18 cuotas con un 15 % de interes"));
            calcularCuotas(precioTotal, cuotas) ;
        }else {
            pago();
        }
        
    };
    
    function calcularCuotas(precioTotal, cuotas, resultado) {
        switch (cuotas){
            case 6:
                resultado = precioTotal/cuotas;
                break;
            case 12:
                resultado = precioTotal/cuotas;
                break;
            case 18:
                resultado = (precioTotal/cuotas) * 1.15;
                break;
            default:
                alert("Los valores ingresados no son correctos");
                break;
        }
        alert("El precio por cuotas que debe abonar es de " + " " + resultado);
        alert("Gracias por visitar nuestra pagina, espero disfrute los productos");
    };
    



  
  
    










