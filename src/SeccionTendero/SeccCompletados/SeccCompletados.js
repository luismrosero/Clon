import React from "react";
import { Grid, Typography } from "@material-ui/core";

import CardPedidoCompletado from "./Componentes/CardPedidoCompletado";
import IconoAtras from "./Iconos/IconoAtras";

const SeccCompletados = (props) => {
  const { pedidos, cerrar } = props;
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ minWidth: window.innerWidth }}
    >
      <Grid item container sx={{ padding: 2 }}>
        <IconoAtras cerrar={cerrar} />
        <Typography sx={{ fontSize: 16, fontWeight: 600, marginLeft: 6 }}>
          Pedidos Completados
        </Typography>
      </Grid>

      <Grid item container>
        {pedidos.map((pedido) => {
          return (
            <Grid item xs={12} sx={{ padding: 1 }}>
              <CardPedidoCompletado pedido={pedido} cerrar={cerrar} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default SeccCompletados;
