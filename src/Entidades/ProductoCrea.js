export function ProductoCrea(
  imagenes,
  nombre,
  descripcion,
  precioAntes,
  precioActual,
  categoria,
  idTienda,
  colores,
  tallas,
  tipoTalla
) {
  var id = new Date().getTime() + "P";

  var atri = [];

  if (colores != "") {
    atri.push(colores);
  }

  if (tallas != "") {
    atri.push(tallas);
  }



  var ped = {
    id: id,
    antes: precioAntes,
    atributos: atri,
    idTienda: idTienda,
    imgs: imagenes,
    nombre: nombre,
    precio: precioActual,
    descripcion: descripcion,
    categoria: categoria,
    tipoTalla: tipoTalla
  };

  return ped;
}
