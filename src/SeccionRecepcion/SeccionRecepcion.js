 import { React, useState, useEffect, useRef } from "react";
import { Grid } from "@material-ui/core";
import bien from "./Iconos/bien.png";
import { Typography, Snackbar } from "@material-ui/core";
import Informe from "./Componentes/Informe";
import fire from "../fire";
import { PEDIDOS } from "../Constantes";
import { PedidoDoc } from "../Entidades/PedidoDoc";
import { CopyToClipboard } from "react-copy-to-clipboard";
import IconoAtras from "./Iconos/IconoAtras";
import InfoStarfySencilla from "./../SeccionTienda/ComponentesStarfy/InfoStarfySencilla";

const SeccionRecepcion = (props) => {
  const { datosPasarela, referencia } = props;
  const [datos, setDatos] = useState("");
  const [open, setOpen] = useState(false);
  const textAreaRef = useRef(null);

  const abrirSnak = () => {
    setOpen(true);
  };

  const cerrarSnak = () => {
    setOpen(false);
  };

  const verificamosRef = (pedido, id) => {
    if (pedido.referencia === null && pedido.id === id && referencia != "-1") {
      console.log("entro a updatae");
      fire
        .firestore()
        .collection(PEDIDOS)
        .doc(pedido.id)
        .update({
          referencia: referencia,
          tipoPago: datosPasarela.x_type_payment,
          estado: datosPasarela.x_response,
        })
        .then((dox) => {
          console.log("guardar");
        });

      // cuando se ingresa a seccTendero verificaremos si:
      // todos los pedidos en espera que no tengan tipoPago nequi, daviplata, contraentrega,
      // y tengan ferefencia vamos a verificar con epayco el estado; si es aceptado seteamos estado: procesar
    }
  };

  const irTienda = () => {
    if (datos.idTienda != undefined || datos.idTienda != null) {
      var configuracion_ventana =
        "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

      const item = "https://starfy-7a1d3.web.app/?s=" + datos.idTienda;
      window.open(item, "Pagina_CNN", configuracion_ventana);
    }
  };

  const getTitulo = (datos) => {
    switch (datos.x_cod_response) {
      case -1:
        return "¡Tu compra casi esta finalizada, unicamente nos falta verificar tu pago!";
      case 1:
        return "¡Tu compra y transaccion ha sido exitosa!";
      case 2:
        return "¡Tu compra casi esta finalizada, no hemos podido revisar tu pago verifica los fondos de tu tarjeta o comunicate con el tendero para mas informacion!";
      case 4:
        return "¡Tu compra casi esta finalizada, aun no hemos podido revisar tu pago!";
      case 3:
        return "¡Tu compra casi esta finalizada, si has decidido pagar en efectivo tienes 96 para realizarlo!";
        // 3 es pago Pendiente
    }
  };

  const getLink = () => {
    var URLactual = window.location;
    return String(URLactual);
  };

  useEffect(() => {
    if (datosPasarela.x_extra1 != null) {
      fire
        .firestore()
        .collection(PEDIDOS)
        .doc(datosPasarela.x_extra1)
        .get()
        .then((doc) => {
          var pedidoCompleto = new PedidoDoc(doc);

          setDatos(pedidoCompleto);
          verificamosRef(pedidoCompleto, datosPasarela.x_extra1);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [datosPasarela]);

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item container sx={{ justifyContent: "flex-start", padding: 3 }}>
        {datos ? (
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            onClick={() => irTienda()}
          >
            <IconoAtras />
            <Typography sx={{ color: "#fff", marginLeft: 2, fontWeight: 500 }}>
              Ir a Tienda
            </Typography>
          </Grid>
        ) : (
          ""
        )}
      </Grid>

      <Grid item container sx={{ justifyContent: "center", marginTop: 4 }}>
        <img src={bien} />
      </Grid>

      <Grid
        item
        container
        sx={{ justifyContent: "center", marginTop: 4, paddingX: 2 }}
      >
        <Typography
          sx={{
            marginTop: 0,
            color: "#fff",
            fontSize: 18,
            fontWeight: 600,
            textAlign: "center",
          }}
        >
          {getTitulo(datosPasarela)}
        </Typography>
      </Grid>
  {/*
      <Grid
        item
        container
        sx={{ justifyContent: "center", marginTop: 4, paddingX: 3 }}
      >
        <Typography
          sx={{
            marginTop: 0,
            color: "#0BECA8",
            fontSize: 12,
            fontWeight: 300,
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          Con este link podrás volver aquí y realizar el seguimiento de tu
          pedido
        </Typography>
      </Grid>

    
      <Grid
        item
        container
        sx={{ justifyContent: "center", marginTop: 4, paddingX: 4 }}
      >

        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item>
            <Typography
              sx={{
                marginTop: 0,
                color: "#fff",
                fontSize: 18,
                fontWeight: 600,
                marginRight: 2,
              }}
            >
              URL
            </Typography>
          </Grid>

          <Grid item>
            <CopyToClipboard text={getLink()}>
              <Typography
                sx={{
                  color: "#0BECA8",
                  fontSize: 14,
                  fontWeight: 300,
                  border: 1,
                  borderColor: "#0BECA8",
                  borderRadius: 3,
                  paddingX: 1,
                  paddingY: 0.1,
                }}
                onClick={() => abrirSnak()}
              >
                COPIAR
              </Typography>
            </CopyToClipboard>
          </Grid>
        </Grid>
      </Grid>



      <Grid
        item
        container
        sx={{ justifyContent: "center", marginTop: 2, paddingX: 2 }}
      >
        <Typography
          ref={textAreaRef}
          sx={{
            marginTop: 0,
            color: "#fff",
            fontSize: 12,
            fontWeight: 300,
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          {getLink()}
        </Typography>
      </Grid>

*/}

      <Grid
        item
        container
        sx={{ justifyContent: "center", marginTop: 4, paddingX: 3 }}
      >
        <Informe datosPasarela={datosPasarela} datos={datos} />
      </Grid>

      <Grid item container sx={{ justifyContent: "center", marginTop: 4 }}>
        <InfoStarfySencilla />
      </Grid>

      <Snackbar
        autoHideDuration={6000}
        open={open}
        onClose={cerrarSnak}
        message="Link copiado"
      />
    </Grid>
  );
};

export default SeccionRecepcion;
