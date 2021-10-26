import { React, useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Grid, Typography } from "@material-ui/core";

const CategoriasTienda = (props) => {
  const { categorias, click, tienda } = props;
  const [value, setValue] = useState(0);

  const estilo = {
    color: tienda ? tienda.paleta.acento : "",  
  }

  const estiloBarra = {  
    background: tienda ? tienda.paleta.acento : "",
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid item container  sx={{ flexGrow: 1, maxWidth: "100%", justifyContent: "center" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={true}
        TabIndicatorProps={{ style: estiloBarra }}
      
      >
        {tienda ? categorias.map((categoria) => {
          return (
            <Tab
            key={categoria}
            onClick={() => click(categoria)}
              label={
                <Typography
                  sx={{ fontSize: 14, fontWeight: 600 }}
                  style={estilo}
                >            
                  {categoria}
                </Typography>
              }
            />
          );
        }) : ""}
      </Tabs>
    </Grid>
  );
};

export default CategoriasTienda;
