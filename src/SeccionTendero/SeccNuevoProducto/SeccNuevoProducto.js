import { Grid } from "@material-ui/core";
import React from "react";
import Appbar from "../../CompoGlobales/Appbar";
import FormularioNuevoProducto from "./FormularioNuevoProducto";

const SeccNuevoProducto = (props) => {
  const { cerrar, tienda } = props;
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item container>
        <Appbar titulo={"Nuevo producto"} cerrar={cerrar} />
      </Grid>

      <Grid item container>
        <FormularioNuevoProducto cerrar={cerrar} tienda={tienda}  />
      </Grid>
    </Grid>
  );
};

export default SeccNuevoProducto;
