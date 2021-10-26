import { React, useState } from "react";
import {Grid, Snackbar, Typography, } from "@material-ui/core";
import { CopyToClipboard } from "react-copy-to-clipboard";

const TextIconoTablerCopiar = (props) => {
  const { titulo, stroke, size, color, Icono, boton } = props;
  const [open,setOpen] = useState(false);

  const abrirSnak = () =>{
    setOpen(true);
  }

  const cerrarSnak = () =>{
    setOpen(false);
  }

  return (
    <>
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Icono stroke={stroke} size={size} color={color} />

      <Typography
        sx={{ color: "#0BECA8", marginLeft: 1.5, fontSize: 14, marginRight: 2 }}
      >
        {titulo}
      </Typography>

      <CopyToClipboard text={titulo} >
        <Typography
          sx={{
            color: "#fff",
            fontSize: 12,
            fontWeight: 300,
            border: 1,
            borderColor: "#CCCCCC",
            borderRadius: 3,
            paddingX: 1,
            paddingY: 0.1,
          }}
          onClick={() => abrirSnak()}
        >
          {boton}
        </Typography>
      </CopyToClipboard>
    </Grid>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={cerrarSnak}
        message="Texto copiado"

      />
    </>
  );
};

export default TextIconoTablerCopiar;
