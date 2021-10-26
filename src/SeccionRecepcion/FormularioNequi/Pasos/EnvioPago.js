import { React, useContext, useState } from "react";
import { formGroupClasses, Grid, Typography } from "@material-ui/core";
import TituloTextoCopiar from "./../../Componentes/TituloTextoCopiar";
import TextIcono from "../../../CompoGlobales/TextIcono";
import BotonAccion from "../../../CompoGlobales/BotonAccion";
import { CFormuNequi } from "../FormularioNequi";
import TextIconoTabler from "./../../../CompoGlobales/TextIconoTabler";
import IconoAtras from "../../Iconos/IconoAtras";
import {
  IconAlertCircle,
  IconArrowUpCircle,
  IconCheck,
  IconPhone,
} from "@tabler/icons";
import TextIconoTablerCopiar from "./../../../CompoGlobales/TextIconoTablerCopiar";
import BotonAccionDiseno from "./../../../CompoGlobales/BotonAccionDiseno";

const EnvioPago = () => {
  const [isChecked, setIsChecked] = useState(false);
  const cData = useContext(CFormuNequi);

  const nada = () => {};

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ marginTop: 2 }}
    >
      <Grid item container>
        <TextIconoTabler
          stroke={1.5}
          size={"1.5rem"}
          color={"#fff"}
          Icono={IconAlertCircle}
          titulo={
            "Envianos " +
            formatterPeso.format(cData.datos.valTotal) +
            " a este Nequi"
          }
        />
      </Grid>

      <Grid item container sx={{ marginTop: 1 }}>
        <TextIconoTablerCopiar
          stroke={1.5}
          size={"1.5rem"}
          color={"#0BECA8"}
          Icono={IconPhone}
          titulo={cData.datos.cuenta}
          boton={"COPIAR NEQUI"}
        />
      </Grid>

      <Grid item container sx={{ marginTop: 1 }}>
        <TextIconoTabler
          stroke={1.5}
          size={"1.5rem"}
          color={"#fff"}
          Icono={IconAlertCircle}
          titulo={"Y como mensaje este ID"}
        />
      </Grid>

      <Grid item container sx={{ marginTop: 1 }}>
        <TextIconoTablerCopiar
          stroke={1.5}
          size={"1.5rem"}
          color={"#0BECA8"}
          Icono={IconCheck}
          titulo={cData.datos.id}
          boton={"COPIAR ID"}
        />
      </Grid>

      
      <Grid item container sx={{ justifyContent: "center", marginTop: 4 }}>
        <BotonAccionDiseno titulo={"siguiente"} click={cData.siguiente} />
      </Grid>
    </Grid>
  );
};

export default EnvioPago;
