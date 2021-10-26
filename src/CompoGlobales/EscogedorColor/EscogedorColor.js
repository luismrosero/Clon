import { Box, Dialog, Grid, IconButton, Typography } from '@material-ui/core';
import { IconSquarePlus } from '@tabler/icons';
import { React, useState } from 'react';
import { TwitterPicker } from 'react-color';
import ItemColorBorrar from './ItemColorBorrar';

const EscogedorColor = (props) => {
  const { colores, setColores } = props;
  const [open, setOpen] = useState('');

  const abrirColor = () => {
    setOpen(true);
  };

  const cerrarColor = () => {
    setOpen(false);
  };

  const escogerColor = (e) => {
    console.log(e.hex);
    var item = colores.items ? colores.items : [];
    item.push(e.hex);
    var col = {
      nombre: 'Color',
      items: item,
    };
    setColores(col);
    cerrarColor();
  };

  const colors = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#8bc34a',
    '#cddc39',
    '#ffeb3b',
    '#ffc107',
    '#ff9800',
    '#ff5722',
    '#795548',
    '#607d8b',
    '#f5f5f5',
    '#000000',
    'gray',
  ];
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Grid item container>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid>
            <Typography sx={{ marginRight: 2, fontWeight: 600 }}>
              Color
            </Typography>
          </Grid>
          {colores.items &&
            colores.items.map((color) => {
              return (
                <Grid item>
                <ItemColorBorrar
                  color={color}
                  valor={colores}
                  setValor={setColores}
                />
                </Grid>
              );
            })}

          <Grid>
            <IconButton onClick={() => abrirColor()}>
              <IconSquarePlus stroke={1.5} size={'2rem'} color={'gray'} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={cerrarColor}>
        <TwitterPicker
          onChangeComplete={(color) => escogerColor(color)}
          colors={colors}
        />
      </Dialog>
    </Grid>
  );
};

export default EscogedorColor;
