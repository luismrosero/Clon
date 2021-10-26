import { Grid, Typography } from "@material-ui/core";
import { React, useContext } from "react";
import BotonAccion from "../../../../CompoGlobales/BotonAccion";
import BotonAtrasArriba from "../../../../CompoGlobales/BotonAtrasArriba";
import { CFormProcesar } from "../FormularioPorcesarPedido";
import IconoFactura from "../Iconos/IconoFactura";
import EditIcon from './../../../../CompoGlobales/EditIcon';

const FacturaPedido = () => {
  const cData = useContext(CFormProcesar);
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

      <Grid item container sx={{justifyContent: "center", marginTop: 2}} >
          <Typography>Agrega numero de factura</Typography> 


      </Grid>

      <Grid item container sx={{marginTop: 1}} >
          <EditIcon titulo={"N° Factura"} Icono={IconoFactura} valor={cData.numFactura} setValor={cData.setNumFactura} /> 


      </Grid>

      <Grid item container sx={{ justifyContent: "center", marginTop: 4 }}>
        <BotonAccion titulo={"siguiente"} click={cData.siguiente} />
      </Grid>
    </Grid>
  );
};

export default FacturaPedido;
