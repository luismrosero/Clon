import { Grid, Typography } from "@material-ui/core";
import TituloTextoCopiar from "./../../Componentes/TituloTextoCopiar";
import BotonAtrasArriba from "../../../CompoGlobales/BotonAtrasArriba";
import BotonAccion from "../../../CompoGlobales/BotonAccion";
import { CFormuNequi } from "../FormularioNequi";
import { React, useContext, useState } from "react";
import TextIconoTabler from './../../../CompoGlobales/TextIconoTabler';
import { IconAlertCircle, IconPhone, IconArrowUpCircle } from "@tabler/icons";
import TextIconoTablerCopiar from './../../../CompoGlobales/TextIconoTablerCopiar';
import BotonAccionDiseno from './../../../CompoGlobales/BotonAccionDiseno';
import TextIconoTablerAbrir from './../../../CompoGlobales/TextIconoTablerAbrir';

const EnvioComprobante = () => {
  const [isChecked, setIsChecked] = useState(false);
  const cData = useContext(CFormuNequi);

  const nada = () => {};
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
          titulo={"WhatsApp"}
        />
      </Grid>

      <Grid item container sx={{ marginTop: 1 }}>
        <TextIconoTablerAbrir
          stroke={1.5}
          size={"1.5rem"}
          color={"#0BECA8"}
          Icono={IconPhone}
          titulo={cData.datos.numPagos}
          boton={"ABRIR"}
          idPedido={cData.datos.id}
        />
      </Grid>

      <Grid item container sx={{ marginTop: 1 }} onClick={cData.atras}  >
        <IconArrowUpCircle stroke={1.5} size={"1.5rem"} color={"#0BECA8"} />
      </Grid>

     

      <Grid item container sx={{ justifyContent: "center", marginTop: 4 }}>
        <BotonAccionDiseno titulo={"siguiente"} click={cData.siguiente} />
      </Grid>
    </Grid>
  );
};

export default EnvioComprobante;
