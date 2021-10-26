import { React } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {marginTop: 2},
}));

const IconoCarritoBlanco = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
  <g id="carrito" transform="translate(-366.966 -126.608)">
    <circle id="Elipse_3" data-name="Elipse 3" cx="2" cy="2" r="2" transform="translate(373.466 143.608)" fill="#f1f1f1"/>
    <circle id="Elipse_4" data-name="Elipse 4" cx="2" cy="2" r="2" transform="translate(381.466 143.608)" fill="#f1f1f1"/>
    <path id="Trazado_11" data-name="Trazado 11" d="M375.606,142.608a3,3,0,0,1-2.92-2.4l-2.525-11.6h-2.2a1,1,0,0,1,0-2h3a1,1,0,0,1,.977.787l.7,3.213h14.323a1,1,0,0,1,.983,1.187l-1.6,8.4a3.033,3.033,0,0,1-3,2.413h-7.74Zm-2.527-10,1.564,7.187a1,1,0,0,0,1,.813h7.72a1.02,1.02,0,0,0,1.02-.8l1.372-7.2Z" fill="#f1f1f1"/>
  </g>
</svg>
    </div>
  );
};

export default IconoCarritoBlanco;
