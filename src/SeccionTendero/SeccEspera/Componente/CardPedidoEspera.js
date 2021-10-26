import { React, useState, useEffect } from "react";
import { Dialog, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import TextIcono from "../../../CompoGlobales/TextIcono";

import IconoDinero from "../Iconos/IconoDinero";
import TextTituloContenido from "../../../CompoGlobales/TextTituloContenido";
import SeccPedidoEspera from './SeccPedidoEspera';

const CardPedidoEspera = (props) => {
  const { pedido, cerrar } = props;
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  const abrirProcesar = () => {
    setOpen(true);
  };

  const cerrarProcesar = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (pedido.pedidos != null && pedido.pedidos.length > 0) {
      var array = [];
      setItems(array);
      for (var i = 0; i < pedido.pedidos.length; i++) {
        console.log(pedido.pedidos[i]);
        setItems((array) => array.concat(pedido.pedidos[i]));
      }
    }
  }, [pedido]);
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          backgroundColor: "#fff",
          boxShadow: 6,
          borderRadius: 4,
          padding: 2,
        }}
        onClick={() => abrirProcesar()}
      >
        <Grid item container>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={6}>
              <Grid item container>
                <Typography>{pedido.id}</Typography>
              </Grid>
              <Grid item container>
                <Typography sx={{ fontSize: 12, fontWeight: 600 }}>
                  {pedido.fechaCreacion}
                </Typography>
              </Grid>
            </Grid>

            <Grid item container xs={6} sx={{ justifyContent: "flex-end" }}>
              <Typography>
                {"Total " + formatterPeso.format(pedido.valTotal)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container sx={{ marginTop: 2 }}>
          <TextTituloContenido titulo={"Cliente: "} contenido={pedido.nombre} />
        </Grid>

        <Grid item container>
          <TextTituloContenido titulo={"Celular: "} contenido={pedido.telefono} />
        </Grid>

        <Grid item container>
          <TextTituloContenido
            titulo={"Direccion: "}
            contenido={pedido.direccion}
          />
        </Grid>

        <Grid item container sx={{ marginTop: 2 }}>
          <TextIcono Icono={IconoDinero} titulo={pedido.ciudad} />
        </Grid>

        <Dialog fullScreen={true} open={open} onClose={cerrarProcesar}>
          <SeccPedidoEspera
            cerrarLocal={cerrarProcesar}
            pedido={pedido}
            cerrar={cerrar}
          />
        </Dialog>
      </Grid>
    </>
  );
};

export default CardPedidoEspera;
