import React from "react";
import { Grid, Typography } from "@material-ui/core";
import IconoLogo from "./Iconos/IconoLogo";

const InfoStarfySencilla = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-end"
      sx={{ paddingX: 1,paddingY: 0.5, backgroundColor: "#000000", paddingTop: 0 }}
    >
      <Typography sx={{ color: "#fff", fontSize: 16, fontWeight: 400, marginRight: 1, marginBottom: 1 }}>
        Power By
      </Typography>
      <IconoLogo />
    </Grid>
  );
};

export default InfoStarfySencilla;
