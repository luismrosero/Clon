import { Grid } from "@material-ui/core";
import { React, useContext } from "react";
import BotonAtrasArriba from "./../../../CompoGlobales/BotonAtrasArriba";
import { CFormProducto } from "./../FormularioNuevoProducto";
import BotonCarga from "../../../CompoGlobales/BotonCarga";
import EdtAutocompletado from "./../../../CompoGlobales/EdtAutocompletado";


const ImagenesCategoria = () => {
  const cData = useContext(CFormProducto);
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item>
        <BotonAtrasArriba click={cData.atras} />
      </Grid>

      <Grid item container sx={{ marginTop: 2 }}>
        <EdtAutocompletado
          titulo={"Categoria"}
          lista={cData.tienda.categorias}
          valor={cData.categoria}
          setValor={cData.setCategoria}
        />
      </Grid>

      <Grid item container sx={{ justifyContent: "center", marginTop: 2 }}>
        <BotonCarga
          titulo={"Subir producto"}
          click={cData.terminar}
          cargo={cData.cargo}
          cargando={cData.cargando}
        />
      </Grid>
    </Grid>
  );
};

export default ImagenesCategoria;
