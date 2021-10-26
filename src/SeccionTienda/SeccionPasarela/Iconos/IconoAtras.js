import { React } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 4,
  },
}));

const IconoAtras = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26.553"
        height="20"
        viewBox="0 0 21.553 15"
      >
        <path
          id="atras"
          d="M978.5,304.813a.5.5,0,0,1-.354-.147l-7-7a.523.523,0,0,1-.111-.168.535.535,0,0,1-.035-.165v-.041a.535.535,0,0,1,.035-.165.523.523,0,0,1,.111-.168l7-7a.5.5,0,0,1,.708.707l-6.147,6.147,19.346-.021a.5.5,0,0,1,0,1l-19.346.021,6.147,6.146a.5.5,0,0,1-.354.854Z"
          transform="translate(-971 -289.813)"
          fill="#fff"
        />
      </svg>
    </div>
  );
};

export default IconoAtras;
