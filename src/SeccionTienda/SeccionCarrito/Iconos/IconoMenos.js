import { React } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 3,
    marginLeft: 9,
  },
}));

const IconoMenos = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="7.732"
        height="4.882"
        viewBox="0 0 3.732 0.882"
      >
        <path
          id="menos"
          d="M4.717-3.459H.984v-.882H4.717Z"
          transform="translate(-0.984 4.341)"
          fill="#fff"
        />
      </svg>
    </div>
  );
};

export default IconoMenos;
