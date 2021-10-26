import { React } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 0,
    marginTop: -2,
  },
}));

const IconoTiktok = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="22.764"
        viewBox="0 0 20 22.764"
      >
        <g id="tik-tok" transform="translate(-31.423 -0.39)">
          <path
            id="Trazado_175"
            data-name="Trazado 175"
            d="M51.412,6.09a5.736,5.736,0,0,1-3.466-1.158A5.737,5.737,0,0,1,45.655.39H41.938V10.546l0,5.563a3.37,3.37,0,1,1-2.311-3.192V9.143a7.314,7.314,0,0,0-1.072-.079,7.127,7.127,0,0,0-5.356,2.4,6.985,6.985,0,0,0,.315,9.631,7.25,7.25,0,0,0,.672.586,7.128,7.128,0,0,0,4.369,1.477,7.314,7.314,0,0,0,1.072-.079,7.1,7.1,0,0,0,3.968-1.985,6.959,6.959,0,0,0,2.088-4.952L45.66,7.831a9.418,9.418,0,0,0,5.763,1.958v-3.7Z"
            transform="translate(0)"
            fill="#fff"
          />
        </g>
      </svg>
    </div>
  );
};

export default IconoTiktok;
