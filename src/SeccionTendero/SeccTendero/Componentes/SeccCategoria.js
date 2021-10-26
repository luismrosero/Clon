import React from "react";
import { Grid, Typography } from "@material-ui/core";
import CardCategoria from "./CardCategoria";

const SeccCategoria = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item container >
      <Typography sx={{ color: "#fff", marginBottom: 4 }}>
        Categorías Productos
      </Typography>
      </Grid>
      <Grid item xs={6} sx={{ padding: 1 }}>
        <CardCategoria titulo={"nom Categoria"} />
      </Grid>
      <Grid item xs={6} sx={{ padding: 1 }}>
        <CardCategoria titulo={"nom Categoria"} />
      </Grid>
    </Grid>
  );
};

export default SeccCategoria;
