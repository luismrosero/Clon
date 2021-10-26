import React from 'react';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { motion } from 'framer-motion';

const BotonAccionIcono = (props) => {
  const { titulo, click, Icono, tienda, medio, cargo } = props;

  const estilo = {
    background: tienda.paleta.gradient,
    boxShadow: tienda.paleta.sombra,
  };

  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      <Grid
        item
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          borderRadius: 6,
          paddingX: 3,
          paddingY: 1,
          maxWidth: 280,
          minHeight: 45,
        }}
        onClick={(e) => click(medio)}
        style={estilo}
      >
        {!cargo ? (
          <Typography sx={{ fontSize: 16, fontWeight: 600, marginRight: 1 }}>
            {titulo}
          </Typography>
        ) : (
          <Typography sx={{ fontSize: 16, fontWeight: 600, marginRight: 1 }}>
            Abriendo...
          </Typography>
        )}

        <Icono />
      </Grid>
    </motion.div>
  );
};

export default BotonAccionIcono;
