import { Checkbox, FormControlLabel, Grid, Typography } from "@material-ui/core";
import { React, useContext } from "react";
import BotonAccion from "../../../../CompoGlobales/BotonAccion";
import BotonAtrasArriba from "../../../../CompoGlobales/BotonAtrasArriba";
import BotonCarga from "../../../../CompoGlobales/BotonCarga";
import EditIcon from "../../../../CompoGlobales/EditIcon";
import { CFormProcesar } from "../FormularioPorcesarPedido";
import IconoGuia from "../Iconos/IconoGuia";
import EdtAutocompletado from './../../../../CompoGlobales/EdtAutocompletado';


const TransportadoraPedido = () => {
  const cData = useContext(CFormProcesar);

  var array =["Servientrega", "Envia"]
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item>
        <BotonAtrasArriba click={cData.atras} />
      </Grid>

      <Grid item container sx={{marginTop: 2}}>
      <Typography>Empresa Transportadora</Typography>
    </Grid>
    <Grid item container>
      <EdtAutocompletado titulo={"Transportadora"} lista={array} valor={cData.empresa} setValor={cData.setEmpresa} />
    </Grid>

    <Grid item container sx={{marginTop: 3}} >
      <EditIcon titulo={"N° Guia"} Icono={IconoGuia} valor={cData.guia} setValor={cData.setGuia} />
    </Grid>


      <Grid item container sx={{ justifyContent: "center", marginTop: 4 }}>
        <BotonCarga titulo={"Terminar"} click={cData.terminar} cargo={cData.cargo} cargando={cData.cargando} />
      </Grid>
    </Grid>
  );
};

export default TransportadoraPedido;
