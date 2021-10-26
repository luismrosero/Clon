import {
  Grid,
  Stepper,
  Step,
  StepLabel,
  Typography,
  StepContent,
} from "@material-ui/core";
import { React, useState, createContext } from "react";
import EmpaquePedido from "./Pasos/EmpaquePedido";
import FacturaPedido from "./Pasos/FacturaPedido";
import TransportadoraPedido from "./Pasos/TransportadoraPedido";
import fire from "./../../../fire";
import { PEDIDOS } from "./../../../Constantes";

/////////////////////////////////////
export const CFormProcesar = createContext();

const FormularioPorcesarPedido = (props) => {
  const { cerrar, pedido } = props;
  const [paso, setPaso] = useState(0);
  const [cargando, setCargando] = useState(false);
  const [cargo, setCargo] = useState(false);
  /////////////////////////////////////
  const [numFactura, setNumFactura] = useState("0");
  const [empresa, setEmpresa] = useState("");
  const [guia, setGuia] = useState("");

  const terminar = () => {
    setCargando(true);
    fire
      .firestore()
      .collection(PEDIDOS)
      .doc(pedido.id)
      .update({
        factura: numFactura,
        tranportadora: empresa,
        guia: guia,
        estado: "Completado",
      })
      .then((dox) => {
        setCargo(true);
        setCargando(false);
        alert("Pedido procesado con exito");
        cerrar();
      })
      .catch((err) => {
        alert(err);
      });
  };

  const siguiente = () => {
    setPaso(paso + 1);
  };

  const atras = () => {
    if (paso > 0) {
      setPaso(paso - 1);
    } else {
      cerrar();
    }
  };
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <CFormProcesar.Provider
        value={{
          atras: atras,
          siguiente: siguiente,
          numFactura: numFactura,
          setNumFactura: setNumFactura,
          empresa: empresa,
          setEmpresa: setEmpresa,
          guia: guia,
          setGuia: setGuia,
          cargando: cargando,
          setCargando: setCargando,
          cargo: cargo,
          setCargo: setCargo,
          terminar: terminar,
        }}
      >
        <Stepper activeStep={paso} orientation="vertical">
          <Step>
            <StepLabel>
              <Typography sx={{ fontSize: 16 }}>
                Factura del Pedido (opcional)
              </Typography>
            </StepLabel>
            <StepContent>
              <FacturaPedido />
            </StepContent>
          </Step>

          <Step>
            <StepLabel>
              <Typography sx={{ fontSize: 16 }}>
                Datos Transportadora
              </Typography>
            </StepLabel>
            <StepContent>
              <TransportadoraPedido />
            </StepContent>
          </Step>

      
        </Stepper>
      </CFormProcesar.Provider>
    </Grid>
  );
};

export default FormularioPorcesarPedido;
