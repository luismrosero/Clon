import { React } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 2, 
    marginRight: 1
  },
}));

const IconoPago = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
 <svg xmlns="http://www.w3.org/2000/svg" width="9.667" height="16.573" viewBox="0 0 9.667 16.573">
  <path id="pago" d="M-1418.841-150.385h-1.036v-3.453h2.762a.691.691,0,0,0,.69-.691.691.691,0,0,0-.69-.691h-2.762v-2.072a.691.691,0,0,0-.691-.691.69.69,0,0,0-.691.691v2.072h-1.036a3.111,3.111,0,0,0-3.107,3.107,3.111,3.111,0,0,0,3.107,3.107h1.036v3.453h-3.453a.69.69,0,0,0-.691.691.69.69,0,0,0,.691.691h3.453v2.072a.69.69,0,0,0,.691.691.691.691,0,0,0,.691-.691v-2.072h1.036a3.111,3.111,0,0,0,3.107-3.107A3.111,3.111,0,0,0-1418.841-150.385Zm-3.453,0a1.728,1.728,0,0,1-1.726-1.726,1.728,1.728,0,0,1,1.726-1.726h1.036v3.453Zm3.453,4.834h-1.036V-149h1.036a1.729,1.729,0,0,1,1.726,1.726A1.729,1.729,0,0,1-1418.841-145.551Z" transform="translate(1425.401 157.981)"/>
</svg>

    </div>
  );
};

export default IconoPago;
