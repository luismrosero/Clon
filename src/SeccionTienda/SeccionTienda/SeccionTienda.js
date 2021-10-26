import { Grid, Dialog, Grow } from "@material-ui/core";
import { React, useState, useEffect } from "react";
import Encabezado from "./Componente/Encabezado";
import GaleriaProductos from "./Componente/GaleriaProductos";
import Historias from "./Componente/Historias";
import ImgsViewer from "react-images-viewer";
import CategoriasTienda from "./Componente/CategoriasTienda";
import SeccionInfoTienda from "./../SeccionInfoTienda/SeccionInfoTienda";
import InfoStarfySencilla from "../ComponentesStarfy/InfoStarfySencilla";
import CarritoFlotante from "../ComponentesCarrito/CarritoFlotante";
import SeccionDetalleProducto from "../SeccionDetalleProducto/SeccionDetalleProducto";
import WassFlotante from "../ComponentesWass/WassFlotante";
import SeccionLogueo from "../SeccionLogueo/SeccionLogueo";
import SeccionDomicilio from "../SeccionDomicilio/SeccionDomicilio";
import SeccionPasarela from "./../SeccionPasarela/SeccionPasarela";
import fire from "../../fire";
import { ProductoDoc } from "../../Entidades/ProductoDoc";
import { TiendaDoc } from "../../Entidades/TiendaDoc";

