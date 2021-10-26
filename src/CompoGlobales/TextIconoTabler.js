import React from "react";
import { Grid, Typography } from "@material-ui/core";

const TextIconoTabler = (props) => {
  const { titulo, stroke, size, color, Icono } = props;
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Grid item xs={1} >
      <Icono stroke={stroke} size={size} color={color} />
      </Grid>
      <Grid item xs={11} >
      <Typography sx={{color: "#fff", marginLeft: 1.5, fontSize: 14 }} >{titulo}</Typography>
      </Grid>
    </Grid>
  );
};

export default TextIconoTabler;
