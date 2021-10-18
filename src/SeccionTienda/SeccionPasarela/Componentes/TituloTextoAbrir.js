import { React, useState } from "react";
import { Grid, Snackbar, Typography } from "@material-ui/core";

const TituloTextoAbrir = (props) => {
  const { numWass, idPedido, acento } = props;

const abrirLink = () =>{
  if(idPedido != undefined || idPedido != null ){
    var configuracion_ventana =
    "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

    const item = "https://api.whatsapp.com/send?phone=57"+ numWass +
      "&text=HOLA%20HE%20REALIZADO%20UNA%20COMPRA%20EN%20TU%20TIENDA%20Y%20EL%20NUMERO%20DE%20PEDIDO%20ES%3A%20" +
      idPedido + "%0AEN%20EL%20SIGUIENTE%20MENSAJE%20TE%20ENVIO%20MI%20COMPROVANTE%20DE%20PAGO"
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



        <Typography
          sx={{
            color: acento,
            fontSize: 16,
            fontWeight: 300,
            border: 1,
            borderColor: acento,
            borderRadius: 3,
            paddingX: 2,
            paddingY: 0.1,
            marginTop: 1,
          }}
          onClick={() => abrirLink()}
        >
          ABRIR APP
        </Typography>
      </Grid>
    </>
  );
};

export default TituloTextoAbrir;
