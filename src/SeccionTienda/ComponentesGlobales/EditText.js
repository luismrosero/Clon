import React from "react";
import { Grid, InputBase } from "@material-ui/core";

const EditText = (props) => {
  const { titulo, valor, setValor, color } = props;
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={{ border: 2, padding: 1, borderRadius: 2 }}
      style={{borderColor: color}}
    >
      <InputBase
      fullWidth
        placeholder={titulo}
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        sx={{ color: "#fff", fontWeight: 500 }}
      />
    </Grid>
  );
};

export default EditText;
