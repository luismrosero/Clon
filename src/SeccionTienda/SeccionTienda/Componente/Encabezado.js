import { Grid, Avatar, Typography, Box } from "@material-ui/core";
import { motion } from "framer-motion";
import { React, useEffect } from "react";
import IconoTiktok from "../Iconos/IconoTiktok";
import IconoFacebook from "./../Iconos/IconoFacebook";
import IconoInstagram from "./../Iconos/IconoInstagram";
import IconoWass from "./../Iconos/IconoWass";

const Encabezado = (props) => {
  const { tienda } = props;
  // console.log(tienda.paleta.sombra);

  const estiloCaja = {
    boxShadow: tienda ? tienda.paleta.sombra : "",
  };
  const estiloAvatar = {
    background: tienda ? tienda.paleta.gradient : "",
    boxShadow: tienda ? tienda.paleta.sombra : "",
  };

  var configuracion_ventana =
    "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

  function abrir_img(item) {
    window.open(item, "Pagina_CNN", configuracion_ventana);
  }

  const getIcono = (nombre) => {
    switch (nombre) {
      case "facebook":
        return <IconoFacebook />;
      case "instagram":
        return <IconoInstagram />;
      case "twiter":
        return <IconoWass />;
      case "tiktok":
        return <IconoTiktok />;
    }
    return;
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="flex-start"
      sx={{
        padding: 2,
        borderColor: "red",
        borderEndStartRadius: 30,
        borderEndEndRadius: 30,
        boxShadow: 10,
        paddingBottom: 3,
      }}
      style={estiloCaja}
    >
      <Grid item xs={5}>
        <Grid item container sx={{ justifyContent: "center" }}>
          <Avatar
            sx={{
              width: 135,
              height: 135,
              padding: 1,
            }}
            style={estiloAvatar}
          />

          <Avatar
            sx={{
              width: 135,
              height: 135,
              position: "absolute",
              marginTop: 1,
              marginLeft: 0.1,
            }}
            src={tienda.logo}
          />
        </Grid>
      </Grid>

      <Grid item xs={7}>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-end"
        >
          <Grid
            item
            container
            sx={{ justifyContent: "flex-end", marginBottom: 1, marginLeft: 1 }}
          >
            <Typography
              sx={{
                fontSize: 17,
                fontWeight: 600,              
                paddingX: 2,
                paddingY: 0.5,
                borderRadius: 6,
                color: "#fff",
                textAlign: "end",
              }}
            >
              {tienda.nombre}
            </Typography>
          </Grid>

          <Grid item container sx={{ justifyContent: "flex-end" }}>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              {tienda
                ? tienda.redes.map((red) => {
                    return (
                      <motion.div whileTap={{ scale: 0.9 }} key={red.url}>
                        <Box
                          key={red.nombre}
                          sx={{
                            borderRadius: 5,
                            padding: 1,
                            height: 20,
                            width: 20,
                            marginLeft: 1.5,
                            boxShadow: 6,
                            backgroundColor: "#A3A3A3",
                          }}
                          style={estiloAvatar}
                          onClick={() => abrir_img(red.url)}
                        >
                          {getIcono(red.nombre)}
                        </Box>
                      </motion.div>
                    );
                  })
                : ""}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Encabezado;
