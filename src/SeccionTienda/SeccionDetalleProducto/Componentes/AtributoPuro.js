/*******************************************************
 * Nombre:    AtributoPuro
 * Resumen:   Componente de atributo
 * Props:
 * Librerias:
 * Autor:
 * Tiempo :     hrs
 ********************************************************/
import {React, useState} from 'react';
import {Grid, Typography} from '@material-ui/core'
import ItemAtributo from "./ItemAtributo";

const AtributoPuro = (props) => {
  const {atributo, addSeleccion, tipo} = props
  const [escogido,setEscogido] = useState('');

  const getNombre = (nombre) => {
    if (nombre === 'Colores' || nombre === 'Color') {
      return 'COLOR:';
    } else if (
      (tipo === undefined || tipo === 'Latino') &&
      nombre === 'Tallas'
    ) {
      return 'TALLAS:';
    } else if (tipo === 'Americano' && nombre === 'Tallas') {
      return 'TALLAS (USA):';
    } else if (tipo === 'Europeo' && nombre === 'Tallas') {
      return 'TALLAS (EUR):';
    }
  };


  const selec = (nombre, item, num) => {
    setEscogido(num)
 addSeleccion(nombre, item)
  };


  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={{
        border: 1,
        borderColor: '#B2AFAE80',
        paddingBottom: 0.8,
        paddingX: 1,
        marginTop: 1,
        borderRadius: 2,
        minWidth: 340,
      }}
    >
      <Grid item>
        <Typography sx={{ marginTop: 1, color: '#fff' }}>
          {getNombre(atributo.nombre)}
        </Typography>
      </Grid>

      {atributo.items.map((item, index) => {
        return (
          <ItemAtributo
            item={item}
            key={index}
            atributo={atributo}
            addSeleccion={selec}
            num={index}
            escogido={escogido}
          />
        );
      })}
    </Grid>
    );
};

export default AtributoPuro;