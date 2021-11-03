/*************************************************
 * nombre:       SeccAdmin
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/
import { React, useState, useEffect  } from "react";

import {Typography, Grid, Button, Dialog} from "@material-ui/core";
import CardTienda from "./Componente/CardTienda";
import Formulario from "../SeccFormulario/Formulario";
import fire from "../fire";
import {TiendaDoc} from "../Entidades/TiendaDoc";

const SeccAdmin = () => {
    const [tiendas,setTiendas] = useState([1,2,3]);
    const [open,setOpen] = useState(false);
    const [itemDetalle,setItemDetalle] = useState('');

    const abrirDetalle = (item) =>{
        setItemDetalle(item);
        setOpen(true)
    }

    const abrir = () =>{
        setItemDetalle('')
        setOpen(true)
    }

    const cerrar = () =>{
        setOpen(false)
    }


    useEffect(()=>{
       fire.firestore().collection("tiendas").onSnapshot((snap) =>{
           let array = [];
           setTiendas(array);
           snap.forEach((doc) =>{
              let tie = new TiendaDoc(doc);
              setTiendas((tiendas) => tiendas.concat(tie));
           });
       })
    },[])
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{padding: 4}}
    >

        <Grid item container>

          <Typography sx={{fontSize: 24, fontWeight: 600, color: "#fff"}} >Tiendas Creadas</Typography>
        </Grid>

        <Grid item container sx={{justifyContent: "flex-end"}} >
          <Button variant={"contained"} color={"primary"} onClick={() => abrir()} >Crear Tienda</Button>
        </Grid>


        <Grid item container>
            {tiendas.map((item) => {
                return(
                    <Grid item container>
                        <CardTienda item={item} click={abrirDetalle} />
                    </Grid>

                )
            })}
        </Grid>

        <Dialog open={open} fullScreen onClose={cerrar}  >
            <Formulario cerrar={cerrar} itemDetalle={itemDetalle} />
        </Dialog>


    </Grid>
  );
};
export default SeccAdmin;