const SeccionTienda = (props) => {
  const { idTienda } = props;
  const [tienda, setTienda] = useState("");
  /////////////////////////////////////////////////
  const [num, setNum] = useState(0);
  const [open, setOpen] = useState(false);
  const [openDetalle, setOpenDetalle] = useState(false);
  const [openContinuar, setOpenContinuar] = useState(false);
  const [openCarrito, setOpenCarrito] = useState(false);
  const [openPasarela, setOpenPasarela] = useState(false);
  const [categoria, setCategoria] = useState("ofertas");
  const [productos, setProductos] = useState([]);
  const [detalle, setDetalle] = useState("");
  /////////////////////////////////////////////////
  const [pedidos, setPedidos] = useState([]);
  const [pedidoCompleto, setPedidoCompleto] = useState("");
  ////////////////////////////////////////////////
  const [user, setUser] = useState("");
  //////////////////////////////////////////////////

  const tienda2 = {
    id: "idpruebas",
    nombre: "Lexus Official Store",
    descripcion:
      "Esta es la descripcion de la tienda y algo que el tendero desee decir de el y sus procesos",
    logo: "https://firebasestorage.googleapis.com/v0/b/tecniprint-5c793.appspot.com/o/Grupo%20341.png?alt=media&token=f25e2b23-7e8f-4d67-9c1c-a312b9e5a54a",
    direccion: "Direccion fisica de la tienda",
    telefonos: "Los telefonos: 318-456-1212",
    historias: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/starfy-7a1d3.appspot.com/o/uno%402x.png?alt=media&token=3fa8b9cb-7bb7-42d7-b0d2-38cabf47a562",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/starfy-7a1d3.appspot.com/o/dos%402x.png?alt=media&token=807e7f04-aa6c-4bca-97a8-3ccabb9981cc",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/starfy-7a1d3.appspot.com/o/tres%402x.png?alt=media&token=7739327a-7cde-4565-b68d-3c8ebc0e3327",
      },
      {
        src: "https://firebasestorage.googleapis.com/v0/b/starfy-7a1d3.appspot.com/o/cuatro%402x.png?alt=media&token=8bda75d3-a74d-41bb-920e-74da35f6d59d",
      },
    ],
    redes: [
      { nombre: "facebook", url: "https://www.facebook.com/adapp.adapp" },
      { nombre: "instagram", url: "https//h:" },
      { nombre: "twiter", url: "https//io:" },
    ],
    categorias: ["zapatos", "pantalones", "sacos"],
    vendedores: [
      { img: "none", nombre: "Juan Gonzales", wass: "3004627579" },
      { img: "none", nombre: "Alicia Calpa", wass: "3004627579" },
    ],
    envio: 10000,
    key: "540fc3e20246695aba87a294b2bfff86",
    mediosPago: ["ePayco", "Nequi", "Daviplata", "Contraentrega"],
    mediosEnvio: ["Servientrega", "Envia", "UPL"],
    paleta: {
      sombra: "1px 1px 7px 0.5px #FFA113",
      gradient: "linear-gradient(45deg, #FFA113 30%, #FF5659 90%)",
      acento: "#FFA113",
      primario: "#FF6B35",
    },
  };

  const productosList = [
    {
      id: "idProducto sss",
      nombre: "Brutfuner Pro",
      complemento: "Colores de madera",
      imgs: [
        "https://firebasestorage.googleapis.com/v0/b/pruebasunitarias-85099.appspot.com/o/prueba%2Fzapatos.png?alt=media&token=63b1962e-c23d-43c9-bd43-216e96410e15",
        "https://firebasestorage.googleapis.com/v0/b/pruebasunitarias-85099.appspot.com/o/prueba%2Fpantalon.png?alt=media&token=9a570761-46f0-4f45-bc88-0ac50d60c8e8",
        "https://firebasestorage.googleapis.com/v0/b/pruebasunitarias-85099.appspot.com/o/prueba%2Fzapatos.png?alt=media&token=63b1962e-c23d-43c9-bd43-216e96410e15",
        "https://firebasestorage.googleapis.com/v0/b/pruebasunitarias-85099.appspot.com/o/prueba%2Fzapatos.png?alt=media&token=63b1962e-c23d-43c9-bd43-216e96410e15",
        "https://firebasestorage.googleapis.com/v0/b/pruebasunitarias-85099.appspot.com/o/prueba%2Fzapatos.png?alt=media&token=63b1962e-c23d-43c9-bd43-216e96410e15",
      ],
      antes: 20000,
      precio: 30000,
      categoria: "zapatos",
      atributos: [
        { nombre: "Colores", items: ["red", "pink", "green"] },
        { nombre: "Tallas", items: ["12", "30", "32"] },
      ],
      descripcion:
        "Esta es la descripcion del producto que esta en venta, esta puede ser un poco mas larga o corta segun como lo requiera el cliente",
    },
    {
      id: "idProducto ddd",
      nombre: "Brutfuner Pro",
      complemento: "Colores de madera",
      imgs: [
        "https://firebasestorage.googleapis.com/v0/b/pruebasunitarias-85099.appspot.com/o/prueba%2Fzapatos.png?alt=media&token=63b1962e-c23d-43c9-bd43-216e96410e15",
        "https://firebasestorage.googleapis.com/v0/b/pruebasunitarias-85099.appspot.com/o/prueba%2Fpantalon.png?alt=media&token=9a570761-46f0-4f45-bc88-0ac50d60c8e8",
        "https://firebasestorage.googleapis.com/v0/b/pruebasunitarias-85099.appspot.com/o/prueba%2Fzapatos.png?alt=media&token=63b1962e-c23d-43c9-bd43-216e96410e15",
        "https://firebasestorage.googleapis.com/v0/b/pruebasunitarias-85099.appspot.com/o/prueba%2Fzapatos.png?alt=media&token=63b1962e-c23d-43c9-bd43-216e96410e15",
        "https://firebasestorage.googleapis.com/v0/b/pruebasunitarias-85099.appspot.com/o/prueba%2Fzapatos.png?alt=media&token=63b1962e-c23d-43c9-bd43-216e96410e15",
      ],
      antes: 20000,
      precio: 30000,
      categoria: "zapatos",
      atributos: [
        { nombre: "Colores", items: ["red", "pink", "green"] },
        { nombre: "Tallas", items: ["12", "30", "32"] },
      ],
      descripcion:
        "Esta es la descripcion del producto que esta en venta, esta puede ser un poco mas larga o corta segun como lo requiera el cliente",
    },
    {
      nombre: "Panta Leon",
      imgs: [
        "https://firebasestorage.googleapis.com/v0/b/pruebasunitarias-85099.appspot.com/o/prueba%2Fpantalon.png?alt=media&token=9a570761-46f0-4f45-bc88-0ac50d60c8e8",
      ],
      antes: 30000,
      precio: 20000,
      categoria: "pantalones",
      atributos: [
        { nombre: "Colores", items: ["red", "pink", "green"] },
        { nombre: "Tallas", items: ["12", "30", "32"] },
      ],
    },
    {
      nombre: "Saco Miho",
      imgs: [
        "https://firebasestorage.googleapis.com/v0/b/pruebasunitarias-85099.appspot.com/o/prueba%2Fsaco.png?alt=media&token=c3d739ea-e6dd-4dd6-b592-c6862ab63e42",
      ],
      antes: 20000,
      precio: 10000,
      categoria: "sacos",
      atributos: [
        { nombre: "Colores", items: ["red", "pink", "green"] },
        { nombre: "Tallas", items: ["28", "30", "32"] },
      ],
    },
  ];

  const escuchar = (ulr) => {
    var i = 0;
    tienda.historias.forEach((hist) => {
      if (hist.src == ulr.src) {
        setNum(i);
      }
      i++;
    });
    setOpen(true);
    console.log("click en " + ulr.src);
  };

  const cerrar = () => {
    setOpen(false);
  };

  const siguiente = () => {
    setNum(num + 1);
  };

  const anterior = () => {
    setNum(num - 1);
  };

  const cambioCategoria = (cat) => {
    setCategoria(cat);
  };

  const abrirDetalle = (producto) => {
    setDetalle(producto);
    setOpenDetalle(true);
  };

  const cerrarDetalle = () => {
    setOpenDetalle(false);
  };

  const abrirContinuar = (producto) => {
    if (pedidos.length > 0) {
      setOpenContinuar(true);
    } else {
      alert("Tu carrito de compra esta vacio");
    }
  };

  const cerrarContinuar = () => {
    setOpenContinuar(false);
  };

  const abrirCarrito = () => {
    setOpenCarrito(true);
  };

  const cerrarCarrito = () => {
    setOpenCarrito(false);
  };

  const abrirPasarela = () => {
    setOpenPasarela(true);
  };

  const cerrarPasarela = () => {
    setOpenPasarela(false);
  };

  const cerrarSplash = () => {
    const ele = document.getElementById("ipl-progress-indicator");
    if (ele) {
      // fade out
      ele.classList.add("available");
      setTimeout(() => {
        // remove from DOM
        ele.outerHTML = "";
      }, 2000);
    }
  };

  useEffect(() => {
    if (tienda != "") {
      fire
        .firestore()
        .collection("productos")
        .where("idTienda", "==", tienda.id)
        .where("categoria", "==", tienda.categorias[0])
        .get()
        .then((snap) => {
          var array = [];
          snap.forEach((doc) => {
            var pro = new ProductoDoc(doc);
            setProductos((array) => array.concat(pro));
          });
        });
    }
  }, [tienda]);

  useEffect(() => {
    if (idTienda != "") {
      fire
        .firestore()
        .collection("tiendas")
        .doc(idTienda)
        .get()
        .then((doc) => {
          var tien = new TiendaDoc(doc);
          setTienda(tien);

          cerrarSplash();
        });
    }
  }, [idTienda]);

  useEffect(() => {
    if (tienda != "") {
      fire
        .firestore()
        .collection("productos")
        .where("idTienda", "==", tienda.id)
        .where("categoria", "==", categoria)
        .get()
        .then((snap) => {
          var array = [];
          setProductos(array);
          snap.forEach((doc) => {
            var pro = new ProductoDoc(doc);
            setProductos((array) => array.concat(pro));
          });
        });
    }
  }, [categoria]);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Grid item lg={6} sm={10} xs={12}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item container>
            <Encabezado tienda={tienda} />
          </Grid>

          <Grid
            item
            container
            sx={{ position: "fixed", left: "82%", top: "20%", zIndex: 1000 }}
          >
            <CarritoFlotante
              pedidos={pedidos}
              setPedidos={setPedidos}
              tienda={tienda}
              abrirContinuar={abrirContinuar}
              abrirCarrito={abrirCarrito}
              cerrarCarrito={cerrarCarrito}
              openCarrito={openCarrito}
            />
          </Grid>

          <Grid item container sx={{ marginTop: 5 }}>
            <Historias tienda={tienda} click={escuchar} open={open} />
          </Grid>

          <Grid item container sx={{ justifyContent: "center", marginTop: 3 }}>
            <CategoriasTienda
              categorias={tienda.categorias}
              click={cambioCategoria}
              tienda={tienda}
            />
          </Grid>

          <Grid item container sx={{ minHeight: "80vh", marginTop: 4 }}>
            <GaleriaProductos
              productos={productos}
              click={abrirDetalle}
              tienda={tienda}
            />
          </Grid>

          <Grid item container sx={{marginTop: 2}} >
            <SeccionInfoTienda tienda={tienda} />
          </Grid>

          <Grid item container>
            <InfoStarfySencilla />
          </Grid>

          <Grid
            item
            container
            sx={{ position: "fixed", left: "78%", bottom: "2%", zIndex: 90 }}
          >
            <WassFlotante vendedores={tienda ? tienda.vendedores : []} />
          </Grid>

          <ImgsViewer
            imgs={tienda ? tienda.historias : []}
            currImg={num}
            isOpen={open}
            onClickPrev={anterior}
            onClickNext={siguiente}
            onClose={cerrar}
            backdropCloseable={false}
            preventAutoScroll={false}
            showImgCount={false}
          />

          <Dialog
            fullScreen
            open={openDetalle}
            onClose={cerrarDetalle}
            TransitionComponent={Grow}
            sx={{ zIndex: 100 }}
          >
            <SeccionDetalleProducto
              producto={detalle}
              cerrar={cerrarDetalle}
              setPedidos={setPedidos}
              pedidos={pedidos}
              vendedores={tienda.vendedores}
              tienda={tienda}
              abrirCarrito={abrirCarrito}
            />
          </Dialog>

          <Dialog
            fullScreen
            open={openContinuar}
            onClose={cerrarContinuar}
            TransitionComponent={Grow}
            sx={{ zIndex: 1200 }}
          >
            {/**se cambia user por true */}
            {user ? (
              <SeccionDomicilio
                cerrar={cerrarContinuar}
                pedidos={pedidos}
                user={user}
                tienda={tienda}
                abrirPasarela={abrirPasarela}
                setPedidoCompleto={setPedidoCompleto}
              />
            ) : (
              <SeccionLogueo
                cerrar={cerrarContinuar}
                setUser={setUser}
                tienda={tienda}
              />
            )}
          </Dialog>

          <Dialog
            fullScreen
            open={openPasarela}
            onClose={cerrarPasarela}
            TransitionComponent={Grow}
            sx={{ zIndex: 1400 }}
          >
            <SeccionPasarela
              cerrar={cerrarPasarela}
              pedidoCompleto={pedidoCompleto}
              tienda={tienda}
            />
          </Dialog>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SeccionTienda;
