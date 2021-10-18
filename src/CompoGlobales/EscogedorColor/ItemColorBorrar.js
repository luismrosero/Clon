import { React } from 'react';
import {Box, Grid, Typography} from '@material-ui/core'
import {IconTrash} from "@tabler/icons";

const ItemColorBorrar = (props) => {
  const {color, valor, setValor} = props;

  const borrar = () => {
    var val= valor.items;
    var i = val.indexOf(color);
    val.splice( i, 1 );
    var fin = {
      nombre: valor.nombre,
      items: val,
    }


    setValor(fin)

  }
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Grid item >
      <Box
        backgroundColor={color}
        sx={{ width: 25, height: 25, borderRadius: 4, }}
      />
      </Grid>
      <Grid item sx={{ marginTop: 0.2, marginRight: 1 }} onClick={() => borrar()} >
        <IconTrash size={'1rem'} stroke={1} color={'gray'} />
      </Grid>
    </Grid>
    );
};

export default ItemColorBorrar;