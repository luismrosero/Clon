import React from "react";
import { Grid, Typography, Box, Avatar } from "@material-ui/core";
import firebase from "firebase";
import fire from "../../fire";
import IconoAtras from "../SeccionDetalleProducto/Iconos/IconoAtras";
import InfoStarfySencilla from "../ComponentesStarfy/InfoStarfySencilla";

const SeccionLogueo = (props) => {
  const { cerrar, setUser, tienda } = props;

  const estiloboton = {
    boxShadow: tienda ? tienda.paleta.sombra: "",
    borderColor: tienda ? tienda.paleta.primario : ""
  };
  const estiloAvatar = {
    background: tienda ? tienda.paleta.gradient : "",
    boxShadow: tienda ? tienda.paleta.sombra : "",
  };

  const conGoogle = () => {
    var auth = fire.auth();
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        setUser(res.user);
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ backgroundColor: "#333333", height: "100vh" }}
    >
      <Grid item container sx={{ padding: 3 }}  onClick={() => cerrar()}>
        <IconoAtras  />
      </Grid>

      <Grid item container sx={{ justifyContent: "center", padding: 3 }}>
        <Typography sx={{ color: "#fff", fontSize: 20, fontWeight: 600 }}>
          Login
        </Typography>
      </Grid>

      <Grid item container sx={{ justifyContent: "center", marginTop: 8 }}>
        <Avatar
          sx={{
            width: 185,
            height: 185,
            padding: 1,
          }}
          style={estiloAvatar}
        />

        <Avatar
          sx={{
            width: 180,
            height: 180,
            position: "absolute",
            marginTop: 1.3,
            marginLeft: 0.1,
          }}
          src={tienda.logo}
        />
      </Grid>

      <Grid item container sx={{ marginTop: 12, justifyContent: "center" }}>
        <Box
          sx={{
            paddingX: 4,
            paddingY: 1,
            border: 2,
            boxShadow: 5,
            borderRadius: 3,            
          }}
          style={estiloboton}
          onClick={() => conGoogle()}
        >
          <Typography  sx={{color: "#fff", fontWeight: 600}} >Ingresar con Google</Typography>
        </Box>
      </Grid>

      <Grid item container sx={{ marginTop: 4, justifyContent: "center", display: "none" }}>
        <Box
          sx={{
            paddingX: 4,
            paddingY: 1,
            border: 2,
            borderColor: "#978E8B",
            boxShadow: 5,
            borderRadius: 3,
          }}
          
        >
          <Typography   sx={{color: "#978E8B", fontWeight: 600}}>Entrar con Facebook</Typography>
        </Box>
      </Grid>

      <Grid item container sx={{marginTop: 18}} >
        <InfoStarfySencilla/> 

      </Grid>
    </Grid>
  );
};

export default SeccionLogueo;
