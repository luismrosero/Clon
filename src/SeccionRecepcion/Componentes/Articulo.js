import { React, useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const Articulo = (props) => {
  const {articulo} = props;
  const [precio,setPrecio] = useState("")

  
  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  useEffect(() =>{
    setPrecio(articulo.cantidad * articulo.precio)
  },[articulo])
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{marginTop: 1}}
    >
      <Grid item lg={8} >
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Typography sx={{ color: "#fff", fontSize: 14, marginRight: 1 }}>
            {articulo.cantidad}
          </Typography>
          <Typography sx={{ color: "#fff", fontSize: 14 }}>
          {articulo.nombre}
          </Typography>
        </Grid>
      </Grid>

      <Grid item lg={4}>
        <Typography sx={{ color: "#0BECA8", fontSize: 14, fontWeight: 600 }}>
          {formatterPeso.format(precio) + " COP"}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Articulo;
