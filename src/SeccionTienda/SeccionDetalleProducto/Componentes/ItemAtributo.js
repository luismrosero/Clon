/*******************************************************
 * Nombre:    ItemAtributo
 * Resumen:   Este componente mostrara el tributo en letras
 *            y si detecta que es color una imagen de eses
 *            color
 * Props:
 * Librerias:
 * Autor:
 * Tiempo :     hrs
 ********************************************************/
import { React, useEffect, useState } from 'react';
import {Box, Grid, Typography} from '@material-ui/core'

const ItemAtributo = (props) => {
  const {item, atributo, addSeleccion, escogido, num} = props;
  const [seleccionado,setSeleccionado] = useState(false);

  let color = '#A3A3A300';
  var texto = item;
  if (atributo.nombre === 'Color') {
    color = item;
    texto = '';
  }

  useEffect(() => {

    if(escogido === num){
      setSeleccionado(true)
    }else{
      setSeleccionado(false);
    }
  }, [escogido]);


  return (
    <Grid item>
      <Box
        key={item}
        sx={{
          paddingX: 1,
          minHeight: 20,
          minWidth: 8,
          borderRadius: 3,
          // boxShadow: 6,
          marginLeft: 1,
          marginTop: 1.5,
          paddingBottom: 0.5,
          color: '#fff',
          fontSize: 16,
          fontWeight: 600,
          border: seleccionado  ? 1 : 0,
          borderColor: "red"
        }}
        backgroundColor={color}
       onClick={() => addSeleccion(atributo.nombre, item, num)}
      >
        <Typography sx={{ marginBottom: -1, fontWeight: 600 }}>
          {texto}
        </Typography>
      </Box>
    </Grid>
    );
};

export default ItemAtributo;