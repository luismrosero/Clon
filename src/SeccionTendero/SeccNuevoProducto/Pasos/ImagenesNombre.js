import { Grid } from "@material-ui/core";
import { React, useContext } from "react";
import BotonAtrasArriba from "./../../../CompoGlobales/BotonAtrasArriba";
import EscogedorImagenMultiple from "./../../../CompoGlobales/EscogedorImagenMultiple";
import { CFormProducto } from "./../FormularioNuevoProducto";
import BotonAccion from "./../../../CompoGlobales/BotonAccion";
import EditIcon from "../../../CompoGlobales/EditIcon";
import EditIconTabler from "./../../../CompoGlobales/EditIconTabler";
import { IconArchive, IconBlockquote } from "@tabler/icons";
import EditIconParrafoTabler from './../../../CompoGlobales/EditIconParrafoTabler';

const ImagenesNombre = () => {
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
          Icono={IconArchive}
          stroke={1.5}
          size={"2rem"}
          color={"gray"}
          titulo={"Nombre Producto"}
          valor={cData.nombre}
          setValor={cData.setNombre}
        />
      </Grid>

      <Grid item container sx={{marginTop: 2}} >
        <EditIconParrafoTabler
          Icono={IconBlockquote}
          stroke={1.5}
          size={"2rem"}
          color={"gray"}
          titulo={"Descripcion Producto"}
          valor={cData.descripcion}
          setValor={cData.setDescripcion}
        />
      </Grid>

      <Grid item container sx={{ justifyContent: "center", marginTop: 2 }}>
        <BotonAccion titulo={"siguiente"} click={cData.siguiente} />
      </Grid>
    </Grid>
  );
};

export default ImagenesNombre;
