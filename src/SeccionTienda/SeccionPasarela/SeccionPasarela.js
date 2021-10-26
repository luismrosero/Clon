import { createRef, React, useState } from 'react';
import { Dialog, Grid, Typography } from '@material-ui/core';
import IconoAtras from './Iconos/IconoAtras';
import IconoDinero from './Iconos/IconoDinero';
import BotonAccionIcono from '../ComponentesGlobales/BotonAccionIcono';
import IconoNequi from './Iconos/IconoNequi';
import IconoDaviplata from './Iconos/IconoeDaviplata';
import IconoVacio from './Iconos/IconoVacio';
import SeccionInfoTienda from './../SeccionInfoTienda/SeccionInfoTienda';
import InfoStarfySencilla from './../ComponentesStarfy/InfoStarfySencilla';
import fire from './../../fire';
import { PEDIDOS } from './../../Constantes';
import { IconBuildingBank } from '@tabler/icons';
import Explicacion from './Componentes/Explicacion';

const SeccionPasarela = (props) => {
  const { cerrar, pedidoCompleto, tienda } = props;
  const [cantidad, setCantidad] = useState(0);
  const [cargo, setCargo] = useState(false);
  const hiddenFileInput = createRef(null);
  const [open, setOpen] = useState(false);
  const [tipo, setTipo] = useState('');

  const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  });

  const getCuenta = (tipo) => {
    switch (tipo) {
      case 'Nequi':
        return tienda.nequi;
    }
  };

  const abrirExplicacion = () => {
    console.log('abriendo...');
    setOpen(true);
  };

  const cerrarExplicacion = () => {
    setOpen(false);
  };
  const guardarTipoPago = (tipo) => {
    var cuen = getCuenta(tipo);
    fire
      .firestore()
      .collection(PEDIDOS)
      .doc(pedidoCompleto.id)
      .update({ tipoPago: tipo, estado: 'Pendiente', cuenta: cuen })
      .then((dox) => {
        abrirExplicacion();
      })
      .catch((err) => {});
  };

  const abrir = (metodo) => {
    setCargo(true);
    switch (metodo) {
      case 'Nequi':
        fire.analytics().logEvent('pago_nequi');
        setTipo(metodo);
        guardarTipoPago(metodo);
        break;
      case 'Daviplata':
        fire.analytics().logEvent('pago_nequi');
        setTipo(metodo);
        guardarTipoPago(metodo);
        break;
    }
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ backgroundColor: '#333333', height: "100vh" }}
    >
      <Grid item container>
        <Grid
          container
          direction="row"
          justifyContent="space-start"
          alignItems="center"
          sx={{ padding: 2 }}
        >
          <Grid onClick={() => cerrar()}>
            <IconoAtras />
          </Grid>

          <Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-start"
              alignItems="center"
              sx={{ marginLeft: 7 }}
            >
              <IconoDinero />
              <Typography
                sx={{
                  marginLeft: 2,
                  color: '#fff',
                  fontSize: 18,
                  fontWeight: 600,
                }}
              >
                Método de pago
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        sx={{ justifyContent: 'center', marginTop: 12, marginBottom: 4 }}
      >
        <Typography sx={{ color: '#fff', fontStyle: 24, fontWeight: 400 }}>
          {'PAGAR ' + formatterPeso.format(pedidoCompleto.valTotal) + ' COP'}
        </Typography>
      </Grid>

      {tienda.mediosPago.map((medio) => {
        const getComponente = (medio) => {
          switch (medio) {
            case 'Transferencia':
              return (
                <BotonAccionIcono
                  titulo={'PAGAR CON'}
                  Icono={IconBuildingBank}
                  tienda={tienda}
                  click={abrir}
                  key={medio}
                  medio={medio}
                />
              );
            case 'Nequi':
              return (
                <BotonAccionIcono
                  titulo={'PAGAR CON'}
                  Icono={IconoNequi}
                  tienda={tienda}
                  click={abrir}
                  key={medio}
                  medio={medio}
                />
              );
            case 'Daviplata':
              return (
                <BotonAccionIcono
                  titulo={'PAGAR CON'}
                  Icono={IconoDaviplata}
                  tienda={tienda}
                  click={abrir}
                  key={medio}
                  medio={medio}
                />
              );
            case 'Contraentrega':
              return (
                <BotonAccionIcono
                  titulo={'PAGAR CONTRAENTREGA'}
                  Icono={IconoVacio}
                  tienda={tienda}
                  click={abrir}
                  key={medio}
                  medio={medio}
                />
              );
          }
        };

        return (
          <Grid item container sx={{ padding: 2, justifyContent: 'center' }}>
            {getComponente(medio)}
          </Grid>
        );
      })}

      <Grid item container sx={{ justifyContent: 'center', marginTop: 26 }}>
        <SeccionInfoTienda tienda={tienda} />
      </Grid>

      <Grid item container sx={{ justifyContent: 'center' }}>
        <InfoStarfySencilla />
      </Grid>

      <Dialog
        fullScreen
        open={open}
        sx={{ zIndex: 3000 }}
        onClose={cerrarExplicacion}
      >
        <Explicacion
          idPedido={pedidoCompleto.id}
          acento={tienda.paleta.acento}
          sombra={tienda.paleta.sombra}
          gradiente={tienda.paleta.gradient}
          tienda={tienda}
          cerrar={cerrarExplicacion}
        />
      </Dialog>
    </Grid>
  );
};

export default SeccionPasarela;
