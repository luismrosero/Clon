

export function CarritoCrea(
    valTotal = null,
    nombre = null,
    telefono = null,
    barrio = null,
    direccion = null,
    ciudad = null,
    departamento = null,
    pedidos= null,
    valPedido = null,
    idTienda = null,
    numPagos= null,
    cuenta = null,
   
 


) {

  var array = new Array();
  for(var i = 0; i < pedidos.length; i++){
    var pedido = pedidos[i];
    var arrayAtri = new Array();


    for (var j = 0; j < pedido.atributos.length; j++){
      var atributo = pedido.atributos[j];
      var atri = {
        nombre: atributo.nombre,
        item: atributo.item,
      }
      arrayAtri.push(atri);
    }



    var ped = {
        id: pedido.id,
        nombre: pedido.nombre,
        idProducto: pedido.idProducto,
        precio: pedido.precio,
        cantidad: pedido.cantidad,
        atributos: arrayAtri,
        img: pedido.img,
       
       
    }
    array.push(ped);
  }

  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

  
  var pedido = {
    id: String(new Date().getTime() + makeid(2) ),
    valTotal: valTotal,
     pedidos: array,
    nombre: nombre,
    telefono: telefono,
    barrio: barrio,
    direccion: direccion,
    ciudad: ciudad,
    departamento: departamento,
    fechaCreacion: new Date(),  
    valPedido: valPedido,
    idTienda: idTienda,
    cuenta: cuenta,
    numPagos: numPagos,
    // verificar funcionamiento
    referencia: null,
    tipoPago: null,
    estado: null,
  
  };
  return pedido;
}
