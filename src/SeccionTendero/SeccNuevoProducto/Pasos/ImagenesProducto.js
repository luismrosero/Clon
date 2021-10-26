import { Grid } from "@material-ui/core";
import { React, useContext } from "react";
import BotonAtrasArriba from "./../../../CompoGlobales/BotonAtrasArriba";
import EscogedorImagenMultiple from "./../../../CompoGlobales/EscogedorImagenMultiple";
import { CFormProducto } from "./../FormularioNuevoProducto";
import BotonAccion from "./../../../CompoGlobales/BotonAccion";

const ImagenesProducto = () => {
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

      <Grid item container>
        <EscogedorImagenMultiple
          valor={cData.imagenes}
          setValor={cData.setImagenes}
          carpeta={"productos"}
        />
      </Grid>

      <Grid item container sx={{ justifyContent: "center", marginTop: 2 }}>
        <BotonAccion titulo={"siguiente"} click={cData.siguiente} />
      </Grid>
    </Grid>
  );
};

export default ImagenesProducto;
