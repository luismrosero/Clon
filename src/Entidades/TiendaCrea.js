export function TiendaCrea(doc) {

  var tie = {

  id:   "id", //
  descripcion:    "descripcion", //
  direccion:   "direccion", //
  historias:  ["urluno", "urldos"], //
  logo:   "urllogo", //
  nombre: "nombre", //
  paleta:  {  //
    sombra: "1px 1px 7px 0.5px #FFA113",
    gradient: "linear-gradient(45deg, #FFA113 30%, #FF5659 90%)",
    acento: "#FFA113",
    primario: "#FF6B35",
  },
  telefonos: "3004526879", //
  redes: [ //
    { nombre: "facebook", url: "https://www.facebook.com/adapp.adapp" },
    { nombre: "instagram", url: "https//h:" },
    { nombre: "twiter", url: "https//io:" },
  ],
  categorias:  ["cat uno", "cat dos"], //
  mediosPago:  ["ePayco", "Nequi", "Daviplata", "Contraentrega"], //
  mediosEnvio: ["Servientrega", "Envia", "UPL"], //
  vendedores:   [ //
    { img: "none", nombre: "Juan Gonzales", wass: "3004627579" },
    { img: "none", nombre: "Alicia Calpa", wass: "3004627579" },
  ],
  key:  "gfadsgdfkglñk,dlñfg", // key publica de epayco //
  numPagos: "30046278", // numero wass que recibe el pado //
  nequi:  "345186413", // numero cuenta nequi //
  envio: 10000,  //valor de envio de todos los pedidos //

  }


  return this;
}
