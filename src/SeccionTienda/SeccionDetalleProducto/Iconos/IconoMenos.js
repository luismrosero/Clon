import { React } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: -1,
    marginLeft: 9,
  },
}));

const IconoMenos = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
   <svg xmlns="http://www.w3.org/2000/svg" width="7.743" height="0.896" viewBox="0 0 7.743 0.896">
  <path id="menos" d="M7.752.9H.009V0H7.752Z" transform="translate(-0.009)" fill="#333"/>
</svg>

    </div>
  );
};

export default IconoMenos;
