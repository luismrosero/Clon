import {
  Typography,
  Grid,
  ImageListItem,
  ImageListItemBar,
  Grow
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import React from "react";
import BarraAbajo from "./BarraAbajo";
import { makeStyles } from "@material-ui/styles";
import laso from "./../Iconos/laso.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `url(${laso})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));

const GaleriaProductos = (props) => {
  const { productos, click, tienda } = props;

  const classes = useStyles();

  const estilo = {
    background: tienda ? tienda.paleta.gradient : "",
    titleWrapBelow: { shape: { padding: 0 } },
  };

  const Custom = withStyles((theme) => ({
    titleWrap: {
      padding: 6,
    },
  }))(ImageListItemBar);

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      {productos.map((producto) => {
        return (
          <Grid item xs={6} sx={{ padding: 1 }} onClick={() => click(producto)} key={producto.id} >
      
        <Grow
          in={producto != null}
          style={{ transformOrigin: '0 0 0' }}
          {...(producto ? { timeout: 1000 } : {})}
        >
     
       
            <Grid item container sx={{ justifyContent: "center" }}>
              <ImageListItem
                key={producto.img}
                sx={{ borderRadius: 10, boxShadow: 6 }}
              >
              {
                /*
                
                 <Grid item>
                  <Typography
                    className={classes.root}
                    sx={{
                      fontSize: 12,
                      color: "#fff",
                      paddingLeft: 0.5,
                      paddingRight: 1.8,
                      fontWeight: 400,
                      position: "absolute",
                      marginTop: 2.5,
                      paddingY: 0.2                      
                    }}
                  >
                    Oferta
                  </Typography>
                </Grid>
                */
              } 
                <img
                  src={producto.imgs[0]}
                  style={{ width: 170, height: 230, borderRadius: 20 }}
                  loading="lazy"
                />
                <Custom
                  sx={{
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                  }}
                  style={estilo}
                  title={<BarraAbajo producto={producto} />}
                  itemProp={{ style: { background: "red" } }}
                  position="bottom"
                />
              </ImageListItem>
            </Grid>
            </Grow>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default GaleriaProductos;
