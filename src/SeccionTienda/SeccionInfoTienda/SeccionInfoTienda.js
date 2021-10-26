import { Grid, Typography } from "@material-ui/core";
import { React, useEffect, useState} from "react";
import IconText from "./Componentes/IconText";
import IconoDireccion from "./Iconos/IconoDireccion";
import IconoEnvio from "./Iconos/IconoEnvio";
import IconoPago from "./Iconos/IconoPago";
import IconoTelefono from "./Iconos/IconoTelefono";

const SeccionInfoTienda = (props) => {
  const {tienda} = props;
  const [pago, setPago] = useState("");
  const [envio, setEnvio] = useState("");
  const estiloCaja = {
    boxShadow: tienda ? tienda.paleta.sombra : "",
  };


  useEffect(() => {
    if(tienda.mediosPago != null && tienda.mediosPago.length > 0){
      var text = "";
      for(var i = 0; i < tienda.mediosPago.length; i++){
        text += tienda.mediosPago[i] + ", ";
      }

      setPago(text);
    } 

    if(tienda.mediosEnvio != null && tienda.mediosEnvio.length > 0){
      var text = "";
      for(var i = 0; i < tienda.mediosEnvio.length; i++){
        text += tienda.mediosEnvio[i] + ", ";
      }

      setEnvio(text);
    } 
  }, [tienda])

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ padding: 2, backgroundColor: "#E1E1E1", borderTopRightRadius: 30,borderTopLeftRadius: 30, }}
      style={estiloCaja}
    >
      <Grid item container>
        <Typography sx={{ fontSize: 18, fontWeight: 600 }}>       
       {tienda.nombre}
        </Typography>
      </Grid>

      <Grid item container>
        <Typography sx={{ fontSize: 14, fontWeight: 300, marginTop: 1, fontStyle: "italic", }}>         
          {tienda.descripcion}
        </Typography>
      </Grid>
      <Grid item container sx={{marginTop: 1}}>
        <IconText Icono={IconoDireccion} titulo={"Direccion"} contenido={tienda.direccion} />       
      
      </Grid>
      <Grid item container sx={{marginTop: 1}} >
      <IconText Icono={IconoTelefono} titulo={"Telefonos"} contenido={tienda.telefonos} />    
      </Grid>

      <Grid item container sx={{marginTop: 1}} >
      <IconText Icono={IconoPago} titulo={"Medios de Pago"} contenido={pago} />    
      </Grid>

      <Grid item container sx={{marginTop: 1}} >
      <IconText Icono={IconoEnvio} titulo={"Envios"} contenido={envio} />    
      </Grid>
    </Grid>
  );
};

export default SeccionInfoTienda;
