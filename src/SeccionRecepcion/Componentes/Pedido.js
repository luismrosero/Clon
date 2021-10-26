import { Grid } from "@material-ui/core";
import { React, useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import Articulo from "./Articulo";

const Pedido = (props) => {
  const { datos } = props;
  const [articulos, setArticulos] = useState([]);

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  useEffect(() => {
    if (datos.pedidos != null) {
      setArticulos(datos.pedidos);
    }
  }, [datos]);
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item>
        <Typography
          sx={{ color: "#fff", fontSize: 14, fontWeight: 500, marginRight: 2 }}
        >
          ID pedido :
        </Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ color: "#fff", fontStyle: "italic", fontSize: 14 }}>
          {datos.id}
        </Typography>
      </Grid>

      <Grid item container sx={{ marginLeft: 2, marginTop: 2 }}>
        {articulos.map((articulo) => {
          return <Articulo articulo={articulo} key={articulo.id} />;
        })}
      </Grid>

      <Grid
        item
        container
        sx={{ marginLeft: 2, marginTop: 2, border: 1, borderColor: "#0BECA8" }}
      ></Grid>

      <Grid
        item
        container
        sx={{ marginLeft: 2, marginTop: 4, justifyContent: "flex-end" }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: 12,
            fontStyle: "italic",
            fontWeight: 400,
          }}
        >
          {"Sub total: " + formatterPeso.format(datos.valPedido) + " COP"}
        </Typography>
      </Grid>
      <Grid
        item
        container
        sx={{ marginLeft: 2, marginTop: 0, justifyContent: "flex-end" }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: 12,
            fontStyle: "italic",
            fontWeight: 400,
          }}
        >
          {"Envio: " + formatterPeso.format(datos.valTotal - datos.valPedido) + " COP"}
        </Typography>
      </Grid>

      <Grid
        item
        container
        sx={{ marginLeft: 2, marginTop: 0, justifyContent: "flex-end" }}
      >
        <Typography
          sx={{
            width: 170,
            borderTop: 2,
            borderColor: "#fff",
            marginTop: 1,
          }}
        ></Typography>
      </Grid>

      <Grid
        item
        container
        sx={{ marginLeft: 2, marginTop: 1, justifyContent: "flex-end" }}
      >
        <Typography
          sx={{
            color: "#0BECA8",
            fontSize: 16,
            fontStyle: "italic",
            fontWeight: 500,
            marginTop: 1,
          }}
        >
          {"TOTAL " + formatterPeso.format(datos.valTotal) + " COP"}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Pedido;
