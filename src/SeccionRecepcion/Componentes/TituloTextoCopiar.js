import { React, useState } from "react";
import { Grid, Snackbar, Typography } from "@material-ui/core";

import { CopyToClipboard } from "react-copy-to-clipboard";

const TituloTextoCopiar = (props) => {
  const { titulo, contenido } = props;
  const [open, setOpen] = useState(false);

  const abrirSnak = () => {
    setOpen(true);
  };

  const cerrarSnak = () => {
    setOpen(false);
  };
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item container>
          <Typography sx={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>
            {titulo}
          </Typography>
        </Grid>

        <Typography
          sx={{
            color: "#fff",
            fontSize: 12,
            fontWeight: 300,
            fontStyle: "italic",
            marginTop: 1,
            marginRight: 2,
          }}
        >
          {contenido}
        </Typography>

        <CopyToClipboard text={contenido}>
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
              marginTop: 1,
            }}
            onClick={() => abrirSnak()}
          >
            COPIAR
          </Typography>
        </CopyToClipboard>
      </Grid>

      <Snackbar
        autoHideDuration={6000}
        open={open}
        onClose={cerrarSnak}
        message="Numero copiado"
      />
    </>
  );
};

export default TituloTextoCopiar;
