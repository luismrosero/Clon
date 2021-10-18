import { React } from 'react';
import {Grid, Typography} from '@material-ui/core'
import {IconTrash} from "@tabler/icons";

const ItemBorrar = (props) => {
  const {nombre, valor, setValor} = props;

  const borrar = () => {
    var val= valor.items;
    var i = val.indexOf(nombre);
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
      <Grid item>
        <Typography>{nombre}</Typography>
      </Grid>

      <Grid item sx={{ marginTop: 0.2 }} onClick={() => borrar()} >
        <IconTrash size={'1rem'} stroke={1} color={'gray'} />
      </Grid>
    </Grid>
    );
};

export default ItemBorrar;