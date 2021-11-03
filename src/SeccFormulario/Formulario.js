/*************************************************
 * nombre:       Formulario
 * descripcion:
 *
 * librerias:
 * props:
 * tiempo:       10 min
 *************************************************/
import {createRef, React, useState, useEffect} from "react";
import {Button, ButtonBase, Grid, TextField, Typography} from "@material-ui/core";
import {IconArrowBack, IconArrowLeft} from "@tabler/icons";
import { SketchPicker } from 'react-color';
import {TiendaCrea} from "../Entidades/TiendaCrea";
import fire from "../fire";



const Formulario = (props) => {
    const {cerrar, itemDetalle} = props;
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');

    const [nombre,setNombre] = useState('');
    const [descripcion,setDescripcion] = useState('');
    const [direccion,setDireccion] = useState('');
    const [telefono,setTelefono] = useState('');
    const [categorias,setCategorias] = useState([]);
    const [nomCategorias,setNomCategorias] = useState('');
    const [id,setId] = useState('');
    
    const [color, setColor] = useState("#FFA113")
    const [acento,setAcento] = useState("#FF6B35")
    const [logo, setLogo] = useState('none')
    const [historias, setHistorias] = useState([]);

    const [face,setFace] = useState('');
    const [insta,setInsta] = useState('');

    const [nequi,setNequi] = useState('');
    const [numPagos,setNumPagos] = useState('');
    const [valEnvio,setValEnvio] = useState('');
    const [empresas, setEmpresas] = useState([]);
    const [nomEmpresa,setNomEmpresa] = useState('');

    const [vendedores, setVendedores] = useState([]);
    const [vnombre,setVNombre] = useState('');
    const [vwass,setVWass] = useState('');
    const [vImg,setVImg] = useState('');
    ////////////////////////////////////////////////



    const addVendedor = () => {

        let ven = {
            nombre: vnombre,
            wass: vwass,
            img: vImg,
        }

        let array = vendedores;
        array.push(ven);
        setVendedores(array);

        setVNombre('');
        setVWass('')
        setVImg('none')
    }

    const addEmpresas = () =>{
        setEmpresas((empresas) => empresas.concat(nomEmpresa))

        setNomEmpresa('');
    }

    const addCategoria = () =>{
        setCategorias((categorias) => categorias.concat(nomCategorias))

        setNomCategorias('');
    }


    const guardar = () =>{
        let tien = new TiendaCrea(nombre, descripcion, direccion, telefono, color, acento, logo, historias, face, insta,
            nequi, numPagos, valEnvio, empresas, nomEmpresa, vendedores, categorias,email, pass )





        if (id !== ''){
            fire.firestore().collection("tiendas").doc(tien.id).set(tien).then((dox) =>{
                alert("Cambios Guardados");
            }).catch((err) =>{
                alert(err)
            });
        }else {


            fire.auth().createUserWithEmailAndPassword(email, pass).then((dox) => {


                fire.firestore().collection("tiendas").doc(tien.id).set(tien).then((dox) => {
                    alert("Tienda Guardada")
                    setId(tien.id);
                    fire.firestore().collection("tendero").doc(email).set({
                        email: email,
                        idTienda: tien.id,
                    }).then((dox) => {
                            fire.auth().signOut()
                    }).catch((err) => {
                        alert(err)
                    });


                }).catch((err) => {
                    console.log(err);
                })

            }).catch((err) => {

                alert(err)

            });


        }


    /*    fire.firestore().collection("prueba").doc("aaa").set({hola: "saludo"}).then((dox) =>{
            alert("subio")
        }).catch((err) => {
            alert(err)
        })*/

    }

    const onChange = (e) => {


        e.preventDefault();
        let files;

        if (e.dataTransfer) {
            files = e.dataTransfer.files;
            subir(files[0])
        } else if (e.target) {
            files = e.target.files;
            subir(files[0])
        }

        /*    if (files[0] !== undefined) {
                const fileType = files[0]["type"];

                    const reader = new FileReader();
                    reader.onload = () => {
                       // setImage(reader.result);
                       // comprimir(reader.result)
                        subir(reader.result)
                    };
                    reader.readAsDataURL(files[0]);

            }*/

    };

    const onChangeHis = (e) => {


            e.preventDefault();
            let files;

            if (e.dataTransfer) {
                files = e.dataTransfer.files;
                subirHis(files[0])
            } else if (e.target) {
                files = e.target.files;
                subirHis(files[0])
            }



    };

    const onChangeVen = (e) => {


        e.preventDefault();
        let files;

        if (e.dataTransfer) {
            files = e.dataTransfer.files;
            subirVen(files[0])
        } else if (e.target) {
            files = e.target.files;
            subirVen(files[0])
        }



    };

    const subirHis = (crop) => {
        var nom = new Date().getTime();
        const uploadTask = fire

            .storage()
            .ref( `historias/` + nom)
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
                    .ref("historias/" + nom)
                    .getDownloadURL()
                    .then((url) => {
                        // setValor((valor) => valor.concat(url));
                        //setImage(maquina);
                        //setCargando(false);
                        setHistorias((historias) => historias.concat(url))

                    }).catch((err) =>{
                    console.log(err)
                })
            }
        );
    };

    const subirVen = (crop) => {
        var nom = new Date().getTime();
        const uploadTask = fire

            .storage()
            .ref( `vendedor/` + nom)
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
                    .ref("vendedor/" + nom)
                    .getDownloadURL()
                    .then((url) => {
                        // setValor((valor) => valor.concat(url));
                        //setImage(maquina);
                        //setCargando(false);
                        setVImg(url)

                    }).catch((err) =>{
                    console.log(err)
                })
            }
        );
    };

    const subir = (crop) => {
        var nom = new Date().getTime();
        const uploadTask = fire

            .storage()
            .ref( `tienda/` + nom)
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
                    .ref("tienda/" + nom)
                    .getDownloadURL()
                    .then((url) => {
                       // setValor((valor) => valor.concat(url));
                        //setImage(maquina);
                        //setCargando(false);
                        setLogo(url)

                    }).catch((err) =>{
                    console.log(err)
                })
            }
        );
    };


    useEffect(() =>{

        if (itemDetalle !== ''){
            setId(itemDetalle.id);
            setNombre(itemDetalle.nombre);
            setDescripcion(itemDetalle.descripcion);
            setDireccion(itemDetalle.direccion);
            setTelefono(itemDetalle.telefonos);
            setCategorias(itemDetalle.categorias);

            setColor(itemDetalle.paleta.primario);
            setAcento(itemDetalle.paleta.acento);
            setLogo(itemDetalle.logo);

            for (let i = 0 ; i < itemDetalle.historias.length; i++){
                setHistorias((historias) => historias.concat(itemDetalle.historias[i].src))
            }

            for (let j = 0; j < itemDetalle.redes.length; j++){
                if (itemDetalle.redes[j].nombre === "facebook"){
                    setFace(itemDetalle.redes[j].url)
                }

                if (itemDetalle.redes[j].nombre === "instagram"){
                    setInsta(itemDetalle.redes[j].url)
                }
            }


            setNumPagos(itemDetalle.numPagos);
            setNequi(itemDetalle.nequi)
            setValEnvio(itemDetalle.envio)

            setEmpresas(itemDetalle.mediosEnvio)

            for (let k = 0; k < itemDetalle.vendedores.length; k++){

                let ven = {
                    nombre: itemDetalle.vendedores[k].nombre,
                    wass: itemDetalle.vendedores[k].wass,
                    img: itemDetalle.vendedores[k].img,
                }
                setVendedores((vendedores) => vendedores.concat(ven))
            }

            setEmail(itemDetalle.usuario);
            setPass(itemDetalle.pass)


        }

    },[itemDetalle])
  return (
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        sx={{padding: 6, backgroundColor: "#fff"}}
        spacing={2}
      >


          <Grid item container>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
               >

                  <Grid item >
                      <ButtonBase onClick={cerrar} >
                          <IconArrowLeft  size={"1.5rem"} />
                      </ButtonBase>
                  </Grid>

                  <Grid item >
                    <Typography sx={{fontSize: 20, fontWeight: 600}} >{id !== '' ?
                        "https://colonstarfy.web.app/?s=" + id : "Sin Url"}</Typography>
                  </Grid>

               </Grid>

          </Grid>

          <Grid item container>
              <Typography sx={{fontSize: 20, fontWeight: 600, marginTop: 4}} >Credenciales</Typography>
          </Grid>

          <Grid item lg={4} >
              <TextField label={"correo de usuario"} variant={"outlined"} color={"primary"} fullWidth value={email}
                         onChange={(e) => setEmail(e.target.value)} />
          </Grid>

          <Grid item lg={8} >
              <TextField label={"contraseña"} variant={"outlined"} color={"primary"} fullWidth value={pass}
                         onChange={(e) => setPass(e.target.value)} />
          </Grid>


          <Grid item container>
              <Typography sx={{fontSize: 20, fontWeight: 600, marginTop: 4}} >Datos Comercio</Typography>
          </Grid>

          <Grid item lg={4} >
            <TextField label={"nombre"} variant={"outlined"} color={"primary"} fullWidth value={nombre}
            onChange={(e) => setNombre(e.target.value)} />
          </Grid>

          <Grid item lg={8} >
              <TextField label={"Descripcion"} variant={"outlined"} color={"primary"} fullWidth value={descripcion}
                         onChange={(e) => setDescripcion(e.target.value)} />
          </Grid>

          <Grid item lg={8}  >
              <TextField label={"Direccion"} variant={"outlined"} color={"primary"} fullWidth value={direccion}
                         onChange={(e) => setDireccion(e.target.value)} />
          </Grid>

          <Grid item lg={4}  >
              <TextField label={"Telefono"} variant={"outlined"} color={"primary"} fullWidth value={telefono}
                         onChange={(e) => setTelefono(e.target.value)} />
          </Grid>

          <Grid item lg={4} >
              <TextField label={"Categorias Comerciales"} variant={"outlined"} color={"primary"} fullWidth value={nomCategorias}
                         onChange={(e) => setNomCategorias(e.target.value)} />
          </Grid>

          <Grid item lg={2} >
              <Button variant={"contained"} color={"primary"}  onClick={() => addCategoria()}>Agregar</Button>
          </Grid>

          <Grid item container>
              {categorias.map((item) =>{
                  return(
                      <Grid item container>
                          <Typography>{item}</Typography>
                      </Grid>
                  )
              })}
          </Grid>

          <Grid item container>
              <Typography sx={{fontSize: 20, fontWeight: 600, marginTop: 4}} >Identidad</Typography>
          </Grid>



        <Grid item lg={4}>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
             >

               <Grid item container>
                 <Typography>Color Primario</Typography>
               </Grid>
                <Grid item container sx={{marginTop: 1}}>
                    <SketchPicker color={color} onChangeComplete={(e) => setColor(e.hex)} />
                </Grid>

             </Grid>

        </Grid>

          <Grid item lg={4}>
              <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
              >

                  <Grid item container>
                      <Typography>Color Acento</Typography>
                  </Grid>
                  <Grid item container sx={{marginTop: 1}}>
                      <SketchPicker color={acento} onChangeComplete={(e) => setAcento(e.hex)} />
                  </Grid>

              </Grid>

          </Grid>


          <Grid item container sx={{marginTop: 4}} >
            <Typography>Logo</Typography>
          </Grid>
          <Grid item container>
              <input
                  type="file"
                  onChange={(e) => onChange(e)}
                  aria-label={"Subir"}

              />
          </Grid>




          <Grid item container>
            <img width={100} src={logo} />
          </Grid>



          <Grid item container sx={{marginTop: 4}} >
              <Typography>Historias</Typography>
          </Grid>
          <Grid item container>
              <input
                  type="file"
                  onChange={(e) => onChangeHis(e)}
                  aria-label={"Subir"}

              />
          </Grid>


          <Grid item container>

              {historias.map((item) =>{
                  return (
                      <Grid item lg={3} sm={12} xs={12} sx={{padding: 2}} >
                          <img width={150} src={item}  />
                      </Grid>
                  )
              })}
          </Grid>


          <Grid item container>
              <Typography sx={{fontSize: 20, fontWeight: 600, marginTop: 4}} >Redes</Typography>
          </Grid>

          <Grid item lg={6} >
              <TextField label={"URL Facebook"} variant={"outlined"} color={"primary"} fullWidth value={face}
                         onChange={(e) => setFace(e.target.value)} />
          </Grid>

          <Grid item lg={6} >
              <TextField label={"URL Instagram"} variant={"outlined"} color={"primary"} fullWidth value={insta}
                         onChange={(e) => setInsta(e.target.value)} />
          </Grid>


          <Grid item container>
              <Typography sx={{fontSize: 20, fontWeight: 600, marginTop: 4}} >Pagos Y Envios</Typography>
          </Grid>

          <Grid item lg={4} >
              <TextField label={"Numero Nequi"} variant={"outlined"} color={"primary"} fullWidth value={nequi}
                         onChange={(e) => setNequi(e.target.value)} />
          </Grid>

          <Grid item lg={4} >
              <TextField label={"Numero de Reporte de Pagos"} variant={"outlined"} color={"primary"} fullWidth value={numPagos}
                         onChange={(e) => setNumPagos(e.target.value)} />
          </Grid>

          <Grid item lg={4} >
              <TextField label={"Valor Envio"} variant={"outlined"} color={"primary"} fullWidth value={valEnvio}
                         onChange={(e) => setValEnvio(e.target.value)} />
          </Grid>

          <Grid item lg={4} >
              <TextField label={"Empresas de envio"} variant={"outlined"} color={"primary"} fullWidth value={nomEmpresa}
                         onChange={(e) => setNomEmpresa(e.target.value)} />
          </Grid>

          <Grid item lg={2} >
              <Button variant={"contained"} color={"primary"}  onClick={() => addEmpresas()}>Agregar</Button>
          </Grid>

          <Grid item container>
              {empresas.map((item) =>{
                  return(
                      <Grid item container>
                        <Typography>{item}</Typography>
                      </Grid>
                  )
              })}
          </Grid>


          <Grid item container>
              <Typography sx={{fontSize: 20, fontWeight: 600, marginTop: 4}} >Vendedores</Typography>
          </Grid>

          <Grid item lg={8} >
              <TextField label={"nombre"} variant={"outlined"} color={"primary"} fullWidth value={vnombre}
                         onChange={(e) => setVNombre(e.target.value)} />
          </Grid>

          <Grid item lg={4} >
              <TextField label={"Whatsapp"} variant={"outlined"} color={"primary"} fullWidth value={vwass}
                         onChange={(e) => setVWass(e.target.value)} />
          </Grid>

          <Grid item container sx={{marginTop: 4}} >
              <Typography>Imagen de Perfil</Typography>
          </Grid>
          <Grid item container>
              <input
                  type="file"
                  onChange={(e) => onChangeVen(e)}
                  aria-label={"Subir"}

              />
          </Grid>

          <Grid item lg={4}>
              <img width={110} src={vImg} />
          </Grid>

          <Grid item lg={4} sx={{marginTop: 4}} >
              <Button variant={"contained"} color={"primary"} onClick={() => addVendedor()} > Agregar</Button>
          </Grid>

          <Grid item container sx={{marginTop: 4, borderTop: 1}} >
              {vendedores.map((item) =>{
                  return(
                      <Grid item container sx={{marginTop: 2}} >
                        <Grid
                          container
                          direction="row"
                          justifyContent="flex-start"
                          alignItems="center"
                         >
                         <Grid item >
                             <img width={50} src={item.img} />
                         </Grid>

                            <Grid item sx={{marginLeft: 2}} >
                              <Typography>{item.nombre}</Typography>
                            </Grid>

                            <Grid item sx={{marginLeft: 2}}  >
                                <Typography>{item.wass}</Typography>
                            </Grid>

                         </Grid>
                      </Grid>
                  )
              })}
          </Grid>

          <Grid item container sx={{borderTop: 1, margin: 4, width: "100%"}} />

          <Grid item container sx={{justifyContent: "center"}} >
            <Button variant={"contained"} color={"primary"} onClick={() => guardar()} >Guardar Cambios</Button>
          </Grid>



       </Grid>
  );
};
export default Formulario;
