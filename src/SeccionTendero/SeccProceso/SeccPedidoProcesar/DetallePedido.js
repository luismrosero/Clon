import { Grid, Typography } from "@material-ui/core";
import React from "react";
import TextTituloContenido from "../../../CompoGlobales/TextTituloContenido";
import ItemProducto from "./ItemProducto";

const DetallePedido = (props) => {
  const { pedido } = props;
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item container>
        <Typography> {pedido.id} </Typography>
      </Grid>

      <Grid item container>
        <Typography>{pedido.fechaCreacion}</Typography>
      </Grid>

      {pedido.pedidos.map((articulo) => {
        return <ItemProducto articulo={articulo} />;
      })}


      <Grid item container sx={{marginTop: 2}}  >
        <TextTituloContenido titulo={"Cliente:"} contenido={pedido.nombre} />
      </Grid>

      <Grid item container  >
        <TextTituloContenido titulo={"Celulares:"} contenido={pedido.telefono} />
      </Grid>

      <Grid item container  >
        <TextTituloContenido titulo={"Direccion:"} contenido={pedido.direccion} />
      </Grid>

      
      <Grid item container  >
        <TextTituloContenido titulo={"Barrio:"} contenido={pedido.barrio} />
      </Grid>

      <Grid item container  >
        <TextTituloContenido titulo={"Ciudad:"} contenido={pedido.ciudad} />
      </Grid>

      <Grid item container  >
        <TextTituloContenido titulo={"Departamento:"} contenido={pedido.departamento} />
      </Grid>
    </Grid>
  );
};

export default DetallePedido;
