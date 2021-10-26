import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/core/Autocomplete';

export default function Seleccionar(props) {
    const {titulo, opciones, valor, setValor} = props;
  return (
    <Autocomplete
    value={valor}
    onChange={(event, newValue) => {
        setValor(newValue);
      }}
      disablePortal
      fullWidth
      id="combo-box-demo"
      options={opciones}    
      renderInput={(params) => <TextField {...params} label={titulo} />}
    />
  );
}

