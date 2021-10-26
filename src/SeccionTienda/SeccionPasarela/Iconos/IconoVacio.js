import { React } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: -10,
    
  },
}));

const IconoVacio = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      
    </div>
  );
};

export default IconoVacio;
