import React from "react";
import { Grid, Typography,Box } from "@material-ui/core";

const AtributoBar = (props) => {
  const { atributo } = props;
  var color = "#A3A3A300";
  var texto = atributo.item;
  if (atributo.nombre == "Color") {
    color = atributo.item;
    texto = "";
  }
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Grid item>
        <Typography sx={{color: "#fff", fontWeight: 600}} >{atributo.nombre === "Color" ? "Colores" : atributo.nombre }</Typography>
      </Grid>

      <Grid item>
        <Box
          sx={{
            paddingX: 1,
            minHeight: 20,
            minWidth: 8,
            borderRadius: 3,      
            marginLeft: 1,           
            paddingBottom: 0.5,
            color: "#fff",
            fontSize: 16,
            fontWeight: 600,
          }}
          backgroundColor={color}
        >
          <Typography sx={{marginBottom: -1, fontWeight: 600}} >
          {texto}

          </Typography>
        
        </Box>
      </Grid>
    </Grid>
  );
};

export default AtributoBar;
