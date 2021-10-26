import { React, useState, useEffect } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import IconoBorrar from "./../Iconos/IconoBorrar";
import IconoMenos from "./../Iconos/IconoMenos";
import IconoMas from "./../Iconos/IconoMas";
import Atributos from "./Atributos";

const ProductoCarrito = (props) => {
  const {
    pedido,
    pedidos,
    setValorProductos,
    valorProductos,
    borrar,
    canti,
    setPedidos,
    tienda,
  } = props;
  const [cantidad, setCantidad] = useState(1);
  const [valor, setValor] = useState("");

  const estilo = {
    backgroundColor: tienda.paleta.primario,
  };

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  const borrarProducto = (pedido, valor) => {
    setCantidad(pedido.cantidad);
    setValor(pedido.precio * pedido.cantidad);
    borrar(pedido, valor);
  };

  const agregar = () => {
    setValor(pedido.precio * (cantidad + 1));
    setValorProductos(valorProductos + parseInt( pedido.precio));
    setCantidad(cantidad + 1);
    var ped = pedidos;
    pedidos.forEach((ped) => {
      if (ped.id === pedido.id) {
        ped.cantidad = cantidad + 1;
      }
    });

    setPedidos(ped);
  };

  const sustraer = () => {
    if (cantidad > 1) {
      setValor(pedido.precio * (cantidad - 1));
      setValorProductos(valorProductos - pedido.precio);
      setCantidad(cantidad - 1);
      var ped = pedidos;
      pedidos.forEach((ped) => {
        if (ped.id === pedido.id) {
          ped.cantidad = cantidad - 1;
        }
      });

      setPedidos(ped);
    }
  };

  useEffect(() => {
    //console.log("Candiad ", pedido.cantidad );
    setCantidad(canti);
    setValor(pedido.precio * canti);
  }, [canti]);

  useEffect(() => {
    //console.log("Candiad ", pedido.cantidad );
    setCantidad(pedido.cantidad);
    setValor(pedido.precio * pedido.cantidad);
  }, [pedidos]);
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        justifyContent: "flex-end",
        padding: 1.5,
        borderRadius: 4,
        boxShadow: 5,
        marginTop: 2,
        backgroundColor: "#F1F1F1",
      }}
    >
      <Grid item xs={4}>
        <img
          src={pedido.img}
          style={{ width: 104, height: 134, borderRadius: 8 }}
        />
      </Grid>

      <Grid item xs={8}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item container>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <Typography sx={{ fontSize: 15, color: "#333333" }}>
                  {pedido.nombre}
                </Typography>
              </Grid>

              <Grid item>
                <Box
                  sx={{
                    backgroundColor: "#333333",
                    paddingY: 0.1,
                    borderRadius: 1,
                    boxShadow: 4,
                  }}
                  onClick={() => borrarProducto(pedido, valor)}
                >
                  <IconoBorrar />
                </Box>
              </Grid>
            </Grid>

            <Grid item container>
              <Atributos atributos={pedido.atributos} />
            </Grid>

            <Grid
              item
              container
              sx={{ justifyContent: "flex-end", marginTop: 2 }}
            >
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Grid item>
                  <Box
                    sx={{
                      width: 25,
                      height: 25,                   
                      borderRadius: 1,
                      boxShadow: 4,
                      padding: 0.2
                    }}
                    style={estilo}
                    onClick={() => sustraer()}
                  >
                    <IconoMenos />
                  </Box>
                </Grid>

                <Grid item>
                  <Typography
                    sx={{
                      width: 30,
                      textAlign: "center",
                      fontSize: 22,
                      fontWeight: 600,
                    }}
                  >
                    {cantidad}
                  </Typography>
                </Grid>

                <Grid item>
                  <Box
                    sx={{
                      width: 25,
                      height: 25,                   
                      borderRadius: 1,
                      boxShadow: 4,
                      padding: 0.2
                    }}
                    style={estilo}
                    onClick={() => agregar()}
                  >
                    <IconoMas />
                  </Box>
                </Grid>

                <Grid item xs={7} container sx={{ justifyContent: "flex-end", marginTop: 1 }}>
                  <Typography sx={{color: "#333333", fontSize: 17}} >
                    {formatterPeso.format(valor) + " COP"}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductoCarrito;
