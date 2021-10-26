import { Grid } from "@material-ui/core";
import { React, useContext } from "react";
import BotonAtrasArriba from "./../../../CompoGlobales/BotonAtrasArriba";
import EscogedorImagenMultiple from "./../../../CompoGlobales/EscogedorImagenMultiple";
import { CFormProducto } from "./../FormularioNuevoProducto";
import BotonAccion from "./../../../CompoGlobales/BotonAccion";
import EditIcon from "../../../CompoGlobales/EditIcon";
import EditIconTabler from "./../../../CompoGlobales/EditIconTabler";
import { IconArchive, IconBlockquote, IconCashBanknote, IconCashBanknoteOff } from "@tabler/icons";
import EditIconParrafoTabler from './../../../CompoGlobales/EditIconParrafoTabler';

const ImagenesPrecios = () => {
  const cData = useContext(CFormProducto);
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

      <Grid item container sx={{marginTop: 2}} >
        <EditIconTabler
          Icono={IconCashBanknoteOff}
          stroke={1.5}
          size={"2rem"}
          color={"gray"}
          titulo={"Precio Anterior"}
          valor={cData.precioAntes}
          setValor={cData.setPrecioAntes}
        />
      </Grid>

      <Grid item container sx={{marginTop: 2}} >
        <EditIconTabler
          Icono={IconCashBanknote}
          stroke={1.5}
          size={"2rem"}
          color={"gray"}
          titulo={"Precio Actual"}
          valor={cData.precioActual}
          setValor={cData.setPrecioActual}
        />
      </Grid>

     

      <Grid item container sx={{ justifyContent: "center", marginTop: 2 }}>
        <BotonAccion titulo={"siguiente"} click={cData.siguiente} />
      </Grid>
    </Grid>
  );
};

export default ImagenesPrecios;
