import { React, useState } from "react";
import { Grid, Typography, CircularProgress } from "@material-ui/core";
import IconoSubir from "./Iconos/IconoSubir";
import { motion } from "framer-motion"

const BotonCarga = (props) => {
  const { titulo, click, cargando, setCargando } = props;
  const [seguro, setSeguro] = useState(true);

  const disparo = () => {
    if (seguro) {
      setSeguro(false);
      click();
      
      setTimeout(function () {
        setSeguro(true);
      }, 5000);
    }
  };

  return (
    <motion.div whileTap={{ scale: 0.85 }} style={{width: 260}} >
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        justifyContent: "center",
        backgroundColor: "#808080",
        borderRadius: 2,
        boxShadow: 4,
        paddingY: 0.5,
        height: 45,
      }}
      onClick={() => disparo() }
    >
      {cargando === false ? (
        <IconoSubir />
      ) : (
        <CircularProgress
          size={18}
          sx={{
            color: "#EC1B3B",
          }}
        />
      )}

      <Typography sx={{ color: "#fff", fontWeight: 500, marginLeft: 2 }}>
        {titulo}
      </Typography>
    </Grid>
    </motion.div>
  );
};

export default BotonCarga;
