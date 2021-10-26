import { Grid, Typography } from '@material-ui/core';
import { React, useContext, useState } from 'react';
import BotonAtrasArriba from './../../../CompoGlobales/BotonAtrasArriba';
import { CFormProducto } from './../FormularioNuevoProducto';
import BotonAccion from './../../../CompoGlobales/BotonAccion';
import EscogedorColor from './../../../CompoGlobales/EscogedorColor/EscogedorColor';
import EscogedorAtributo from './../../../CompoGlobales/EscogedorColor/EscogedorAtributo';
import EscogedorTalla from '../../../CompoGlobales/EscogedorTallas/EscogedorTalla';

const ImagenesAtributos = () => {
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

      <Grid item container sx={{ marginTop: 2 }}>
        <Typography>{"Tipo de Talla " + cData.tipoTalla} </Typography>
      </Grid>

      <Grid item container>
        <EscogedorColor colores={cData.colores} setColores={cData.setColores} />
      </Grid>

      <Grid item container sx={{ marginTop: -1 }}>
        <EscogedorTalla
          valor={cData.tallas}
          setValor={cData.setTallas}
          titulo={'Tallas'}
          tipo={cData.tipoTalla}
          setTipo={cData.setTipoTalla}
        />
      </Grid>

      <Grid item container sx={{ justifyContent: 'center', marginTop: 2 }}>
        <BotonAccion titulo={'siguiente'} click={cData.siguiente} />
      </Grid>
    </Grid>
  );
};

export default ImagenesAtributos;
