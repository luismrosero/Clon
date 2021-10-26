import { Box, Grid, Typography } from "@material-ui/core";
import { React, useState } from "react";
import IconoMenos from "./../Iconos/IconoMenos";
import IconoMas from "./../Iconos/IconoMas";
import AtributoBar from "./AtributoBar";
import Wass from "./Wass";
import IconoBien from "./IconnBien";

const ButtonBar = (props) => {
  const {
    producto,
    seleccion,
    setPedidos,
    vendedores,
    setSeleccion,
    img,
    abrirCarrito,
    tienda,
  } = props;
  const [cantidad, setCantidad] = useState(1);
  const [agregado, setAgregado] = useState(false);

  const estiloCaja = {
    boxShadow: tienda.paleta.sombra,
  };
  const estiloAvatar = {
    background: tienda.paleta.gradient,
    boxShadow: tienda.paleta.sombra,
  };

  const agregar = () => {
    setCantidad(cantidad + 1);
  };

  const sustraer = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const comparaAhora = () => {
    if (seleccion != null && seleccion.length > 0) {
    agregerProducto();
    abrirCarrito();
  } else {
    alert("Elige primero el color, talla o medida de tu prefecencia ");
  }
  };

  const agregerProducto = () => {
    console.log(seleccion);
    if (seleccion != null && seleccion.length > 0  && seleccion.length === producto.atributos.length ) {
      var pedido = {
        id: parseInt(Math.random() * 1000),
        idProducto: producto.id,
        nombre: producto.nombre,
        img: img,
        atributos: seleccion,
        cantidad: cantidad,
        precio: producto.precio,
      };

      setPedidos((pedidos) => pedidos.concat(pedido));
      setSeleccion([]);
      setAgregado(true);
      
    } else {
      alert("Elige primero el color y/o talla de tu prefecencia ");
    }
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ padding: 2, borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
      style={estiloAvatar}
    >
      <Grid item container sx={{ marginBottom: 2 }}>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid item>{agregado ? <IconoBien /> : ""}</Grid>

          <Grid item>
            <Typography
              sx={{ fontSize: 17, fontWeight: 500, fontStyle: "italic" }}
            >
              {producto.nombre}
            </Typography>
          </Grid>
          {seleccion.map((atributo) => {
            return (
              <Grid item sx={{ marginLeft: 4 }} key={atributo.nombre} >
                <AtributoBar key={atributo.item} atributo={atributo} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>

      <Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            sx={{
              width: 25,
              height: 25,
              backgroundColor: "#fff",
              borderRadius: 1,
              boxShadow: 4,
            }}
            onClick={() => sustraer()}
          >
            <IconoMenos />
          </Box>

          <Typography
            sx={{
              width: 30,
              textAlign: "center",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            {cantidad}
          </Typography>

          <Box
            sx={{
              width: 25,
              height: 25,
              backgroundColor: "#fff",
              borderRadius: 1,
              boxShadow: 4,
            }}
            onClick={() => agregar()}
          >
            <IconoMas />
          </Box>
        </Grid>
      </Grid>
      <Grid>
        <Box
          sx={{
            paddingY: 0.2,
            paddingX: 2,
            backgroundColor: "#333333 ",
            borderRadius: 3,
            boxShadow: 6,
          }}
          onClick={() => agregerProducto()}
        >
          <Typography
            sx={{ color: "#fff", fontSize: 12, width: 70, textAlign: "center" }}
          >
            Agregar al carrito
          </Typography>
        </Box>
      </Grid>

      <Grid>
        <Box
          sx={{
            paddingY: 0.2,
            paddingX: 2,
            backgroundColor: "#333333 ",
            borderRadius: 3,
            boxShadow: 6,
          }}
          onClick={() => comparaAhora()}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: 12,
              width: 70,
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            ¡Comprar Ahora!
          </Typography>
        </Box>
      </Grid>

      <Grid>
        <Wass vendedores={vendedores} />
      </Grid>
    </Grid>
  );
};

export default ButtonBar;
