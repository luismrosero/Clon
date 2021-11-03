export function TiendaCrea(nombre, descripcion, direccion, telefono, color, acento, logo, historias, face, insta,
                           nequi, numPagos, valEnvio, empresas, nomEmpresa, vendedores, categorias) {


  let nom = nombre.replaceAll(" ","");
  let id = nom.toLowerCase();


  let array = []
  for (let i = 0; i < historias.length; i++){
    let his = {
      src: historias[i],
    }

    array.push(his)
  }

  let tie = {

  id:   id, //
  descripcion:    descripcion, //
  direccion:   direccion, //
  historias:  array, //
  logo:   logo, //
  nombre: nombre, //
  paleta:  {  //
    sombra: "1px 1px 7px 0.5px "  + acento,
    gradient: "linear-gradient(45deg, " + acento + " 30%, " + color +" 90%)",
    acento: acento,
      primario: color,
  },
  telefonos: telefono, //
  redes: [ //
    { nombre: "facebook", url: face },
    { nombre: "instagram", url: insta },

  ],
  categorias:  categorias, //
  mediosPago:  ["Nequi"], //
  mediosEnvio: empresas, //
  vendedores:   vendedores,
  key:  "gfadsgdfkglñk", // key publica de epayco //
  numPagos: numPagos, // numero wass que recibe el pado //
  nequi:  nequi, // numero cuenta nequi //
  envio: parseInt(valEnvio),  //valor de envio de todos los pedidos //

  }

  return tie;


}


{/*
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



*/}