import { Grid, Typography } from "@material-ui/core";
import React from "react";
import FormularioNequi from "../FormularioNequi/FormularioNequi";
import Pedido from "./Pedido";
import TituloTexto from "./TituloTexto";
import TituloTextoAbrir from "./TituloTextoAbrir";
import TituloTextoCopiar from "./TituloTextoCopiar";

const Informe = (props) => {
  const { datosPasarela, datos } = props;

  const getTitulo = (datosRef) => {
    if (datos.estado === "Completado") {
      return "Tu pedido ya se encuentra en camino, abajo esta la empresa que lo transporta y el numero de guia";
    } else {
      switch (datosRef.x_cod_response) {
        case -1:
          return (
            "Envianos el pago a la cuenta Nequi " +
            datos.cuenta +
            " y envianos un pantallazo con el Id de tu pedido al WhatsApp de la tienda que encontraras abajo (no pierdas esta oportunidad, esperamos el pago en maximo 3 dias)"
          );
        case 1:
          return "El vendendor muy pronto prepara tu paquete";
        case 2:
          return "Tu pago no ha sido exitoso, al parecer tu tarjeta no cuenta con los fondos suficientes o te has retirado de la compra, pero no te preocupes comunicate con la tienda y llega a un acuerdo con ellos";
        case 4:
          return "Tu pago no ha sido exitoso, tu tarjeta a sido rechazada o sucedio un error en la comunicacion.";
        case 3:
          return (
            "Si has decidido pagar en efectivo tienes 96 hora para realizar el pago en " +
            datosPasarela.x_bank_name
          );
      }
    }
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid
        item
        container
        sx={{
          paddingX: 2,
          border: 1,
          borderColor: "#FFA113",
          borderRadius: 2,
          padding: 1,
          marginTop: 2,
        }}
      >
        <Grid>
          <Typography sx={{ color: "#fff", fontWeight: 600 }}>
            {"¡Hola " + datos.nombre + " !"}
          </Typography>
        </Grid>
        <Grid>
          <Typography sx={{ color: "#fff", fontSize: 14, marginTop: 1 }}>
            {getTitulo(datosPasarela)}
          </Typography>
        </Grid>
      </Grid>

      <Grid item container sx={{ marginTop: 4 }}>
        <TituloTexto
          titulo={"Fecha de compra"}
          contenido={datos.fechaCreacion}
        />
      </Grid>

      <Grid item container sx={{ marginTop: 2 }}>
        <TituloTexto
          titulo={"Direccion de entrega"}
          contenido={
            datos.direccion + ", " + datos.ciudad + ", " + datos.departamento
          }
        />
      </Grid>

      <Grid item container sx={{ marginTop: 2 }}>
        <TituloTextoAbrir
          titulo={"Numero Whatsapp de tienda"}
          contenido={datos.numPagos}
          idPedido={datos.id}
        />
      </Grid>

      <Grid item container sx={{ marginTop: 2 }}>
        <Pedido datos={datos} />
      </Grid>

      {datos.tipoPago === "Nequi" ? (
        <Grid item container sx={{ marginTop: 2 }}>
          <FormularioNequi datos={datos} />
        </Grid>
      ) : (
        ""
      )}

      {/*
      
         <Grid item container sx={{ marginTop: 4 }}>
        <TituloTexto
          titulo={"Transportadora"}
          contenido={
            datos.tranportadora ? datos.tranportadora : "Aun no asignado"
          }
        />
      </Grid>

      <Grid item container sx={{ marginTop: 2 }}>
        <TituloTextoCopiar
          titulo={"Numero de Guia"}
          contenido={datos.guia ? datos.guia : "Aun no asignado"}
        />
      </Grid>
      */}

   
    </Grid>
  );
};

export default Informe;
