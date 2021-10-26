import React from "react";
import { Grid, InputBase } from "@material-ui/core";

const EditIconTabler = (props) => {
  const { titulo, Icono, tipo, valor, setValor, stroke, size, color } = props;
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={{
        border: 1,
        borderRadius: 2,
        minHeight: 45,
        backgroundColor: "#fff",
        paddingX: 1 
      }}
    >
      <Grid item xs={1} >
        <Icono stroke={stroke} size={size} color={color} />
      </Grid>
      <Grid item xs={10}  sx={{marginLeft: 1}} >
        <InputBase
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder={titulo}
          type={tipo}
         
        />
      </Grid>
    </Grid>
  );
};

export default EditIconTabler;
