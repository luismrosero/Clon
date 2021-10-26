import { React } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const IconoInstagram = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20.378"
        height="20.352"
        viewBox="0 0 12.378 12.352"
      >
        <g id="instagram" transform="translate(0 0)">
          <path
            id="Trazado_10"
            data-name="Trazado 10"
            d="M383.018,82.072h-9.1a1.467,1.467,0,0,0-1.642,1.653V92.8a1.453,1.453,0,0,0,1.589,1.621h9.152a1.474,1.474,0,0,0,1.637-1.637v-9.1A1.463,1.463,0,0,0,383.018,82.072Zm-1,1.392c1.226,0,1.226,0,1.226,1.226,0,1.2,0,1.2-1.205,1.2s-1.216,0-1.216-1.216S380.82,83.464,382.015,83.464Zm-3.542,2.383a2.395,2.395,0,1,1-2.411,2.368A2.447,2.447,0,0,1,378.474,85.847Zm4.768,6.433c-.01.575-.159.741-.736.741h-8.085c-.566,0-.725-.166-.725-.741,0-1.483.006-3-.022-4.5,0-.426.118-.522.512-.506.565.037.576.016.512.565a3.789,3.789,0,1,0,7.488-.293c-.042-.213.01-.256.2-.256.853-.064.853-.08.853.806Z"
            transform="translate(-372.277 -82.072)"
            fill="#fff"
            fillRule="evenodd"
          />
        </g>
      </svg>
    </div>
  );
};

export default IconoInstagram;
