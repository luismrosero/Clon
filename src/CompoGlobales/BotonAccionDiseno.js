import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { motion } from "framer-motion"

const BotonAccionDiseno = (props) => {
  const { titulo, click } = props;
  return (
    <motion.div whileTap={{ scale: 0.82 }} style={{width: 180}} >
    <Grid
      item
      container
      sx={{
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#0BECA8",
        borderRadius: 5,
        boxShadow: "1px 1px 7px 0.5px #0BECA8",
        paddingY: 0.5,
        minHeight: 40,
      }}
      onClick={click}
    >
      
      <Typography sx={{ color: "#333333", fontWeight: 600 }}>{titulo}</Typography>
    </Grid>
    </motion.div>
  );
};

export default BotonAccionDiseno;
