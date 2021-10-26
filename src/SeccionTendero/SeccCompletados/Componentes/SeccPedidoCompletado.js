import { React, useState, useEffect } from "react";
import { Grid, Typography, Snackbar } from "@material-ui/core";
import TextTituloContenido from "../../../CompoGlobales/TextTituloContenido";
import IconoAtras from "./../Iconos/IconoAtras";
import TextIcono from "../../../CompoGlobales/TextIcono";
import IconoDinero from "./../Iconos/IconoDinero";
import BotonAccion from "./../../../CompoGlobales/BotonAccion";
import ItemProductoEspera from "./../../SeccEspera/Componente/ItemProductoEspera";
import { CopyToClipboard } from "react-copy-to-clipboard";

const SeccPedidoCompletado = (props) => {
  const { pedido, cerrar } = props;
  const [valEnvio, setValEnvio] = useState(0);
  const [link, setLink] = useState("");
  const [open, setOpen] = useState(false);

  const abrirSnak = () => {
    setOpen(true);
  };

  const cerrarSnak = () => {
    setOpen(true);
  };

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  const copiarLink = () => {
    abrirSnak();
  };

  const getLink = (pedido) => {
    var item = "https://starfy-7a1d3.web.app/recepcion/?id=" + pedido.id;
    if (pedido.referencia != null) {
      item += "&ref_payco=" + pedido.referencia;
    } else {
      item += "&ref_payco=-1";
    }
    return item;
  };

  useEffect(() => {
    var precio = 0;
    if (pedido != null && pedido.pedidos != null) {
      for (var i = 0; i < pedido.pedidos.length; i++) {
        precio += pedido.pedidos[i].precio;
      }

      setValEnvio(pedido.valTotal - precio);
    }

    var li = getLink(pedido);
    setLink(li);
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
        Pedido Completado
      </Typography>

      <Grid item container sx={{ marginTop: 2 }}>
        <Typography>{pedido.id}</Typography>
      </Grid>

      <Grid item container>
        <Typography>{pedido.fechaCreacion}</Typography>
      </Grid>

      <Grid item container sx={{ marginTop: 2 }}>
        <TextIcono Icono={IconoDinero} titulo={pedido.tipoPago} />
      </Grid>
      <Grid item container>
        <TextIcono Icono={IconoDinero} titulo={pedido.tranportadora} />
      </Grid>

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
      <Grid item container sx={{ marginBottom: 4 }}>
        <TextTituloContenido
          titulo={"Departamento: "}
          contenido={pedido.departamento}
        />
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
        <CopyToClipboard text={link}>
          <Grid
            sx={{
              padding: 1,
              borderRadius: 2,
              backgroundColor: "#808080",
              boxShadow: 1,
            }}
            onClick={() => copiarLink()}
          >
            <Typography sx={{ color: "#fff" }}>
              Obtener Link para cliente
            </Typography>
          </Grid>
        </CopyToClipboard>
      </Grid>

      <Snackbar
        autoHideDuration={3000}
        open={open}
        onClose={cerrarSnak}
        message="Link copiado"
      />
    </Grid>
  );
};

export default SeccPedidoCompletado;
