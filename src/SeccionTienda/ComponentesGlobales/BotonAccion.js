import React from "react";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const BotonAccion = (props) => {
  const { titulo, click, tienda } = props;


  const estilo = {
    background: tienda.paleta.gradient,
    boxShadow: tienda.paleta.sombra,
  };

  return (
    <Grid
      item
      sx={{ borderRadius: 6, paddingX: 3, paddingY: 1 }}
      onClick={(e) => click(e)}
      style={estilo}
    >
      <Typography sx={{ fontSize: 18, fontWeight: 600 }}>{titulo}</Typography>
    </Grid>
  );
};

export default BotonAccion;
