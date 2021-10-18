import React from 'react';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { motion } from 'framer-motion';

const BotonCarga = (props) => {
  const { titulo, click, tienda, cargo } = props;

  const estilo = {
    background: tienda.paleta.gradient,
    boxShadow: tienda.paleta.sombra,
  };

  return (
    <motion.div whileTap={{ scale: 0.94 }}>
      <Grid
        item
        sx={{ borderRadius: 6, paddingX: 3, paddingY: 1 }}
        onClick={(e) => click(e)}
        style={estilo}
      >
        {!cargo ? (
          <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
            {titulo}
          </Typography>
        ) : (
          <Typography sx={{ fontSize: 18, fontWeight: 600 }}>
            Abriendo
          </Typography>
        )}
      </Grid>
    </motion.div>
  );
};

export default BotonCarga;
