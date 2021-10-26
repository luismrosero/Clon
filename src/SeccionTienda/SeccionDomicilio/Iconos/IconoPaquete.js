import { React } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 4,
  },
}));

const IconoPaquete = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <svg xmlns="http://www.w3.org/2000/svg" width="19.643" height="21.608" viewBox="0 0 19.643 21.608">
  <path id="paquete" d="M272.316,235.608h-13.75a2.95,2.95,0,0,1-2.946-2.947v-13.75a.982.982,0,0,1,.2-.589l2.946-3.929a.983.983,0,0,1,.786-.393h11.786a.982.982,0,0,1,.786.393l2.947,3.929a.982.982,0,0,1,.2.589v13.75A2.95,2.95,0,0,1,272.316,235.608Zm-14.733-15.715v12.768a.983.983,0,0,0,.982.982h13.75a.983.983,0,0,0,.982-.982V219.893Zm.982-1.964h13.75l-1.473-1.964h-10.8Zm6.875,9.822a4.916,4.916,0,0,1-4.911-4.911.982.982,0,0,1,1.964,0,2.947,2.947,0,0,0,5.893,0,.982.982,0,1,1,1.964,0A4.916,4.916,0,0,1,265.441,227.75Z" transform="translate(-255.619 -214)" fill="#fff"/>
</svg>
    </div>
  );
};

export default IconoPaquete;
