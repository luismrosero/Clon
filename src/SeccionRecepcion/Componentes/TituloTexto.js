import React from "react";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const TituloTexto = (props) => {
  const { titulo, contenido } = props;
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Grid item container>
        <Typography sx={{color: "#fff", fontSize: 14, fontWeight: 600}} > {titulo} </Typography>
      </Grid>

      <Grid item container>
        <Typography sx={{color: "#fff", fontSize: 12, fontWeight: 300, fontStyle: "italic", marginTop: 1 }}  > {contenido} </Typography>
      </Grid>
    </Grid>
  );
};

export default TituloTexto;
