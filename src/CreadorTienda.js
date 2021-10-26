import React from "react";
import { Button } from "@material-ui/core";
import fire from "./fire";
import { TIENDAS } from "./Constantes";

const CreadorTienda = () => {
  var tie = {
    id: "bodegasmodatenis", //
    descripcion: "La mejor bodega de zapatos en Colombia", //
    direccion: "Cenntro comercial DUBAY Cl. 16 # 5-41 Cali", //
    historias: [{src: "uno"}, {src: "dos"}], //
    logo: "urllogo", //
    nombre: "Bodega Moda Tenis", //
    paleta: {
      //
      sombra: "1px 1px 7px 0.5px #EF9FDC",
      gradient: "linear-gradient(45deg, #EB9AD8 30%, #B4ACDF 90%)",
      acento: "#EF9FDC",
      primario: "#B4ACDF",
    },
    telefonos: "3174531354", //
    redes: [
      //
      { nombre: "facebook", url: "https://www.facebook.com/bodegamoda" },
      {
        nombre: "instagram",
        url: "https://www.instagram.com/bodegamodatenis/",
      },
    ],
    categorias: [], //
    mediosPago: ["ePayco", "Nequi"], //
    mediosEnvio: ["Servientrega", "Interrapidisimo", "Coordinadora"], //
    vendedores: [
      //
      { img: "none", nombre: "Patrick", wass: "3174531354" },
      { img: "none", nombre: "Alex", wass: "3219730865" },
    ],
    key: "27626164e7fb481ffb7021e5ac753286", // key publica de epayco //
    numPagos: "3174531354", // numero wass que recibe el pado //
    nequi: "3174531354", // numero cuenta nequi //
    envio: 13000, //valor de envio de todos los pedidos //
  };

  const subir = () => {
    fire
      .firestore()
      .collection(TIENDAS)
      .doc(tie.id)
      .set(tie)
      .then((dox) => {
        alert("subio");
      });
  };

  return (
    <Button variant="contained" onClick={() => subir()}>
      Crear Tienda
    </Button>
  );
};

export default CreadorTienda;
