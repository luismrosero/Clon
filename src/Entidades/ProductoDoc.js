export function ProductoDoc(doc) {





  this.id = doc.data().id;
  this.antes = doc.data().antes;
  this.atributos = doc.data().atributos;
  this.idTienda = doc.data().idTienda;
  this.imgs = doc.data().imgs;
  this.nombre = doc.data().nombre;
  this.precio = doc.data().precio;
  this.descripcion = doc.data().descripcion;
  this.complemento = doc.data().complemento;
  this.tipoTalla = doc.data().tipoTalla;
  



  return this;
}
