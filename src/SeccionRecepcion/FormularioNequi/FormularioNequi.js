import {
  Grid,
  Stepper,
  StepLabel,
  Step,
  StepContent,
  Typography,
} from "@material-ui/core";
import { React, useState, createContext } from "react";

import EnvioComprobante from "./Pasos/EnvioCoprobante";
import EnvioPago from "./Pasos/EnvioPago";
import Listo from "./Pasos/Listo";

///////////////////////////////////
export const CFormuNequi = createContext();

const FormularioNequi = (props) => {
  const { datos } = props;
  const [paso, setPaso] = useState(0);

  const siguiente = () => {
    setPaso(paso + 1);
  };

  const atras = () => {
    if (paso > 0) {
      setPaso(paso - 1);
    } 
  };
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <CFormuNequi.Provider value={{ siguiente: siguiente, atras: atras, datos: datos }}>
        <Stepper activeStep={paso} orientation="vertical"   >
          <Step  >
            <StepLabel icon={" "}  StepIconProps={{ style: { color: "#0BECA8",}}} >
              <Typography sx={{ fontSize: 16, color: "#0BECA8" }}>
                Abre tu Nequi
              </Typography>
            </StepLabel>
            <StepContent>
              <EnvioPago />
            </StepContent>
          </Step>

          <Step>
            <StepLabel icon={" "}  StepIconProps={{ style: { color: "#0BECA8",}}}  >
              <Typography sx={{ fontSize: 16, color: "#0BECA8" }}>
                Envia tu comprobante
              </Typography>
            </StepLabel>
            <StepContent>
              <EnvioComprobante />
            </StepContent>
          </Step>

          <Step>
            <StepLabel icon={" "}  StepIconProps={{ style: { color: "#0BECA8",}}}  >
              <Typography sx={{ fontSize: 16, color: "#0BECA8" }}>Listo!!!</Typography>
            </StepLabel>
            <StepContent>
              <Listo/>
            </StepContent>
          </Step>
       
        </Stepper>
      </CFormuNequi.Provider>
    </Grid>
  );
};

export default FormularioNequi;
