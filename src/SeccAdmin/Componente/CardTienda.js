/*************************************************
 * nombre:       CardTienda
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/
import { React } from "react";
import {Grid, Typography} from "@material-ui/core";


const CardTienda = (props) => {
  const {item, click} = props;
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={{paddingX: 2, paddingY: 2, backgroundColor: "#fff", borderRadius: 1, marginTop: 2}}
      onClick={() => click(item)}
    >


      <Grid item lg={1} sm={12} xs={12} >
        <img src={item.logo} width={80} />
      </Grid>

      <Grid item lg={3} sm={12} xs={12} >
        <Typography sx={{fontWeight: 500, fontSize: 16}} >Nombre: <span style={{fontWeight: 300}} >{item.nombre}</span> </Typography>
      </Grid>

      <Grid item lg={5} sm={12} xs={12} >
        <Typography sx={{fontWeight: 500, fontSize: 16}} >Direccion: <span style={{fontWeight: 300}} >{item.direccion}</span> </Typography>
      </Grid>

      <Grid item lg={2} sm={12} xs={12} >
        <Typography sx={{fontWeight: 500, fontSize: 16}} >Telefono: <span style={{fontWeight: 300}} >{item.telefonos}</span> </Typography>
      </Grid>

    </Grid>
  );
};
export default CardTienda;
