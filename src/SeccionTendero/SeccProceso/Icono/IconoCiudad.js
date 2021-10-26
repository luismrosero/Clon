import { React } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: 10,
    marginLeft: -4
  },
}));

const IconoCiudad = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20.781"
        height="20.781"
        viewBox="0 0 14.781 14.781"
      >
        <g
          id="Home_delivery"
          data-name="Home delivery"
          transform="translate(-4 -4)"
        >
          <path
            id="Trazado_6"
            data-name="Trazado 6"
            d="M21.614,21.718V13.346l-5.809-3.2-5.8,3.2v8.373h1.584V16.175a.792.792,0,0,1,.792-.792h6.863a.792.792,0,0,1,.792.792v5.543Zm-5.807-7.654a1.32,1.32,0,1,1,1.32-1.32A1.32,1.32,0,0,1,15.807,14.064Z"
            transform="translate(-4.416 -4.521)"
            fill="#707070"
          />
          <circle
            id="Elipse_14"
            data-name="Elipse 14"
            cx="0.5"
            cy="0.5"
            r="0.5"
            transform="translate(11 8)"
            fill="#707070"
          />
          <path
            id="Trazado_7"
            data-name="Trazado 7"
            d="M18.264,32a.264.264,0,0,0-.264.264v6.863a.264.264,0,0,0,.264.264h6.863a.264.264,0,0,0,.264-.264V32.264A.264.264,0,0,0,25.127,32H23.015v2.9a.264.264,0,0,1-.383.236l-.928-.469-.948.47a.264.264,0,0,1-.381-.238V32Z"
            transform="translate(-10.305 -20.61)"
            fill="#707070"
          />
          <path
            id="Trazado_8"
            data-name="Trazado 8"
            d="M29.921,34.14l.663.335V32H29v2.478l.686-.34A.262.262,0,0,1,29.921,34.14Z"
            transform="translate(-18.401 -20.61)"
            fill="#707070"
          />
          <path
            id="Trazado_9"
            data-name="Trazado 9"
            d="M45,4V5.328l.792.437V4Z"
            transform="translate(-30.178)"
            fill="#707070"
          />
          <path
            id="Trazado_10"
            data-name="Trazado 10"
            d="M18.781,8.219,11.388,4.142,4,8.219V9.2l7.261-4.007a.264.264,0,0,1,.255,0L18.781,9.2Z"
            transform="translate(0 -0.105)"
            fill="#707070"
          />
        </g>
      </svg>
    </div>
  );
};

export default IconoCiudad;
