import { Grid, Typography } from '@material-ui/core'
import React from 'react'

const TextTituloContenido = (props) => {
    const {titulo,contenido} = props;
    return (
        <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
      >

          <Grid item >

              <Typography sx={{fontSize: 14, fontWeight: 600, marginRight: 2}} >{titulo}</Typography>
          </Grid>

          
          <Grid item >

              <Typography sx={{fontSize: 14, fontWeight: 400}}  >{contenido}</Typography>
          </Grid>
            
        </Grid>
    )
}

export default TextTituloContenido
