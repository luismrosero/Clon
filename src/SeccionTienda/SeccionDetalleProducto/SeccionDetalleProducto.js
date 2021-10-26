import { React, useState, useEffect } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import Atributos from "./Componentes/Atributos";
import ButtonBar from "./Componentes/ButtonBar";
import IconoAtras from "./Iconos/IconoAtras";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

const SeccionDetalleProducto = (props) => {
  const { cerrar, producto, setPedidos, pedidos, vendedores, abrirCarrito, tienda } =
    props;
  const [imgPrincipal, setImgPrincipal] = useState("");
  const [seleccion, setSeleccion] = useState([]);

  const verDetalle = (img) => {
    setImgPrincipal(img);
  };

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  useEffect(() => {
    setImgPrincipal(producto.imgs[0]);
  }, [producto]);
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ zIndex: 100, backgroundColor: "#333333" }}
    >
      <Grid
        item
        container
        sx={{ padding: 2, marginTop: 2 }}
       
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ marginBottom: 1 }}
        >
          <Grid item  onClick={() => cerrar()} >
          <IconoAtras />
          </Grid>

          <Typography sx={{ fontSize: 20, fontWeight: 600, color: "#fff" }}>
            {producto.nombre}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container sx={{ justifyContent: "center", paddingX: 2 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item style={{ width: 320, height: 400, borderRadius: 20 }}>
            <InnerImageZoom src={imgPrincipal} zoomScale={0.5} />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        sx={{ padding: 1, justifyContent: "center", marginTop: 1 }}
      >
        {producto.imgs.map((img) => {
          return (
            <img
            key={img}
              src={img}
              style={{ width: 60, height: 80, borderRadius: 10, padding: 3 }}
              onClick={() => verDetalle(img)}
            />
          );
        })}
      </Grid>

{/*
 <Grid item container sx={{ paddingX: 4, marginTop: 2 }}>
        <Typography
          sx={{
            fontSize: 15,
            textDecorationLine: "line-through",
            fontWeight: 400,
            color: "#CCCCCC",
          }}
        >
          {formatterPeso.format(producto.antes) + " COP"}
        </Typography>
      </Grid>
*/}
     
      <Grid item container sx={{ paddingX: 4, marginTop: 2 }}>
        <Typography sx={{ fontSize: 24, fontWeight: 400, color: "#fff" }}>
          {formatterPeso.format(producto.precio) + " COP"}
        </Typography>
      </Grid>

      <Grid item container sx={{ paddingX: 3, marginTop: 2 }}>
        <Atributos
          atributos={producto.atributos}
          seleccion={seleccion}
          setSeleccion={setSeleccion}
          tipo={producto.tipoTalla}
       />
       
      </Grid>

      <Grid item container sx={{ paddingX: 2, marginTop: 3, marginBottom: 2 }}>
        <Typography sx={{fontStyle: "italic", fontSize: 16, color: "#fff", fontWeight: 300}} >{producto.descripcion}</Typography>
      </Grid>

      <Grid item container >
        <ButtonBar
          producto={producto}
          seleccion={seleccion}
          setPedidos={setPedidos}
          pedidos={pedidos}
          setSeleccion={setSeleccion}
          img={imgPrincipal}
          vendedores={vendedores}
          abrirCarrito={abrirCarrito}
          tienda={tienda}
        />
      </Grid>
    </Grid>
  );
};

export default SeccionDetalleProducto;
