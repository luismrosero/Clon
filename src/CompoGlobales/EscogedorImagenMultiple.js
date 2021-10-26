import { React, useState, createRef, useEffect } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import maquina from "./Iconos/maquina.png";
import fire from "../fire";
import BotonAccion from "./BotonAccion";
import imageCompression from "browser-image-compression";
import { Grid } from "@material-ui/core";
import BotonCarga from "./BotonCarga";

const EscogedorImagenMultiple = (props) => {
  const { valor, setValor, carpeta } = props;
  const [image, setImage] = useState(maquina);
  const [cropper, setCropper] = useState("");
  const [cargando, setCargando] = useState(false);
  const hiddenFileInput = createRef(null);

  const onChange = (e) => {
    if (!cargando) {
      e.preventDefault();
      let files;
      const validImageTypes = ["image/jpeg", "image/png"];
      if (e.dataTransfer) {
        files = e.dataTransfer.files;
      } else if (e.target) {
        files = e.target.files;
      }

      if (files[0] != undefined) {
        const fileType = files[0]["type"];
        if (validImageTypes.includes(fileType)) {
          const reader = new FileReader();
          reader.onload = () => {
            setImage(reader.result);
          };
          reader.readAsDataURL(files[0]);
        } else {
          alert("formato de archivo no soportado");
        }
      }
    } else {
      alert("Hay una imagen procesandoce ahora mismo");
    }
  };

  async function comprimir(url) {
    const imageFile = url;
    const options = {
      maxSizeMB: 0.4,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);

      await subir(compressedFile);
    } catch (error) {
      console.log(error);
      alert("Formato de archivo no soportado");
    }
  }

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCargando(true);
      cropper.getCroppedCanvas().toBlob(function (blob) {
        comprimir(blob);
      });
    }
  };

  const clickBoton = (e) => {
    setImage(maquina);
    e.preventDefault();

    hiddenFileInput.current.click();
  };

  const subir = (crop) => {
    var nom = new Date().getTime();
    const uploadTask = fire

      .storage()
      .ref(carpeta + `/` + nom)
      .put(crop);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        fire
          .storage()
          .ref(carpeta + "/" + nom)
          .getDownloadURL()
          .then((url) => {
            setValor((valor) => valor.concat(url));
            setImage(maquina);
            setCargando(false);
          });
      }
    );
  };

  useEffect(() => {
    if (valor == null) {
      setValor([]);
    }
  }, [valor]);
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item container>
        {valor != null && valor.length > 0
          ? valor.map((item) => (
              <Grid item xs={6} sx={{marginTop: 1}} >
                <img
                  src={item}
                  loading="lazy"
                  style={{ width: 130, marginTop: 14, borderRadius: 10 }}
                />
              </Grid>
            ))
          : ""}
      </Grid>
      <input
        type="file"
        onChange={onChange}
        ref={hiddenFileInput}
        style={{ display: "none" }}
      />
      <Grid item container sx={{ justifyContent: "center", marginTop: 2 }}>
        <BotonAccion titulo={ valor != null && valor.length > 0 ? "Subir mas" +
          " imagenes" : "Escoger Imagen"} click={clickBoton} />

        {image != null ? (
          <>
            <Cropper
              style={{
                height: 300,
                width: 300,
                marginTop: 20,
                marginBottom: 20,
              }}
              src={image}
              viewMode={2}
              aspectRatio={1 / 1.2}
              guides={true}
              minCropBoxHeight={10}
              minCropBoxWidth={10}
              background={true}
              responsive={true}
              autoCropArea={0.5}
              modal={false}
              checkOrientation={false}
              onInitialized={(instance) => {
                setCropper(instance);
              }}
            />

            <Grid item container sx={{ justifyContent: "center" }}>
              <BotonCarga
                titulo={"Cortar Y Subir"}
                click={getCropData}
                cargando={cargando}
              />
            </Grid>
          </>
        ) : (
          ""
        )}
      </Grid>
    </Grid>
  );
};

export default EscogedorImagenMultiple;
