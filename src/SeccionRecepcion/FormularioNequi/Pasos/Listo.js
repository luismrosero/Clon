import { React, useContext, useState } from "react";
import { formGroupClasses, Grid, Typography } from "@material-ui/core";
import TituloTextoCopiar from "./../../Componentes/TituloTextoCopiar";
import BotonAtrasArriba from "../../../CompoGlobales/BotonAtrasArriba";
import BotonAccion from "../../../CompoGlobales/BotonAccion";
import { CFormuNequi } from "../FormularioNequi";
import TextIconoTabler from './../../../CompoGlobales/TextIconoTabler';
import { IconAlertCircle, IconArrowUpCircle } from "@tabler/icons";


const Listo = () => {
  const [isChecked, setIsChecked] = useState(false);
  const cData = useContext(CFormuNequi);

  const nada = () =>{

  }
  return ( 
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
    

      <Grid item container sx={{ marginTop: 1 }}>
        <TextIconoTabler
          stroke={1.5}
          size={"1.5rem"}
          color={"#fff"}
          Icono={IconAlertCircle}
          titulo={"Por WhatsApp te confirmaremos el envío de tus productos"}
        />
      </Grid>
     
      <Grid item container sx={{ marginTop: 1 }} onClick={cData.atras}  >
        <IconArrowUpCircle stroke={1.5} size={"1.5rem"} color={"#0BECA8"} />
      </Grid>

     
    </Grid>
  );
};

export default Listo;
