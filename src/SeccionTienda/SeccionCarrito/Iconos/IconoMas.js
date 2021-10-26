import { React } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 5,
    marginLeft: 7,
    marginBottom: 0,
  },
}));

const IconoMas = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9.426"
        height="9.426"
        viewBox="0 0 6.426 6.426"
      >
        <path
          id="mas"
          d="M8.012-3.623H5.25V-.868H4.341V-3.623H1.586v-.916H4.341V-7.294H5.25v2.755H8.012Z"
          transform="translate(-1.586 7.294)"
          fill="#fff"
        />
      </svg>
    </div>
  );
};

export default IconoMas;
