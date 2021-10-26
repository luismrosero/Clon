import React from "react";
import { Grid, Typography } from "@material-ui/core";


const TextIconoTablerAbrir = (props) => {
  const { titulo, stroke, size, color, Icono, boton, idPedido } = props;

  const abrirLink = () =>{
    if(idPedido != undefined || idPedido != null ){
      var configuracion_ventana =
      "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
  
      const item = "https://api.whatsapp.com/send?phone=57" + titulo+ "&text=Id" +
      " Pedido: " + idPedido
      window.open(item, "Pagina_WASS", configuracion_ventana);
      }
  }
  return (
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
          onClick={() => abrirLink()}
        >
          {boton}
        </Typography>
   
    </Grid>
  );
};

export default TextIconoTablerAbrir;
