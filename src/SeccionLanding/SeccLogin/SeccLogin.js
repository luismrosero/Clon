import { React, useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import EditIcon from "../../CompoGlobales/EditIcon";
import IconoUsuario from "./Iconos/IconoUsuario";
import IconoPass from "./Iconos/IconoPass";
import BotonAccion from "./../../CompoGlobales/BotonAccion";
import fire from "./../../fire";
import { TENDERO } from "../../Constantes";

const SeccLogin = (props) => {
  const {ingreso, setFormu} = props;
  const [correo, setCorreo] = useState("");
  const [pass, setPass] = useState("");

  const verificarTendero = (email) => {
    fire
      .firestore()
      .collection(TENDERO)
      .doc(email)
      .get()
      .then((doc) => {
          if(doc.exists){
          
              ingreso(doc)
              
              // si refres no vuelvan a loguearse
          }else{
            fire.auth().signOut()
            setTimeout( alert("Este usuario no es encuentra registrado como tendero"), 2000)
           
            
          }
       
   
      })
      .catch((err) => {
        alert(err);
      });
  };

  const entrar = () => {
    if (correo === "admin" && pass === "Starfy*0110_"){
      setFormu()
    }else {


      fire
          .auth()
          .signInWithEmailAndPassword(correo, pass)
          .then((doc) => {
            console.log(doc.user.email);
            verificarTendero(doc.user.email);
          })
          .catch((err) => {
            alert(err);
          });

    }
  };





  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ padding: 2 }}
    >
      <Grid item container sx={{ justifyContent: "center" }}>
        <Typography> Login </Typography>
      </Grid>

      <Grid item container sx={{ marginTop: 6 }}>
        <EditIcon
          Icono={IconoUsuario}
          titulo={"Correo"}
          valor={correo}
          setValor={setCorreo}
        />
      </Grid>

      <Grid item container sx={{ marginTop: 3 }}>
        <EditIcon
          Icono={IconoPass}
          titulo={"Contraseña"}
          valor={pass}
          setValor={setPass}
        />
      </Grid>

      <Grid
        item
        container
        sx={{ justifyContent: "center", marginTop: 6, marginBottom: 2 }}
      >
        <BotonAccion titulo={"INGRESAR"} click={entrar} />
      </Grid>
    </Grid>
  );
};

export default SeccLogin;
