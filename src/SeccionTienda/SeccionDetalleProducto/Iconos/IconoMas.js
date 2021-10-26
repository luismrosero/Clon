import { React } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 2,
    marginLeft: 8,
  },
}));

const IconoMas = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8.771"
        height="9.316"
        viewBox="0 0 8.771 9.316"
      >
        <path
          id="mas"
          d="M5.537-6.5H9.431v.984H5.537v4.236H4.474V-5.52H.659V-6.5H4.474v-4.1H5.537Z"
          transform="translate(-0.659 10.6)"
          fill="#333"
        />
      </svg>
    </div>
  );
};

export default IconoMas;
