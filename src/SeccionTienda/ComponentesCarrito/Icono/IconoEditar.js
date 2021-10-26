import { React } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {

    
  },
}));

const IconoEditar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
  <g id="edit" transform="translate(-0.498 0.001)">
    <path id="Trazado_15" data-name="Trazado 15" d="M321.677,4.557l.578-.578a1.234,1.234,0,0,0,0-1.743L320.379.36a1.234,1.234,0,0,0-1.743,0l-.578.578Zm0,0" transform="translate(-310.117)"/>
    <path id="Trazado_16" data-name="Trazado 16" d="M39.254,67.3l6.037-6.037,3.619,3.619-6.037,6.037Zm0,0" transform="translate(-37.847 -59.823)"/>
    <path id="Trazado_17" data-name="Trazado 17" d="M1.026,345.031l-.508,2.631a1.077,1.077,0,0,0,1.263,1.263l2.631-.508Zm0,0" transform="translate(0 -336.945)"/>
  </g>
</svg>
    </div>
  );
};

export default IconoEditar;
