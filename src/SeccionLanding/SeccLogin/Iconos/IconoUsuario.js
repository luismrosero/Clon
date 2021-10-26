import { React } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: 10,
    marginTop: 4,
    marginLeft: 8,
  },
}));

const IconoUsuario = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="22.756"
        viewBox="0 0 20 22.756"
      >
        <g id="usuario" transform="translate(-31)">
          <g id="Grupo_344" data-name="Grupo 344" transform="translate(35)">
            <g id="Grupo_343" data-name="Grupo 343" transform="translate(0)">
              <path
                id="Trazado_175"
                data-name="Trazado 175"
                d="M127,0a6,6,0,1,0,6,6A6.007,6.007,0,0,0,127,0Z"
                transform="translate(-121)"
                fill="#3D3D3D"
              />
            </g>
          </g>
          <g
            id="Grupo_346"
            data-name="Grupo 346"
            transform="translate(31 13.333)"
          >
            <g id="Grupo_345" data-name="Grupo 345" transform="translate(0)">
              <path
                id="Trazado_176"
                data-name="Trazado 176"
                d="M48.465,302.586A8.553,8.553,0,0,0,42.333,300H39.667a8.553,8.553,0,0,0-6.132,2.586A8.744,8.744,0,0,0,31,308.756a.667.667,0,0,0,.667.667H50.333a.667.667,0,0,0,.667-.667A8.744,8.744,0,0,0,48.465,302.586Z"
                transform="translate(-31 -300)"
                fill="#3D3D3D"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default IconoUsuario;
