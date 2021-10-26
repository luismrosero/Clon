import { React } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 4.5,
    marginTop: 2.5
  },
}));

const IconoEditar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 20 20"
      >
        <g id="edit" transform="translate(-0.498 0)">
          <path
            id="Trazado_17"
            data-name="Trazado 17"
            d="M324.09,7.595l.963-.963a2.056,2.056,0,0,0,0-2.9L321.927.6a2.056,2.056,0,0,0-2.9,0l-.963.963Zm0,0"
            transform="translate(-305.156)"
            fill="#fff"
          />
          <path
            id="Trazado_18"
            data-name="Trazado 18"
            d="M39.254,71.32,49.316,61.258l6.031,6.031L45.285,77.351Zm0,0"
            transform="translate(-37.242 -58.866)"
            fill="#fff"
          />
          <path
            id="Trazado_19"
            data-name="Trazado 19"
            d="M1.378,345.031l-.847,4.385a1.8,1.8,0,0,0,2.1,2.1l4.385-.847Zm0,0"
            transform="translate(0 -331.554)"
            fill="#fff"
          />
        </g>
      </svg>
    </div>
  );
};

export default IconoEditar;
