import { React, useContext } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 7,
  },
}));

const IconoSubir = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="17.829"
        viewBox="0 0 30 21.829"
      >
        <g id="nuve" transform="translate(0 -66.65)">
          <g
            id="Grupo_345"
            data-name="Grupo 345"
            transform="translate(0 66.65)"
          >
            <path
              id="Trazado_179"
              data-name="Trazado 179"
              d="M23.441,88.479H17v-6.5h2.127a.665.665,0,0,0,.539-1.054L15.533,75.2a.659.659,0,0,0-1.073,0l-4.138,5.725a.664.664,0,0,0,.539,1.054h2.127v6.5H5.781A6.447,6.447,0,0,1,0,82.03a6.107,6.107,0,0,1,3.028-5.272,4.094,4.094,0,0,1-.251-1.428,4.152,4.152,0,0,1,4.156-4.156,4.085,4.085,0,0,1,1.422.251,8.32,8.32,0,0,1,15.809,2.746,7.238,7.238,0,0,1-.723,14.307Z"
              transform="translate(0 -66.65)"
              fill="#fff"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default IconoSubir;
