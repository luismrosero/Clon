import { React, useState } from 'react'
import { Grid, Avatar, Typography, Menu, MenuItem, ListItemText } from '@material-ui/core';
import IconoMenu from '../Iconos/IconoMenu';
import fire from '../../../fire';

const Encabezado = (props) => {
  const {tienda} = props;
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const salir = () =>{
        fire.auth().signOut();
    }
  

    const abrirMenu = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
      };
    
      const cerrarMenu = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(false);
      };
    return (
        <>
        <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ padding: 2 }}
      >
        <Avatar src={tienda.logo} sx={{ height: 80, width: 80 }} />

        <Typography sx={{ color: "#fff" }}>{tienda.nombre}</Typography>

        <IconoMenu click={abrirMenu} />
      </Grid>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={cerrarMenu}
        PaperProps={{ style: { borderRadius: 4 } }}
      >
        <MenuItem>
          <ListItemText primary={"salir"} onClick={() => salir()} />
        </MenuItem>
      </Menu>
      </>
    )
}

export default Encabezado
