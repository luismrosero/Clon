import React from "react";
import { Grid, Typography } from "@material-ui/core";

const IconText = (props) => {
  const { Icono, titulo, contenido } = props;
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Icono />

      <Typography sx={{marginLeft: 2, fontWeight: 600, fontSize: 14}} >{titulo}</Typography>

      <Typography sx={{marginLeft: 2, fontWeight: 300, fontSize: 14, fontStyle: "italic"}}  >{contenido}</Typography>
    </Grid>
  );
};

export default IconText;
