import { Grid, Typography, Box } from "@material-ui/core";
import { React } from "react";

const Atributos = (props) => {
  const { atributos } = props;


 
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      {atributos.map((atributo) => {
        var color = "#A3A3A300";
        var texto = atributo.item;
        if (atributo.nombre === "Color") {
          color = atributo.item;
          texto = "";
        }
        return (
          <Grid item key={atributo.item}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Typography sx={{ width: 60, marginTop: 1, fontSize: 13, color: "#707070" }}>
                {atributo.nombre === "Colores" ? "COLOR" : atributo.nombre.toUpperCase() }
              </Typography>

              
                  <Box                  
                    sx={{
                      paddingX: 1,
                      minHeight: 20,
                      minWidth: 8,
                      borderRadius: 3,                   
                      marginLeft: 1,
                      marginTop: 1,
                      paddingBottom: 0.5,
                      color: "#fff",
                      fontSize: 16,
                      fontWeight: 600,
                    }}
                    backgroundColor={color}
                 
                  >
                    <Typography sx={{color: "#333333", marginBottom: -1, fontWeight: 600}} >
                    {texto}
                    </Typography>
                    
                  </Box>
              
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Atributos;
