import { React, useState, useEffect } from "react";
import { Typography, Grid, Box } from "@material-ui/core";

const ItemProducto = (props) => {
  const { articulo } = props;

  const getItem = (item) => {
    if (item.substring(0, 1) === "#") {
      return (
        <Box
          sx={{ width: 20, height: 20, borderRadius: 4, marginTop: 0.2 }}
          backgroundColor={item}
        />
      );
    } else {
      return <Typography>{item}</Typography>;
    }
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ marginTop: 1, borderBottom: 1 }}
    >
      <Grid item xs={1}>
        <Typography>{articulo.cantidad}</Typography>
      </Grid>

      <Grid item xs={11}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item container>
            <Typography>{articulo.nombre}</Typography>
          </Grid>

          {articulo.atributos.map((atributo) => {
            return (
              <Grid item container>
                <Grid item>
                  <Typography sx={{ fontWeight: 600, marginRight: 2 }}>
                    {atributo.nombre}
                  </Typography>
                </Grid>

                <Grid item>{getItem(atributo.item)}</Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ItemProducto;
