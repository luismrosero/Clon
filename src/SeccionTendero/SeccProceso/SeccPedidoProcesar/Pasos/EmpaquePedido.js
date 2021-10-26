import { Checkbox, FormControlLabel, Grid, Typography } from "@material-ui/core";
import { React, useContext, useState } from "react";
import BotonAccion from "../../../../CompoGlobales/BotonAccion";
import BotonAtrasArriba from "../../../../CompoGlobales/BotonAtrasArriba";
import { CFormProcesar } from "../FormularioPorcesarPedido";


const EmpaquePedido = () => {
  const cData = useContext(CFormProcesar);
  const [isChecked,setIsChecked] = useState(false);

  const nada = () =>{

  }

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

      <Grid item container sx={{marginTop: 4}} >
      <FormControlLabel control={<Checkbox value={isChecked} onChange={(e) => setIsChecked(e.target.value)} />} label="Pedido Empacado" />
      </Grid>



      <Grid item container sx={{ justifyContent: "center", marginTop: 4 }}>
        <BotonAccion titulo={"siguiente"} click={isChecked ? cData.siguiente: nada} />
      </Grid>
    </Grid>
  );
};

export default EmpaquePedido;
