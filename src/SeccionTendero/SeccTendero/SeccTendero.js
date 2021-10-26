import { React, useState, useEffect } from "react";
import { Dialog, Grid } from "@material-ui/core";
import CardNumPedido from "./Componentes/CardNumPedido";
import SeccCategoria from "./Componentes/SeccCategoria";
import CardNum from "./Componentes/CardNum";
import Encabezado from "./Componentes/Encabezado";
import BotonAccion from "./../../CompoGlobales/BotonAccion";
import fire from "../../fire";
import { PEDIDOS, TIENDAS } from "../../Constantes";
import { TiendaDoc } from "../../Entidades/TiendaDoc";
import { PedidoDoc } from "./../../Entidades/PedidoDoc";
import SeccNuevoProducto from "./../SeccNuevoProducto/SeccNuevoProducto";

const SeccTendero = (props) => {
  const { tendero } = props;
  const [numero, setNumero] = useState(0);
  const [tienda, setTienda] = useState("");
  const [numProcesar, setNumProcesar] = useState(0);
  const [numEspera, setNumEspera] = useState(0);
  const [numAbandonados, setNumAbandonados] = useState(0);
  const [numCompletado, setNumCompletado] = useState(0);
  const [pedidosProcesar, setPedidosProcesar] = useState([]);
  const [pedidosEspera, setPedidosEspera] = useState([]);
  const [pedidosCompletados, setPedidosCompletados] = useState([]);
  /////////////////////////////////////////////////////////
  const [openProducto, setOpenProducto] = useState(false);

  const abrirProducto = () => {
    setOpenProducto(true);
  };

  const cerrarProducto = () => {
    setOpenProducto(false);
  };

  const obtenerPedidos = (tie) => {
    fire
      .firestore()
      .collection(PEDIDOS)
      .where("idTienda", "==", tie.id)
      .orderBy("fechaCreacion", "desc")
      .onSnapshot((snap) => {
        var proses = 0;
        var espe = 0;
        var aban = 0;
        var comple = 0;
        var pros = [];
        var espera = [];
        var completado = [];
        setPedidosProcesar(pros);
        setPedidosCompletados(completado);
        setPedidosEspera(espera);
        setNumProcesar(proses);
        setNumEspera(espe);
        setNumCompletado(comple);
        setNumAbandonados(aban);
        snap.forEach((doc) => {
          var ped = new PedidoDoc(doc);
          switch (ped.estado) {
            case "Aceptada":
              setNumProcesar(++proses);
              setPedidosProcesar((pros) => pros.concat(ped));
              break;
            case "Pendiente":
              setNumEspera(++espe);
              setPedidosEspera((espera) => espera.concat(ped));
              break;
            case "Completado":
              setNumCompletado(++comple);
              setPedidosCompletados((completado) => completado.concat(ped));
              break;
            default:
              setNumAbandonados(++aban);
              //  setPedidosProcesar((pros) => pros.concat(ped))
              break;
          }
        });
      });
  };

  useEffect(() => {
    fire
      .firestore()
      .collection(TIENDAS)
      .doc(tendero.idTienda)
      .get()
      .then((doc) => {
        if (doc.exists) {
          var tie = new TiendaDoc(doc);
          setTienda(tie);
          obtenerPedidos(tie);
        }
      })
      .catch((err) => {
        alert(err);
      });
  }, [tendero]);
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item container>
        <Encabezado tienda={tienda} />
      </Grid>

      <Grid item container sx={{ padding: 2 }}>
        <CardNumPedido
          titulo={"Pedidos Para Procesar"}
          numero={numProcesar}
          clave={"procesar"}
          tendero={tendero}
          pedidos={pedidosProcesar}
        />
      </Grid>
      <Grid item container sx={{ padding: 2 }}>
        <CardNumPedido
          titulo={"Pedidos En Espera De Pago"}
          numero={numEspera}
          clave={"espera"}
          tendero={tendero}
          pedidos={pedidosEspera}
        />
      </Grid>
      {/*
        <Grid item container sx={{ padding: 2 }}>
        <CardNumPedido titulo={"Pedidos Abandonados"} numero={numAbandonados} />
      </Grid>
       */}

      <Grid item container sx={{ padding: 2 }}>
        <CardNumPedido
          titulo={"Pedidos Completados"}
          numero={numCompletado}
          clave={"completado"}
          tendero={tendero}
          pedidos={pedidosCompletados}
        />
      </Grid>

      {/*
<Grid item container sx={{ padding: 2 }}>
        <SeccCategoria />
      </Grid>
*/}

      <Grid item container sx={{ padding: 2 }}>
        <CardNum titulo={"Historias en la pagina"} numero={4} />
      </Grid>

      {/*
 <Grid item container sx={{ padding: 2 }}>
        <CardNum titulo={"Numero de productos"} numero={50} />
      </Grid>
*/}

      <Grid item container sx={{ padding: 2 }}>
        <BotonAccion titulo={"Agregar producto"} click={abrirProducto} />
      </Grid>

      {/*
 <Grid item container sx={{ padding: 2 }}>
        <BotonAccion titulo={"Editar Tienda"} />
      </Grid>
*/}

      <Dialog fullScreen={true} open={openProducto} onClose={cerrarProducto}>
        <SeccNuevoProducto cerrar={cerrarProducto} tienda={tienda} />
      </Dialog>
    </Grid>
  );
};

export default SeccTendero;
