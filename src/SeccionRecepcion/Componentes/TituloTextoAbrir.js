import { React, useState } from "react";
import { Grid, Snackbar, Typography } from "@material-ui/core";

const TituloTextoAbrir = (props) => {
  const { titulo, contenido, idPedido } = props;

const abrirLink = () =>{
  if(idPedido != undefined || idPedido != null ){
    var configuracion_ventana =
    "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

    const item = "https://api.whatsapp.com/send?phone=57"+ contenido + "&text=Id" +
      " Pedido: " + idPedido
    window.open(item, "Pagina_WASS", configuracion_ventana);
    }
}

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item container>
          <Typography sx={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>
            {" "}
            {titulo}{" "}
          </Typography>
        </Grid>

        <Typography
          sx={{
            color: "#fff",
            fontSize: 12,
            fontWeight: 300,
            fontStyle: "italic",
            marginTop: 1,
            marginRight: 2,
          }}
        >
        
          {contenido}
        </Typography>

        <Typography
          sx={{
            color: "#0BECA8",
            fontSize: 12,
            fontWeight: 300,
            border: 1,
            borderColor: "#0BECA8",
            borderRadius: 3,
            paddingX: 2,
            paddingY: 0.1,
            marginTop: 1,
          }}
          onClick={() => abrirLink()}
        >
          ABRIR
        </Typography>
      </Grid>
    </>
  );
};

export default TituloTextoAbrir;
