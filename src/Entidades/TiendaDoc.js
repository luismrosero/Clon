export function TiendaDoc(doc) {


  this.id = doc.data().id;
  this.descripcion = doc.data().descripcion;
  this.direccion = doc.data().direccion;
  this.historias = doc.data().historias;
  this.logo = doc.data().logo;
  this.nombre = doc.data().nombre;
  this.paleta = doc.data().paleta;
  this.telefonos = doc.data().telefonos;
  this.redes = doc.data().redes;
  this.categorias = doc.data().categorias;
  this.mediosPago = doc.data().mediosPago;
  this.mediosEnvio = doc.data().mediosEnvio;
  this.vendedores = doc.data().vendedores;
  this.key = doc.data().key;
  this.envio = doc.data().envio;
  this.numPagos = doc.data().numPagos;
  this.nequi = doc.data().nequi;


  return this;
}
