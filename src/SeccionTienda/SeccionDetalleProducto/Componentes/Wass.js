import { React, useState } from "react";
import { Box, Menu, MenuItem } from "@material-ui/core";
import IconoWass from "./IconoWass";
import Ascesor from "./Ascesor";

const Wass = (props) => {
  const { vendedores } = props;
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const abrirMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const cerrarMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(false);
  };

  var configuracion_ventana =
  "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";

function abrir_img(item) {
  window.open(item, "Pagina_CNN", configuracion_ventana);
}


  const abrirWass = (wass) =>{

    var est = "https://api.whatsapp.com/send?phone=57" + wass;
    abrir_img(est);
  }
  return (
    <>
      <Box
        sx={{
          paddingX: 1,
          paddingY: 0.5,
          backgroundColor: "#fff",
          borderRadius: 10,
        }}
        onClick={(event) => abrirMenu(event)}
      >
        <IconoWass />
      </Box>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={cerrarMenu}
        PaperProps={{ style: { borderRadius: 20, backgroundColor: "#333333" } }}
      >
        {vendedores.map((vendedor) => {
          return (
            <MenuItem key={vendedor.wass} onClick={() => abrirWass(vendedor.wass)} >
              <Ascesor vendedor={vendedor} />
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default Wass;
