import { React, useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Drawer,
  MenuItem,
  IconButton,
  Badge, paperClasses,
} from "@material-ui/core";
import IconoCarrito from "../SeccionCarrito/Iconos/IconoCarrito";
import SeccionCarrito from "../SeccionCarrito/SeccionCarrito";

const CarritoFlotante = (props) => {
  const {
    pedidos,
    setPedidos,
    tienda,
    abrirContinuar,
    abrirCarrito,
    cerrarCarrito,
    openCarrito,
  } = props;

  const [num, setNum] = useState(0);

  const estilo = {
    background: tienda ? tienda.paleta.gradient : "",
    boxShadow: tienda ? tienda.paleta.sombra : "",
  };

  useEffect(() => {
    setNum(pedidos.length);
  }, [pedidos]);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid
          item
          sx={{
            paddingX: 2,
            paddingY: 0.5,
            borderRadius: 3,
            boxShadow: 5,
          }}
          style={estilo}
        >
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            onClick={() => abrirCarrito()}
            sx={{width: 60, height: 34, paddingTop: 0.8, paddingLeft: 0.5}}
          >
                  
               
                  <Badge badgeContent={num} color="secondary" >
                    <IconoCarrito />
                  </Badge>
                   
          
          
          </Grid>
        </Grid>
      </Grid>
      <Drawer
        anchor={"right"}
        open={openCarrito}
        onClose={cerrarCarrito}
        sx={{ minWidth: 100, zIndex: 1100, '& .MuiDrawer-paper': { backgroundColor: "#000000"},}}

      >
        <SeccionCarrito
          cerrar={cerrarCarrito}
          pedidos={pedidos}
          setPedidos={setPedidos}
          setNum={setNum}
          tienda={tienda}
          abrirContinuar={abrirContinuar}
        />
      </Drawer>
    </>
  );
};

export default CarritoFlotante;
