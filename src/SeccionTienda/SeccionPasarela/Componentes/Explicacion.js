/*******************************************************
 * Nombre:    Explicacion
 * Resumen:   Este componente tiene la explicacion de
 *            como se debe realizar el pago manual al
 * cliente.
 * Props:
 *  tipo -> string que trae el tipo de pago que eligio el
 *          usuario
 * Librerias:
 * Autor:    Luis M Rosero
 * Tiempo :  10 min
 ********************************************************/
import { React, useEffect, useState } from 'react';
import {Avatar, ButtonBase, Grid, Typography} from '@material-ui/core';
import pagando from '../Iconos/pagando.svg';
import enviando from '../Iconos/enviando.svg';
import cajas from '../Iconos/cajas.svg';
import operadora from '../Iconos/operadora.svg';
import TituloTextoCopiar from './TituloTextoCopiar';
import TituloTextoAbrir from './TituloTextoAbrir';

import {IconAlertCircle, IconArrowLeft} from '@tabler/icons';
import fire from '../../../fire';
import { PEDIDOS } from '../../../Constantes';
import { PedidoDoc } from '../../../Entidades/PedidoDoc';
import BotonAccion from "../../ComponentesGlobales/BotonAccion";


const Explicacion = (props) => {
  const { idPedido, acento, sombra, gradiente, tienda, cerrar } = props;
  const [logo, setLogo] = useState('');
  const [completo, setCompleto] = useState('');

  const estiloCaja = {
    boxShadow: sombra ? sombra : '',
  };
  const estiloAvatar = {
    background: gradiente ? gradiente : '',
    boxShadow: sombra ? sombra : '',
  };

  const getPedidos = (pedidos) => {
    var text = '';

    for (let i = 0; i < pedidos.length; i++) {
      var valor = pedidos[i].precio * pedidos[i].cantidad;
      text +=
        '( ' +
        pedidos[i].cantidad +
        ' )' +
        '%20=>%20' +
        pedidos[i].nombre.replaceAll(' ', '%20') +
        '%20%20$%20' +
        valor +
        '%0A';
    }

    return text;
  };

  const wassTienda = () => {
    var configuracion_ventana =
      'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes';

    const item =
      'https://api.whatsapp.com/send?phone=57' +
      completo.numPagos +
     // "3004627579" +
      '&text=Hola%20deseo%20comprar%20estos%20productos:%0A' +
      'Id%20Pedido:%20' +
      idPedido +
      '%0A' +
      getPedidos(completo.pedidos) +
      '%0ASubtotal:%20' +
      completo.valPedido +
      '%0A' +
      'Envio:%20' +
      (completo.valTotal - completo.valPedido) +
      '%0A' +
      'Total:%20' +
      completo.valTotal +
      '%0ATengo%20dudas%20a%20la%20hora%20de%20realizar%20el%20pago';

    // %20 espacio
    // %0A salto de linea
    window.open(item, 'Pagina_WASS', configuracion_ventana);
  };

  const getTipoPago = (tip) => {
    switch (tip) {
      case 'Nequi':
        return 'Para tu pago con Nequi';
    }
  };

  const getTipoCuenta = (tip) => {
    switch (tip) {
      case 'Nequi':
        return 'A la cuenta Nequi';
    }
  };

  const formatterPeso = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  });

  useEffect(() => {
    if (idPedido !== null) {
      fire
        .firestore()
        .collection(PEDIDOS)
        .doc(idPedido)
        .get()
        .then((doc) => {
          let ped = new PedidoDoc(doc);
          setCompleto(ped);
        });
    }
  }, [idPedido]);

  useEffect(() => {
    setLogo(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="77.391"
        height="75.737"
        viewBox="-5 0 97.391 95.737"
      >
        <g
          id="Grupo_379"
          data-name="Grupo 379"
          transform="translate(-151.685 -499.487)"
        >
          <g
            id="Grupo_378"
            data-name="Grupo 378"
            transform="translate(170.171 500.001)"
          >
            <path
              id="Trazado_239"
              data-name="Trazado 239"
              d="M190.023,466.595s4.2,7.4,10,1.1l1.015-1.1c-2.477-1.28-10.392-5.381-17.56-9.219C187.061,462.453,190.023,466.595,190.023,466.595Z"
              transform="translate(-169.139 -418.774)"
              fill="none"
              stroke={acento}
              stroke-width="1"
            />
            <path
              id="Trazado_240"
              data-name="Trazado 240"
              d="M161.31,382.718l-5.48,2.986s-6.328,3.725-3.087,9.737c.176-.217.288-.339.288-.339Z"
              transform="translate(-150.142 -373.975)"
              fill="none"
              stroke={acento}
              stroke-width="1"
            />
            <path
              id="Trazado_241"
              data-name="Trazado 241"
              d="M213.245,363.187s-1.868-4.023-6.5-1.5l-3.4,1.853c2.164.915,9.774,4.131,15.794,6.656C215.88,366.34,213.245,363.187,213.245,363.187Z"
              transform="translate(-181.064 -360.856)"
              fill="none"
              stroke={acento}
              stroke-width="1"
            />
            <path
              id="Trazado_242"
              data-name="Trazado 242"
              d="M261.344,412.824c-.409-.446-.886-.978-1.414-1.574-.776,2.858-2.513,9.264-4.087,15.122,2.88-3.19,5-5.55,5-5.55S265.742,417.623,261.344,412.824Z"
              transform="translate(-212.566 -391.097)"
              fill="none"
              stroke={acento}
              stroke-width="1"
            />
            <path
              id="Trazado_243"
              data-name="Trazado 243"
              d="M150.227,414.533c-1.182,1.454-5.367,7.279.288,10.759,2.3,1.417,6.712,3.837,11.448,6.372-4.155-5.887-9.148-13.036-11.348-16.47C150.471,414.971,150.344,414.751,150.227,414.533Z"
              transform="translate(-147.626 -393.067)"
              fill="none"
              stroke={acento}
              stroke-width="1"
            />
            <path
              id="Trazado_244"
              data-name="Trazado 244"
              d="M186.068,365.134s-4.248-3.066-6.7.6l-3.818,5.711,11.116-6.058Z"
              transform="translate(-164.384 -362.703)"
              fill="none"
              stroke={acento}
              stroke-width="1"
            />
            <path
              id="Trazado_245"
              data-name="Trazado 245"
              d="M252.543,393.5a4.852,4.852,0,0,0-3-6.5c-1.4-.57-3.874-1.6-6.7-2.789,3.1,3.67,6.776,7.977,9.286,10.812Z"
              transform="translate(-204.765 -374.872)"
              fill="none"
              stroke={acento}
              stroke-width="1"
            />
            <path
              id="Trazado_246"
              data-name="Trazado 246"
              d="M228.171,462.01s6.3,3.4,7.9-2.8c.553-2.143,1.584-6.007,2.7-10.146-3.484,3.861-8.076,8.936-11.38,12.54Z"
              transform="translate(-195.49 -413.79)"
              fill="none"
              stroke={acento}
              stroke-width="1"
            />
            <path
              id="Trazado_247"
              data-name="Trazado 247"
              d="M189.606,374.226c-6.02-2.525-13.63-5.741-15.794-6.656L162.7,373.628l-8.279,12.384s-.111.122-.288.339c.118.218.244.437.388.661,2.2,3.434,7.193,10.583,11.348,16.47,7.169,3.838,15.083,7.939,17.56,9.219,3.3-3.6,7.9-8.68,11.38-12.54,1.575-5.858,3.312-12.264,4.087-15.122C196.382,382.2,192.71,377.9,189.606,374.226Z"
              transform="translate(-151.529 -364.885)"
              fill="none"
              stroke={acento}
              stroke-width="1"
            />
          </g>
          <g
            id="Grupo_375"
            data-name="Grupo 375"
            transform="translate(151.685 565.46)"
          >
            <path
              id="Trazado_248"
              data-name="Trazado 248"
              d="M327.629,396.894l-11.721-13.121a.472.472,0,0,0-.352-.157h-.218a.471.471,0,0,0-.471.471v17.79a.471.471,0,0,0,.471.471H317a.471.471,0,0,0,.471-.471V389.235l11.621,12.957a.471.471,0,0,0,.351.157h.23a.471.471,0,0,0,.471-.471v-17.79a.471.471,0,0,0-.471-.471H328.1a.472.472,0,0,0-.472.471Z"
              transform="translate(-314.867 -383.161)"
              fill={acento}
            />
            <path
              id="Trazado_249"
              data-name="Trazado 249"
              d="M419.226,402.348h8.893a.53.53,0,0,0,.53-.53v-1.391a.53.53,0,0,0-.53-.53h-6.827V393.49h6.827a.53.53,0,0,0,.53-.53v-1.392a.53.53,0,0,0-.53-.53h-6.827v-4.97h6.9a.53.53,0,0,0,.53-.53v-1.392a.53.53,0,0,0-.53-.53h-8.968a.476.476,0,0,0-.476.475v17.782A.475.475,0,0,0,419.226,402.348Z"
              transform="translate(-395.346 -383.161)"
              fill={acento}
            />
            <path
              id="Trazado_250"
              data-name="Trazado 250"
              d="M506.969,391.427a9.387,9.387,0,0,0-2.936-6.988,9.993,9.993,0,0,0-7.2-2.839,10.285,10.285,0,0,0-5.081,1.295,9.64,9.64,0,0,0-3.668,3.6,9.8,9.8,0,0,0-1.346,5,9.285,9.285,0,0,0,2.941,6.9,10,10,0,0,0,7.2,2.845,10.2,10.2,0,0,0,5.043-1.263l1,1.232a.418.418,0,0,0,.341.155l2.413-.1a.315.315,0,0,0,.221-.525l-2-2.229a10.2,10.2,0,0,0,2.266-3.132A9.6,9.6,0,0,0,506.969,391.427Zm-2.6-.016a7.168,7.168,0,0,1-2.056,5.152l-2.216-2.766a.4.4,0,0,0-.33-.151l-2.2.088a.4.4,0,0,0-.291.663l3.048,3.6a7.763,7.763,0,0,1-3.514.808,7.336,7.336,0,0,1-5.278-2.119,6.977,6.977,0,0,1-2.181-5.188,7.387,7.387,0,0,1,.988-3.775,7.244,7.244,0,0,1,2.75-2.685,7.575,7.575,0,0,1,3.758-.994,7.655,7.655,0,0,1,3.771,1,7.286,7.286,0,0,1,2.769,2.658A7.181,7.181,0,0,1,504.365,391.411Z"
              transform="translate(-448.021 -381.6)"
              fill={acento}
            />
            <path
              id="Trazado_251"
              data-name="Trazado 251"
              d="M611.392,394.853a12.263,12.263,0,0,1-.177,2.73,3.945,3.945,0,0,1-.765,1.5,3.6,3.6,0,0,1-1.292.963,4.261,4.261,0,0,1-3.591-.1,3.464,3.464,0,0,1-1.416-1.088,3.634,3.634,0,0,1-.586-1.641,20.464,20.464,0,0,1-.071-2.364V384.127a.512.512,0,0,0-.512-.512h-1.518a.512.512,0,0,0-.512.512v10.726a14.343,14.343,0,0,0,.357,3.907A5.4,5.4,0,0,0,603.6,401.7a7.274,7.274,0,0,0,4.037,1.1,6.033,6.033,0,0,0,3.735-1.174,5.68,5.68,0,0,0,2.063-2.762,13.313,13.313,0,0,0,.5-4.014V384.127a.512.512,0,0,0-.512-.512H611.9a.512.512,0,0,0-.512.512Z"
              transform="translate(-536.5 -383.161)"
              fill={acento}
            />
            <path
              id="Trazado_252"
              data-name="Trazado 252"
              d="M691.489,384.106v17.741a.5.5,0,0,0,.5.5h1.539a.5.5,0,0,0,.5-.5V384.106a.491.491,0,0,0-.491-.491H691.98A.491.491,0,0,0,691.489,384.106Z"
              transform="translate(-606.639 -383.161)"
              fill={acento}
            />
          </g>
        </g>
      </svg>
    );
  }, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ padding: 2, backgroundColor: '#333333' }}
    >

      <Grid item container>
        <ButtonBase onClick={() => cerrar()}>
          <IconArrowLeft color={"#fff"} />
        </ButtonBase>

      </Grid>
      <Grid item container sx={{ justifyContent: 'center' }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sx={{ marginTop: 0.5, marginRight: 2 }}>
            <IconAlertCircle color={acento} size={'1.5rem'} />
          </Grid>

          <Grid item>
            <Typography sx={{ color: '#fff', fontSize: 16, fontWeight: 600 }}>
              Sigue estos pasos
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container sx={{ marginTop: 4 }}>
        <Typography sx={{ fontWeight: 400, color: '#fff' }}>
          {getTipoPago(completo.tipoPago)}
        </Typography>
      </Grid>

      <Grid item container sx={{ justifyContent: 'center', marginTop: 6 }}>
        <Avatar
          sx={{
            width: 135,
            height: 135,
            padding: 1,
          }}
          style={estiloAvatar}
        />

        <Avatar
          sx={{
            width: 135,
            height: 135,
            position: 'absolute',
            marginTop: 1,
            marginLeft: 0.1,
            backgroundColor: '#333333',
          }}
        >
          {logo}
        </Avatar>
      </Grid>

      <Grid item container sx={{ marginTop: 6 }}>
        <Typography sx={{ color: '#fff', fontSize: 16, fontWeight: 400 }}>
          Envíanos Tu Pago por{' '}
          <span style={{ color: acento }}>
            {' ' + formatterPeso.format(completo.valTotal) + ' COP'}{' '}
          </span>
        </Typography>
      </Grid>

      <Grid item container sx={{ marginTop: 0.5 }}>
        <Typography sx={{ color: '#fff', fontSize: 16, fontWeight: 400 }}>
          {getTipoCuenta(completo.tipoPago) + ' '}
          <span style={{ color: acento }}>{completo.cuenta}</span>
        </Typography>
      </Grid>

      <Grid item container sx={{marginTop: 1}} >
        <TituloTextoCopiar contenido={completo.cuenta} acento={acento} />
      </Grid>

      <Grid item container sx={{ justifyContent: 'center', marginTop: 6 }}>
        <img src={pagando} style={{ width: '60%' }} />
      </Grid>

      <Grid item container sx={{marginTop: 4}} >
        <Typography sx={{ color: '#fff', fontSize: 16, fontWeight: 400 }}>
          {"Envíanos Tu  comprobante de Pago a este Whatsapp "}
          <span style={{ color: acento }}>{completo.numPagos}</span>
        </Typography>
      </Grid>

      <Grid item container sx={{marginTop: 1}} >
        <TituloTextoAbrir numWass={completo.numPagos} idPedido={idPedido} acento={acento}/>
      </Grid>


      <Grid item container sx={{ justifyContent: 'center', marginTop: 6 }}>
        <img src={enviando} style={{ width: '60%' }} />
      </Grid>

      <Grid item container sx={{marginTop: 6}} >
        <Typography sx={{ color: '#fff', fontSize: 16, fontWeight: 400 }} >
          Después de seguir estos pasos se finalizará
          Tu Compra
        </Typography>
      </Grid>

      <Grid item container sx={{marginTop: 1}} >
        <Typography sx={{ color: '#fff', fontSize: 16, fontWeight: 400 }} >
          El vendedor se comunicará contigo para darte la
          información del envío
        </Typography>
      </Grid>

      <Grid item container sx={{ justifyContent: 'center', marginTop: 8 }}>
        <img src={cajas} style={{ width: '60%' }} />
      </Grid>

      <Grid item container sx={{marginTop: 4}} >
        <Typography sx={{ color: '#fff', fontSize: 16, fontWeight: 400 }} >
          Si tienes dudas con el Pago comunícate con Tu
          Vendedor
        </Typography>
      </Grid>

      <Grid item container sx={{ justifyContent: 'center', marginTop: 8 }}>
        <img src={operadora} style={{ width: '60%' }} />
      </Grid>

      <Grid item container sx={{justifyContent: "center", marginTop: 6}} >
        <BotonAccion titulo={'Abrir Whatsapp'} click={wassTienda}  tienda={tienda}/>
      </Grid>
    </Grid>
  );
};

export default Explicacion;
