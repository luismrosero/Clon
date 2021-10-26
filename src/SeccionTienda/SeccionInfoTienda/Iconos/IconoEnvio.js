import { React } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: -2
  },
}));

const IconoEnvio = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
 <svg xmlns="http://www.w3.org/2000/svg" width="15.192" height="15.192" viewBox="0 0 15.192 15.192">
  <g id="Grupo_109" data-name="Grupo 109" transform="translate(15.192 15.192) rotate(180)">
    <path id="envio" d="M-1669.86-602.243a7.6,7.6,0,0,1-7.6-7.6,7.6,7.6,0,0,1,7.6-7.6,7.6,7.6,0,0,1,7.6,7.6A7.6,7.6,0,0,1-1669.86-602.243Zm0-13.811a6.223,6.223,0,0,0-6.215,6.215,6.222,6.222,0,0,0,6.215,6.215,6.222,6.222,0,0,0,6.215-6.215A6.222,6.222,0,0,0-1669.86-616.054Z" transform="translate(1677.456 617.435)"/>
    <path id="Trazado_50" data-name="Trazado 50" d="M-1668-604.529a.688.688,0,0,1-.488-.2l-2.762-2.762a.691.691,0,0,1,0-.976l2.762-2.762a.691.691,0,0,1,.976,0,.69.69,0,0,1,0,.976l-1.583,1.583h3.857a.69.69,0,0,1,.691.691.69.69,0,0,1-.691.691h-3.857l1.583,1.583a.69.69,0,0,1,0,.976A.686.686,0,0,1-1668-604.529Z" transform="translate(1675.599 615.578)"/>
  </g>
</svg>

    </div>
  );
};

export default IconoEnvio;
