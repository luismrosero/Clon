import { React, useState } from 'react';
import { Box, Dialog, Grid, IconButton, Typography } from '@material-ui/core';
import {
  IconSquarePlus,
  IconTrash,
  IconTriangleSquareCircle,
} from '@tabler/icons';
import EscogedorDialog from './Componentes/EscogedorDialog';
import ItemBorrar from "./Componentes/ItemBorrar";

const EscogedorTalla = (props) => {
  const { setValor, titulo, valor, tipo, setTipo } = props;
  const [open, setOpen] = useState(false);

  const abrir = () => {
    setOpen(true);
  };

  const cerrar = () => {
    setOpen(false);
  };

  const selec = (val) => {
    var item = valor.items ? valor.items : [];
    item.push(val);
    var col = {
      nombre: 'Tallas',
      items: item,
    };
    setValor(col);
    cerrar();
  };

  return (
    <>
      <Grid item container>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid>
            <Typography sx={{ marginRight: 2, fontWeight: 600 }}>
              {titulo}
            </Typography>
          </Grid>
          {valor.items &&
            valor.items.map((atri) => {
              return (
                <Grid item sx={{ marginRight: 1 }}>
                  <ItemBorrar nombre={atri} valor={valor} setValor={setValor} />
                </Grid>
              );
            })}

          <Grid>
            <IconButton onClick={() => abrir()}>
              <IconSquarePlus stroke={1.5} size={'2rem'} color={'gray'} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={cerrar}>
        <EscogedorDialog tipo={tipo} setTipo={setTipo} selec={selec} />
      </Dialog>
    </>
  );
};

export default EscogedorTalla;
