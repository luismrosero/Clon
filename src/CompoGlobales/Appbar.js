import { Typography } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import React from 'react'
import IconoCerrar from './Iconos/IconoCerrar';



const Appbar = (props) => {
    const {cerrar, titulo} = props;
   
    return (
        <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{backgroundColor: "#EC1B3B", paddingY: 1.5, paddingX: 2, boxShadow: 4}}
        
      >

          <Typography sx={{color: "#fff", fontWeight: 600}} >{titulo}</Typography>

          <IconoCerrar cerrar={cerrar} />


        </Grid>
    )
}

export default Appbar
