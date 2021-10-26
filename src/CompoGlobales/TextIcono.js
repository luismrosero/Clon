import React from "react";
import { Grid, Typography } from "@material-ui/core";

const TextIcono = (props) => {
  const { titulo, Icono } = props;
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={{ backgroundColor: "#fff",}}
    >
     <Icono/>

     <Typography>{titulo}</Typography>
    </Grid>
  );
};

export default TextIcono;
