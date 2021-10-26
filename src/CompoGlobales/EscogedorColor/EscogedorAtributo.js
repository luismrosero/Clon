import { Box, Dialog, Grid, IconButton, Typography } from "@material-ui/core";
import { IconSquarePlus, IconTriangleSquareCircle } from "@tabler/icons";
import { React, useState } from "react";
import BotonAccion from "../BotonAccion";
import EditIconTabler from "./../EditIconTabler";

const EscogedorAtributo = (props) => {
  const { titulo, valor, setValor } = props;
  const [open, setOpen] = useState("");
  const [item, setItem] = useState("");


  const abrirColor = () => {
    setOpen(true);
  };

  const cerrarColor = () => {
    setOpen(false);
  };

  const llenarAtributo = () =>{

    var it = valor.items ? valor.items : [];
    it.push(item);
    var col ={
      nombre: titulo,
      items: it,

    }
    setValor(col);
    setItem("")
    cerrarColor();
    
  }

  return (
    <>
      <Grid item container>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid>
            <Typography sx={{ marginRight: 2, fontWeight: 600 }}>{titulo}</Typography>
          </Grid>
          {valor.items && valor.items.map((atri) => {
            return (
              <Typography sx={{marginRight: 1}} >{atri}</Typography>
            );
          })}

          <Grid>
            <IconButton onClick={() => abrirColor()}>
              <IconSquarePlus stroke={1.5} size={"2rem"} color={"gray"} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={cerrarColor}>
        <Grid sx={{ padding: 2 }}>
          <EditIconTabler
            titulo={titulo.substring(0, titulo.length - 1)}
            Icono={IconTriangleSquareCircle}
            stroke={1.5}
            size={"1.5rem"}
            color={"gray"}
            valor={item}
            setValor={setItem}
          />
          <Grid item container sx={{justifyContent: "center", marginTop: 3}} >
            <BotonAccion titulo={"Agregar"} click={llenarAtributo} />
          </Grid>
        </Grid>
      </Dialog>
    </>
  );
};

export default EscogedorAtributo;
