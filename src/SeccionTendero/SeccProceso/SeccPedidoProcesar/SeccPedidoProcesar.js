import { Grid } from "@material-ui/core";
import React from "react";
import Appbar from "./../../../CompoGlobales/Appbar";
import DetallePedido from "./DetallePedido";
import FormularioPorcesarPedido from "./FormularioPorcesarPedido";

const SeccPedidoProcesar = (props) => {
  const { cerrar, pedido, cerrarLocal } = props;
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item container>
        <Appbar cerrar={cerrarLocal} titulo={"Procesar Pedido"} />
      </Grid>

      <Grid item container sx={{ padding: 3 }}>
        <DetallePedido  pedido={pedido} />
      </Grid>

      <Grid item container sx={{ padding: 2 }}>
        <FormularioPorcesarPedido cerrar={cerrar} pedido={pedido} />
      </Grid>
    </Grid>
  );
};

export default SeccPedidoProcesar;
