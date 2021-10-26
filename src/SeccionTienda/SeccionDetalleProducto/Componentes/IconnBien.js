import { Grid } from "@material-ui/core";
import { React } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 0,
  },
}));

const IconoBien = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10.609"
        height="12.738"
        viewBox="0 0 7.609 9.738"
      >
        <path
          id="Trazado_175"
          data-name="Trazado 175"
          d="M2476.589,945.788l1.687,3.968,4.59-8.561"
          transform="translate(-2475.934 -940.518)"
          fill="none"
          stroke="#2ab200"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default IconoBien;
