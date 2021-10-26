import { Grid, Typography, Box } from '@material-ui/core';
import { React, useState } from 'react';
import ItemAtributo from './ItemAtributo';
import AtributoPuro from "./AtributoPuro";

const Atributos = (props) => {
  const { atributos, seleccion, setSeleccion, tipo } = props;


  const addSeleccion = (nombre, item,) => {

    console.log(nombre + '  ' + item);
    var sel = { nombre: nombre, item: item };

    var array = seleccion;
    var este = [];

    if (array.length > 0) {
      for (var i = 0; i < array.length; i++) {
        if (array[i].nombre === nombre) {
          este.splice(i, 1);
        } else {
          este.push(array[i]);
        }
      }
      este.push(sel);

      setSeleccion(este);
    } else {
      este.push(sel);
      setSeleccion(este);
    }
  };



  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      {atributos.map((atributo) => {
        return (
          <Grid item key={atributo.nombre}>
           <AtributoPuro atributo={atributo} addSeleccion={addSeleccion}  tipo={tipo} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Atributos;
