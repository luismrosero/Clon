import {ThemeProvider} from '@emotion/react';
import {React, useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {TENDERO} from './Constantes';
import fire from './fire';
import SeccionLanding from './SeccionLanding/SeccionLanding';
import SeccionRecepcion from './SeccionRecepcion/SeccionRecepcion';
import SeccionTienda from './SeccionTienda/SeccionTienda/SeccionTienda';
import Tema from './Tema';
import SeccTendero from './SeccionTendero/SeccTendero/SeccTendero';
import {Helmet} from 'react-helmet';
import Formulario from "./SeccFormulario/Formulario";
import SeccAdmin from "./SeccAdmin/SeccAdmin";

function App() {
  const [landign, setLanding] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [tienda, setTienda] = useState('');
  const [tendero, setTendero] = useState('');
  const [recepcion, setRecepcio] = useState(false);
  const [datos, setDatos] = useState('');
  const [referencia, setReferencia] = useState('');
  const [formu, setFormu] = useState(false)

  const ingreso = (tend) => {
    setLanding(false);
    setTendero(tend);
  };

  const ingresoFormu = () =>{
    setLanding(false);
    setFormu(true);
  }

  const getDatos = (ref, id) => {
    if (ref === '-1') {
      console.log('Daots');
      var datos = {
        x_cod_response: -1,
        x_extra1: id,
      };
      setDatos(datos);
    } else {
      fetch('https://secure.epayco.co/validation/v1/reference/' + ref)
        .then(async (response) => {
          const data = await response.json();

          console.log(data.data);
          await setDatos(data.data);
        })
        .catch((error) => {
          console.error('There was an error!', error);
        });
    }
  };

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');
      if (pair[0] === variable) {
        return pair[1];
      }
    }
    return false;
  }

  const cerrarSplash = () => {
    const ele = document.getElementById('ipl-progress-indicator');
    if (ele) {
      // fade out
      ele.classList.add('available');
      setTimeout(() => {
        // remove from DOM
        ele.outerHTML = '';
      }, 2000);
    }
  };

  const verificarTendero = (uid) => {
    console.log('verificando tendero');
    fire
      .firestore()
      .collection(TENDERO)
      .doc(uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          ingreso(doc.data());
        } else {
          console.log('llega al else');
          if (landign) {
            console.log('entra en tienda');

            fire.auth().signOut();

            setTimeout(
              alert('Este usuario no es encuentra registrado como tendero'),
              2000
            );
          }
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    var ref = getQueryVariable('ref_payco');
    var admin = getQueryVariable('admin');
    var tienda = getQueryVariable('s');
    var id = getQueryVariable('id');

    console.log(ref);

    if (ref) {
      setRecepcio(true);
      setReferencia(ref);
      getDatos(ref, id);
      cerrarSplash();
      console.log('ref');
    } else if (id != null && ref == null) {

      setLanding(false);
    } else if (!admin && !tienda && !ref) {
      if (id != '' && id.includes("ref_payco")) {
        cerrarSplash();
        setAdmin(false);
        setTienda('')
        setTendero('')
        setLanding(false)
      } else {
        setLanding(true);
        cerrarSplash();

      }
    } else if (tienda && !admin) {
      setTienda(tienda);

      console.log('tienda');
    } else if (!tienda && admin) {
      setAdmin(admin);
      cerrarSplash();
      console.log('admin');
    }
  }, []);

  useEffect(() => {
    console.log(tienda);
    fire.analytics();

    fire.auth().onAuthStateChanged((doc) => {
      if (doc != null) {
        verificarTendero(doc.email);
      } else {
        setTendero('');
        setLanding(true);
      }
    });
  }, []);

  return (
    <>
      {/*<CreadorTienda/> */}

      <Helmet>
        <title>{'Starfy'} </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Helmet>
        <ThemeProvider theme={Tema}>
        <Router>
          {landign === true && !recepcion && tienda == '' ? (
            <SeccionLanding tendero={tendero} setFormu={ingresoFormu} ingreso={ingreso}/>
          ) : (
            ''
          )}
          {tienda != '' && !recepcion ? (
            <SeccionTienda idTienda={tienda}/>
          ) : (
            ''
          )}
          {admin && !recepcion ? <h1>Admin</h1> : ''}

          {tendero != '' && !recepcion ? <SeccTendero tendero={tendero}/> : ''}

          {formu !== false && !recepcion ? <SeccAdmin setFormu={setFormu} setLanding={setLanding} /> : ''}

          {/* <Switch>
            <Route exact path="/recepcion">
              <SeccionRecepcion datosPasarela={datos} referencia={referencia}/>
            </Route>
          </Switch>*/}
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
