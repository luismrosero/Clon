import { React, useState } from "react";
import { Grid, Typography, Drawer } from "@material-ui/core";
import SeccProceso from "./../../SeccProceso/SeccProceso";
import SeccEspera from "../../SeccEspera/SeccEspera";
import SeccCompletados from "./../../SeccCompletados/SeccCompletados";

const CardNumPedido = (props) => {
  const { numero, titulo, clave, pedidos } = props;
  const [open, setOpen] = useState(false);

  const getComponente = (clave) => {
    switch (clave) {
      case "procesar":
        return <SeccProceso pedidos={pedidos} cerrar={cerrar} />;
      case "espera":
        return <SeccEspera pedidos={pedidos} cerrar={cerrar} />;
      case "completado":
        return <SeccCompletados pedidos={pedidos} cerrar={cerrar} />;
    }
  };

  const abrir = () => {
    setOpen(true);
  };

  const cerrar = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: 1,
          padding: 2,
        }}
        onClick={() => abrir()}
      >
        <Typography sx={{ fontSize: 25 }}>{numero} </Typography>
        <Typography sx={{ fontSize: 16 }}>{titulo}</Typography>
      </Grid>

      <Drawer
        anchor={"right"}
        open={open}
        onClose={cerrar}
        sx={{ minWidth: 350 }}
      >
        {getComponente(clave)}
      </Drawer>
    </>
  );
};

export default CardNumPedido;
