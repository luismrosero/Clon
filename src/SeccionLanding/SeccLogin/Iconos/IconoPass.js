import { React } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: 10,
    marginTop: 4,
    marginLeft: 8,
  },
}));

const IconoPass = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 30 30"
      >
        <g id="key" transform="translate(-0.001 0.001)">
          <g id="Grupo_1" data-name="Grupo 1" transform="translate(0.001 0)">
            <path
              id="Trazado_1"
              data-name="Trazado 1"
              d="M27.174,2.827a9.663,9.663,0,0,0-16.027,9.812L.259,23.527A.878.878,0,0,0,0,24.149v4.972A.878.878,0,0,0,.88,30H5.852a.878.878,0,0,0,.621-.258L7.716,28.5a.879.879,0,0,0,.251-.723L7.813,26.44l1.851-.174a.877.877,0,0,0,.792-.792l.174-1.851,1.336.155a.865.865,0,0,0,.686-.216.881.881,0,0,0,.294-.657V21.269h1.607a.878.878,0,0,0,.621-.258l2.254-2.224A9.518,9.518,0,0,0,27.174,16.5,9.679,9.679,0,0,0,27.174,2.827ZM24.687,9.042a2.636,2.636,0,1,1,0-3.729A2.639,2.639,0,0,1,24.687,9.042Z"
              transform="translate(-0.001 0)"
              fill="#3D3D3D"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default IconoPass;
