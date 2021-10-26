export function PedidoDoc(doc) {

 console.log("propiedad id " + doc.data().id);
  const getFecha = (data) => {
    var fecha = data.toDate();
    var meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    return (
      fecha.getDate() +
      " - " +
      meses[fecha.getMonth()] +
      " - " +
      fecha.getFullYear()
    );
  };



  this.id = doc.data().id;
  this.valTotal = doc.data().valTotal;
  this.valPedido = doc.data().valPedido;
  this.pedidos = doc.data().pedidos;
  this.nombre = doc.data().nombre;
  this.telefono = doc.data().telefono;
  this.barrio = doc.data().barrio;
  this.direccion = doc.data().direccion;
  this.ciudad = doc.data().ciudad;
  this.departamento = doc.data().departamento;
  this.fechaCreacion = getFecha(doc.data().fechaCreacion);
  this.idTienda = doc.data().idTienda;
  this.cuenta = doc.data().cuenta;
  this.tipoPago = doc.data().tipoPago;
  this.estado = doc.data().estado;
  this.referencia = doc.data().referencia;
  this.numPagos = doc.data().numPagos;
  this.tranportadora = doc.data().tranportadora;
  this.guia = doc.data().guia;


  return this;
}
