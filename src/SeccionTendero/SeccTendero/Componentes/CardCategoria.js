import React from 'react'
import { Grid, Typography } from '@material-ui/core';

const CardCategoria = (props) => {
    const{ titulo} = props;
    return (
        <Grid
        item
        container
        sx={{
          backgroundColor: "#fff",
          borderRadius: 2,
          justifyContent: "center",
          paddingY: 4,
        }}
      >
        <Typography sx={{ fontWeight: 600 }}>{titulo}</Typography>
        </Grid>
    )
}

export default CardCategoria
