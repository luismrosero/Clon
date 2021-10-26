import { React, useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import TextTituloContenido from "../../../CompoGlobales/TextTituloContenido";
import IconoAtras from "./../Iconos/IconoAtras";
import TextIcono from "../../../CompoGlobales/TextIcono";
import IconoDinero from "./../Iconos/IconoDinero";
import ItemProductoEspera from "./ItemProductoEspera";
import BotonAccion from "./../../../CompoGlobales/BotonAccion";
import fire from "./../../../fire";
import { PEDIDOS } from "./../../../Constantes";

const SeccPedidoEspera = (props) => {
  const { pedido, cerrar } = props;
  const [valEnvio, setValEnvio] = useState(0);

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  const cambiarEstado = () => {
    fire
      .firestore()
      .collection(PEDIDOS)
      .doc(pedido.id)
      .update({ estado: "Aceptada" })
      .then((dox) => {
        alert("El pedido ahora esta listo para ser procesado")
        cerrar();
      });
  };

  useEffect(() => {
    var precio = 0;
    if (pedido != null && pedido.pedidos != null) {
      for (var i = 0; i < pedido.pedidos.length; i++) {
        precio += pedido.pedidos[i].precio;
      }

      setValEnvio(pedido.valTotal - precio);
    }
  }, [pedido]);

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ padding: 2 }}
    >
      <IconoAtras cerrar={cerrar} />
      <Typography sx={{ fontSize: 16, fontWeight: 600, marginLeft: 6 }}>
        Pedido En Espera De Pago
      </Typography>

      <Grid item container sx={{ marginTop: 2 }}>
        <TextTituloContenido titulo={"Cliente: "} contenido={pedido.nombre} />
      </Grid>

      <Grid item container>
        <TextTituloContenido titulo={"Celular: "} contenido={pedido.telefono} />
      </Grid>
      <Grid item container>
        <TextTituloContenido
          titulo={"Direccion: "}
          contenido={pedido.direccion}
        />
      </Grid>
      <Grid item container>
        <TextTituloContenido titulo={"Barrio: "} contenido={pedido.barrio} />
      </Grid>
      <Grid item container>
        <TextTituloContenido titulo={"Ciudad: "} contenido={pedido.ciudad} />
      </Grid>
      <Grid item container>
        <TextTituloContenido
          titulo={"Departamento: "}
          contenido={pedido.departamento}
        />
      </Grid>
      <Grid item container sx={{ marginTop: 2 }}>
        <TextIcono Icono={IconoDinero} titulo={pedido.tipoPago} />
      </Grid>

      <Grid item container sx={{ marginTop: 2 }}>
        <Typography>{pedido.id}</Typography>
      </Grid>

      <Grid item container>
        <Typography>{pedido.fechaCreacion}</Typography>
      </Grid>

      {pedido.pedidos.map((pedido) => {
        return <ItemProductoEspera articulo={pedido} />;
      })}

      <Grid item container sx={{ justifyContent: "flex-end", marginTop: 6 }}>
        <Typography sx={{ borderBottom: 1 }}>
          {"Valor envio: " + formatterPeso.format(valEnvio)}
        </Typography>
      </Grid>

      <Grid item container sx={{ justifyContent: "flex-end" }}>
        <Typography>
          {"Valor Total: " + formatterPeso.format(pedido.valTotal)}
        </Typography>
      </Grid>

      <Grid item container sx={{ justifyContent: "center", marginTop: 6 }}>
        <BotonAccion titulo={"Marcar como pagado"} click={cambiarEstado} />
      </Grid>
    </Grid>
  );
};

export default SeccPedidoEspera;
