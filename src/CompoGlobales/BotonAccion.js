import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { motion } from "framer-motion"

const BotonAccion = (props) => {
  const { titulo, click } = props;
  return (
    <motion.div whileTap={{ scale: 0.82 }} style={{width: 200}} >
    <Grid
      item
      container
      sx={{
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#808080",
        borderRadius: 2,
        boxShadow: 4,
        paddingY: 0.5,
        minHeight: 40,
      }}
      onClick={click}
    >
      
      <Typography sx={{ color: "#fff", fontWeight: 500 }}>{titulo}</Typography>
    </Grid>
    </motion.div>
  );
};

export default BotonAccion;
