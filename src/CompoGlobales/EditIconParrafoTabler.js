import React from "react";
import { Grid, InputBase } from "@material-ui/core";

const EditIconParrafoTabler = (props) => {
  const { titulo, Icono, valor, setValor, stroke, size, color } = props;
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        border: 1,
        borderRadius: 3,
        paddingTop: 0.5,
        backgroundColor: "#fff",
        paddingX: 1
      }}
    >
      <Grid item xs={1} >
        <Icono stroke={stroke} size={size} color={color} />
      </Grid>
      <Grid item  xs={10} sx={{marginLeft: 1}} >
        <InputBase
          value={valor}   
          multiline={true}
          onChange={(e) => setValor(e.target.value)}
          placeholder={titulo}
          fullWidth={true}
          rows={5}
          sx={{width: 240}}
        
        />
      </Grid>
    </Grid>
  );
};

export default EditIconParrafoTabler;
