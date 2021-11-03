import { Button, Grid, Dialog } from "@material-ui/core";
import { React, useState } from "react";
import SeccLogin from "./SeccLogin/SeccLogin";

const SeccionLanding = (props) => {
  const {ingreso, setFormu} = props;
  const [openLogin,setOpenLogin] = useState(false);



  const abrirLogin = () =>{
    setOpenLogin(true)
  }

  
  const cerrarLogin = () =>{
    setOpenLogin(false)
  }

  return (
    <>
    <Grid container direction="row" justifyContent="flex-end" alignItems="center">
      <Grid item sx={{ padding: 4 }}>
        <Button variant="contained" onClick={() => abrirLogin()} >Ingresar a como tendero</Button>
      </Grid>

    </Grid>


    <Dialog open={openLogin} onClose={cerrarLogin} >
<SeccLogin ingreso={ingreso} setFormu={setFormu} />

    </Dialog>



    </>
  );
};

export default SeccionLanding;
