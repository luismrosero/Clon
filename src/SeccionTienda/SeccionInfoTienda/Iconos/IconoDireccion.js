import { React } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 0
  },
}));

const IconoDireccion = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
     <svg xmlns="http://www.w3.org/2000/svg" width="12.43" height="14.985" viewBox="0 0 12.43 14.985">
  <g id="direccion" transform="translate(0)">
    <path id="Trazado_23" data-name="Trazado 23" d="M-1283.8-115.476a2.765,2.765,0,0,1-2.762-2.762A2.765,2.765,0,0,1-1283.8-121a2.765,2.765,0,0,1,2.762,2.762A2.765,2.765,0,0,1-1283.8-115.476Zm0-4.143a1.382,1.382,0,0,0-1.381,1.381,1.382,1.382,0,0,0,1.381,1.381,1.382,1.382,0,0,0,1.381-1.381A1.382,1.382,0,0,0-1283.8-119.619Z" transform="translate(1290.012 124.453)"/>
    <path id="Trazado_24" data-name="Trazado 24" d="M-1285.344-111.015a.686.686,0,0,1-.463-.179c-3.87-3.505-5.752-6.316-5.752-8.591a6.222,6.222,0,0,1,6.215-6.215,6.222,6.222,0,0,1,6.215,6.215c0,2.317-1.937,5.209-5.757,8.6A.687.687,0,0,1-1285.344-111.015Zm0-13.6a4.839,4.839,0,0,0-4.834,4.834c0,1.756,1.627,4.158,4.838,7.146,3.119-2.856,4.83-5.381,4.83-7.146A4.839,4.839,0,0,0-1285.344-124.619Z" transform="translate(1291.559 126)"/>
  </g>
</svg>
    </div>
  );
};

export default IconoDireccion;
