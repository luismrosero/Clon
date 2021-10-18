import { React, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';

const EscogedorDialog = (props) => {
  const {tipo,setTipo, selec} = props;

  const [selecNumero, setSelecNumero] = useState('');
  const [selecTalla, setSelecTalla] = useState('');

  var tipos = ['Latino', 'Americano', 'Europeo'];
  var numeros = [
    20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44,
  ];
  var tallas = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'];

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ padding: 1 }}
    >
      <Grid item container sx={{ marginBottom: 1 }}>
        <Typography>Tipo de Talla</Typography>
      </Grid>

      <Grid item container>
        {tipos.map((tipoc) => {
          return (
            <Grid
              sx={{
                boxShadow: 5,
                borderRadius: 4,
                border: 1,
                paddingX: 1,
                marginLeft: 1,
                backgroundColor: tipoc === tipo ? 'red' : '#fff',
              }}
              onClick={() => setTipo(tipoc)}
            >
              <Typography>{tipoc}</Typography>
            </Grid>
          );
        })}
      </Grid>

      <Grid item container sx={{ marginTop: 2 }} >
        <Typography>Numero</Typography>
      </Grid>

      <Grid item container>
        {numeros.map((num) => {
          return (
            <Grid
              sx={{
                boxShadow: 5,
                borderRadius: 2,
                border: 1,
                padding: 1,
                margin: 1,
              }}
              onClick={() => selec(num)}
            >
              <Typography
                sx={{ height: 12, width: 12, fontSize: 12, fontWeight: 600 }}
              >
                {num}
              </Typography>
            </Grid>
          );
        })}
      </Grid>

      <Grid item container sx={{ marginTop: 2 }}>
        <Typography>Talla</Typography>
      </Grid>

      <Grid item container>
        {tallas.map((num) => {
          return (
            <Grid
              sx={{
                boxShadow: 5,
                borderRadius: 2,
                border: 1,
                padding: 1,
                margin: 1,
              }}
              onClick={() => selec(num)}
            >
              <Typography
                sx={{
                  width: 26,
                  fontSize: 14,
                  fontWeight: 600,
                  textAlign: 'center',
                }}
              >
                {num}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default EscogedorDialog;
