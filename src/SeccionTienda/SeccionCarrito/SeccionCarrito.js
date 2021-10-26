import { Box, Grid, Typography } from "@material-ui/core";
import { React, useState, useEffect } from "react";
import InfoStarfySencilla from "../ComponentesStarfy/InfoStarfySencilla";
import SeccionInfoTienda from "../SeccionInfoTienda/SeccionInfoTienda";
import ProductoCarrito from "./Componentes/ProductoCarrito";
import IconoAtras from "./Iconos/IconoAtras";
import IconoCarritoBlanco from "./Iconos/IconoCarritoBlanco";

const SeccionCarrito = (props) => {
  const { cerrar, pedidos, setPedidos, setNum, tienda, abrirContinuar } = props;
  const [valorProductos, setValorProductos] = useState(0);
  const [lista, setLista] = useState([]);

  const estilo = {
    background: tienda.paleta.gradient,
    boxShadow: tienda.paleta.sombra,
  };

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  const borrarProducto = (pedido, valor) => {
    var array = lista;
    for (var i = 0; i < array.length; i++) {
      if (array[i].id == pedido.id) {
        array.splice(i, 1);
        setValorProductos(valorProductos - valor);
      }
    }
    setNum(array.length);

    var precio = 0;
    for (var i = 0; i < array.length; i++) {
      precio += array[i].precio * array[i].cantidad;
    }
    setValorProductos(precio);
    setLista(array);
  };

  useEffect(() => {
    console.log("lista");
    var precio = 0;
    for (var i = 0; i < lista.length; i++) {
      precio += lista[i].precio * lista[i].cantidad;
    }

    setNum(pedidos.length);
    setValorProductos(precio);
  }, [lista]);

  useEffect(() => {
    setLista(pedidos);
  }, [pedidos]);
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ minWidth: 310, padding: 0, backgroundColor: "#333333", }}
    >
      <Grid item container sx={{ paddingX: 2, marginTop: 3 }}>
        <Grid container direction="row" justifyContent="flex-start">
          <Grid item xs={3} onClick={cerrar}>
            <IconoAtras />
          </Grid>

          <Grid item xs={1}>
            <IconoCarritoBlanco />
          </Grid>

          <Grid item>
            <Typography sx={{ fontSize: 18, fontWeight: 400, color: "#fff" }}>
              Carrito de compras
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {lista.length === 0 &&  <Box sx={{minHeight : "32vh"}} />}

      <Grid item container sx={{ padding: 1, }}>
        {lista.map((pedido) => {
          var cantidad = pedido.cantidad;
          return (
            <ProductoCarrito
            key={pedido.id}
              pedido={pedido}
              pedidos={pedidos}
              setPedidos={setPedidos}
              canti={cantidad}
              setPedidos={setPedidos}
              valorProductos={valorProductos}
              setValorProductos={setValorProductos}
              borrar={borrarProducto}
              tienda={tienda}
            />
          );
        })}
      </Grid>

      <Grid
        item
        container
        sx={{ justifyContent: "flex-end", marginTop: 3, marginRight: 2 }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: 18,
            border: 1,
            borderColor: "#C5BEBB80",
            paddingX: 2,
            paddingTop: 1,
            paddingBottom: 0.8,
            borderRadius: 3,
          }}
        >
          {"TOTAL " + formatterPeso.format(valorProductos) + " COP"}
        </Typography>
      </Grid>

      <Grid item container sx={{ justifyContent: "center", marginTop: 7 }}>
        <Box
          sx={{
            paddingY: 1.5,
            paddingX: 4,
            backgroundColor: "#A3A3A3",
            borderRadius: 6,
            boxShadow: 6,
          }}
          style={estilo}
        >
          <Typography
            sx={{ color: "#333333", fontSize: 16, fontWeight: 600 }}
            onClick={() => abrirContinuar()}
          >
            Continuar Compra
          </Typography>
        </Box>
      </Grid>

      <Grid item container sx={{ marginTop: 8 }}>
        <SeccionInfoTienda tienda={tienda} />
      </Grid>

      <Grid item container>
        <InfoStarfySencilla />
      </Grid>
    </Grid>
  );
};

export default SeccionCarrito;
