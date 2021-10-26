import { React, useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import CardPedido from "./Componentes/CardPedido";
import IconoAtras from './Icono/IconoAtras';

const SeccProceso = (props) => {
  const { pedidos, cerrar } = props;

  useEffect(() => {}, []);
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ minWidth: window.innerWidth }}
    >
      <Grid item container sx={{padding: 2}} >
        <IconoAtras cerrar={cerrar} />
        <Typography sx={{ fontSize: 16, fontWeight: 600, marginLeft: 6 }}>
          Pedidos Para Procesar
        </Typography>
      </Grid>

      <Grid item container>
        {pedidos.map((pedido) => {
          return (
            <Grid item xs={12} sx={{ padding: 1 }}>
              <CardPedido pedido={pedido} cerrar={cerrar} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default SeccProceso;
