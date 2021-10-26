import { Grid, Avatar, Typography } from "@material-ui/core";
import React from "react";

const Ascesor = (props) => {
  const { vendedor } = props;
  return (
    <Grid
    container
    direction="row"
    justifyContent="flex-start"
    alignItems="center"
  >
      <Grid>
        <Avatar src={vendedor.img} sx={{ height: 50, width: 50 }} />
      </Grid>
      <Grid>
        <Typography sx={{ marginLeft: 2, color: "#fff", fontSize: 16, fontWeight: 500 }}>{vendedor.nombre}</Typography>
      </Grid>
    </Grid>
  );
};

export default Ascesor;
