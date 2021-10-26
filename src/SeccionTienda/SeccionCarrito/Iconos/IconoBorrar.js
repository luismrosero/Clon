import { React } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 8,
    marginRight: 8,
    marginTop: 1,
    marginBottom: 2,

  },
}));

const IconoBorrar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="7.875"
        height="9.803"
        viewBox="0 0 7.875 9.803"
      >
        <path
          id="borrar"
          d="M8.053,0h-1.4L4.4-3.753a3.365,3.365,0,0,1-.226-.485H4.143q-.068.157-.232.485L1.586,0H.178L3.459-4.929.438-9.8H1.846l2,3.445a6.911,6.911,0,0,1,.349.684h.027a7.548,7.548,0,0,1,.383-.711L6.692-9.8H8.012L4.929-4.942Z"
          transform="translate(-0.178 9.803)"
          fill="#fff"
        />
      </svg>
    </div>
  );
};

export default IconoBorrar;
