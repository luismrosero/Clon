import {React, useState} from "react";
import {Grid, Snackbar, Typography} from "@material-ui/core";

import {CopyToClipboard} from "react-copy-to-clipboard";

const TituloTextoCopiar = (props) => {
  const { contenido,acento} = props;
  const [open, setOpen] = useState(false);
  const [cop, setCop] = useState("COPIAR NUMERO")

  const abrirSnak = () => {
    setCop("NUMERO COPIADO")
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



        <CopyToClipboard text={contenido}>
          <Typography
            sx={{
              color: acento,
              fontSize: 16,
              fontWeight: 300,
              border: 1,
              borderColor: acento,
              borderRadius: 3,
              paddingX: 1,
              paddingY: 0.1,
              marginTop: 1,
            }}
            onClick={() => abrirSnak()}
          >
            {cop}
          </Typography>
        </CopyToClipboard>
      </Grid>

      <Snackbar
        anchorOrigin={{vertical: 'top', horizontal: 'left'}}
        autoHideDuration={6000}
        open={open}
        onClose={cerrarSnak}
        message="Numero copiado"

      />
    </>
  );
};

export default TituloTextoCopiar;
