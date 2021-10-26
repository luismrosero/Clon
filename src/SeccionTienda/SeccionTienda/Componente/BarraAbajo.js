import { Grid, Typography } from "@material-ui/core";
import React from "react";

const BarraAbajo = (props) => {
  const { producto } = props;

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  var total = producto.precio;
  var anterior = producto.antes;
  var valor = "";
  var antes = "";

  if (total != null) {
    valor = formatterPeso.format(total);
  }

  if (anterior != null) {
    antes = formatterPeso.format(anterior);
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item xs={7}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Typography sx={{ color: "#333333", fontSize: 14, fontWeight: 600 }}>
            {producto.nombre}
          </Typography>
          {/*
            <Typography
            sx={{
              color: "#333333",
              fontSize: 9,
              fontWeight: 500,
              fontStyle: "italic",
              marginTop: -0.5,
            }}
          >
            {producto.complemento}
          </Typography>
          */}
        
        </Grid>
      </Grid>

      <Grid item container sx={{ justifyContent: "flex-end", marginTop: 0 }}>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
        >

          {/*
          
          <Grid item>
            <Typography
              sx={{
                textDecorationLine: "line-through",
                color: "#CCCCCC",
                fontSize: 9,
              }}
            >
              {antes}
            </Typography>
          </Grid>

          */}
          
          <Grid item container sx={{justifyContent: "flex-end"}} >
            <Typography sx={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>
              {valor}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BarraAbajo;
