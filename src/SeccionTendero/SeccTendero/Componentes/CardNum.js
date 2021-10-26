import React from 'react'
import { Grid, Typography } from '@material-ui/core';

const CardNum = (props) => {
    const {numero, titulo} = props;
    return (
        <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          backgroundColor: "#fff",
          borderRadius: 2,
          boxShadow: 1,
          paddingX: 2,
          paddingY: 1
        }}
      >
        <Typography sx={{ fontSize: 25 }}>{numero} </Typography>
        <Typography sx={{ fontSize: 16 }}>{titulo}</Typography>
      </Grid>
    )
}

export default CardNum
