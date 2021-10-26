import { Autocomplete, InputBase } from "@material-ui/core";
import React from "react";

const EdtAutocompletado = (props) => {
  const { titulo, lista,setValor, valor } = props;

 
  return (
    <Autocomplete
      disablePortal   
      value={valor}  
      onSelectCapture={(e) => setValor(e.target.value)}
      options={lista}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <InputBase
          fullWidth
          
          ref={params.InputProps.ref}
          inputProps={params.inputProps}
          placeholder={titulo}
          sx={{
            border: 2,
            padding: 1,
            borderRadius: 2,
            minHeight: 50,         
            borderColor: "gray" 
          }}

        />
      )}
    />
  );
};

export default EdtAutocompletado;
