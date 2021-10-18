/*******************************************************
 * Nombre:    BotonAccion
 * Resumen:   Botones que generan una accion al darles
 *            click
 * Props:
 *  click  -> funcion que realizara en el evento onclick
 *  titulo -> titulo que mostrar el boton
 * Librerias: framer motion
 * Autor:     Luis Rosero
 * Tiempo :   10 min
 ********************************************************/
import { React } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';

const BotonAccion = (props) => {
  const { click, titulo } = props;
  return (
    <motion.div whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        sx={{
          paddingX: 4,
          paddingY: 2.2,
          backgroundColor: "#000000" + 99,
          borderRadius: 2,
          boxShadow: 4,
          cursor: 'pointer',
        }}
        onClick={click}
      >
        <Typography
          sx={{
            color: '#ffffff',
            fontWeight: 600,
            fontSize: 16,
            cursor: 'pointer',
            textAlign: 'center',
          }}
        >
          {titulo}
        </Typography>
      </Grid>
    </motion.div>
  );
};

export default BotonAccion;
