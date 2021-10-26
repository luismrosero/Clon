import { React, useState, useEffect } from "react";
import { Dialog, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import ItemProducto from "./ItemProducto";
import TextIcono from "../../../CompoGlobales/TextIcono";
import IconoCiudad from "./../Icono/IconoCiudad";
import SeccPedidoProcesar from "./../SeccPedidoProcesar/SeccPedidoProcesar";

const CardPedido = (props) => {
  const { pedido, cerrar } = props;
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);


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
          <Typography>{pedido.id}</Typography>
        </Grid>

        {pedido.pedidos.map((articulo) => {
          return (
            <Grid item container>
              <ItemProducto articulo={articulo} />
            </Grid>
          );
        })}

        <Grid item container sx={{marginTop: 2}} >
          <TextIcono Icono={IconoCiudad} titulo={pedido.ciudad} />
        </Grid>

      </Grid>

      <Dialog fullScreen={true} open={open} onClose={cerrarProcesar}>
        <SeccPedidoProcesar cerrarLocal={cerrarProcesar} pedido={pedido} cerrar={cerrar} />
      </Dialog>
    </>
  );
};

export default CardPedido;
