import React from "react";
import { Grid, InputBase } from "@material-ui/core";

const EditIcon = (props) => {
  const { titulo, Icono, tipo, valor, setValor } = props;
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={{ border: 1, borderRadius: 2, minHeight: 45, backgroundColor: "#fff",}}
    >
      <InputBase
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder={titulo}
        startAdornment={<Icono />}
        type={tipo}
      />
    </Grid>
  );
};

export default EditIcon;
