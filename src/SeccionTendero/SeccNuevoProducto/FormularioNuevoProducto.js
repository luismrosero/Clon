import {
  Grid,
  Stepper,
  Step,
  StepLabel,
  Typography,
  StepContent,
} from "@material-ui/core";
import { React, useState, createContext } from "react";
import ImagenesProducto from "./Pasos/ImagenesProducto";
import ImagenesNombre from "./Pasos/ImagenesNombre";
import ImagenesAtributos from "./Pasos/ImagenesAtributos";
import ImagenesPrecios from "./Pasos/ImagenesPrecios";
import ImagenesCategoria from "./Pasos/ImagenesCategoria";
import fire from "./../../fire";
import { PRODUCTOS, TIENDAS } from "./../../Constantes";
import firebase from "firebase";
import { ProductoCrea } from "./../../Entidades/ProductoCrea";

///////////////////////////////////////////////////
/////////////////////////////////////
export const CFormProducto = createContext();

const FormularioNuevoProducto = (props) => {
  const { cerrar, tienda } = props;
  const [paso, setPaso] = useState(0  );
  const [cargo, setCargo] = useState(false);
  const [cargando, setCargando] = useState(false);
  /////////////////////////////////////
  const [imagenes, setImagenes] = useState([]);
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precioAntes, setPrecioAntes] = useState("");
  const [precioActual, setPrecioActual] = useState("");
  //const [atributos, setAtributos] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [colores, setColores] = useState("");
  const [tallas, setTallas] = useState("");
  const [tipoTalla, setTipoTalla] = useState("Latino");

  const siguiente = () => {
    setPaso(paso + 1);
  };

  const atras = () => {
    if (paso > 0) {
      setPaso(paso - 1);
    } else {
      cerrar();
    }
  };

  const subimosProducto = () => {
    var prod = new ProductoCrea(
      imagenes,
      nombre,
      descripcion,
      precioAntes,
      precioActual,
      categoria,
      tienda.id,
      colores,
      tallas,
      tipoTalla
    );

    fire
      .firestore()
      .collection(PRODUCTOS)
      .doc(prod.id)
      .set(prod)
      .then((dox) => {
        alert("Producto creado con exito")
        cerrar()
      });
  };

  const creamosCategoria = (categoria) => {
    fire
      .firestore()
      .collection(TIENDAS)
      .doc(tienda.id)
      .update({
        categorias: firebase.firestore.FieldValue.arrayUnion(categoria),
      })
      .then((dox) => {
        subimosProducto();
      });
  };

  const terminar = () => {
    console.log("terminando...");
    var hay = false;
    for (var i = 0; i < tienda.categorias.length; i++) {
      if (categoria === tienda.categorias[i]) {
        hay = true;
      }
    }

    if (hay) {
      subimosProducto();
    } else {
      creamosCategoria(categoria);
    }
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ padding: 2 }}
    >
      <CFormProducto.Provider
        value={{
          imagenes: imagenes,
          setImagenes: setImagenes,
          setNombre: setNombre,
          descripcion: descripcion,
          setDescripcion: setDescripcion,
          precioAntes: precioAntes,
          setPrecioAntes: setPrecioAntes,
          precioActual: precioActual,
          setPrecioActual: setPrecioActual,
          colores: colores,
          setColores: setColores,
          tipoTalla: tipoTalla,
          setTipoTalla: setTipoTalla,
          tallas: tallas,
          setTallas: setTallas,
          categoria: categoria,
          setCategoria: setCategoria,
          nombre: nombre,
          siguiente: siguiente,
          atras: atras,
          terminar: terminar,
          cargo: cargo,
          cargando: cargando,
          tienda: tienda,
        }}
      >
        <Stepper activeStep={paso} orientation="vertical">
          <Step>
            <StepLabel>
              <Typography sx={{ fontSize: 16 }}>
                Imagenes del producto
              </Typography>
            </StepLabel>
            <StepContent>
              <ImagenesProducto />
            </StepContent>
          </Step>

          <Step>
            <StepLabel>
              <Typography sx={{ fontSize: 16 }}>Nombre del producto</Typography>
            </StepLabel>
            <StepContent>
              <ImagenesNombre />
            </StepContent>
          </Step>

          <Step>
            <StepLabel>
              <Typography sx={{ fontSize: 16 }}>
                Atributos del producto
              </Typography>
            </StepLabel>
            <StepContent>
              <ImagenesAtributos />
            </StepContent>
          </Step>

          <Step>
            <StepLabel>
              <Typography sx={{ fontSize: 16 }}>
                Precios del producto
              </Typography>
            </StepLabel>
            <StepContent>
              <ImagenesPrecios />
            </StepContent>
          </Step>

          <Step>
            <StepLabel>
              <Typography sx={{ fontSize: 16 }}>
                Categoria del producto
              </Typography>
            </StepLabel>
            <StepContent>
              <ImagenesCategoria />
            </StepContent>
          </Step>
        </Stepper>
      </CFormProducto.Provider>
    </Grid>
  );
};

export default FormularioNuevoProducto;
