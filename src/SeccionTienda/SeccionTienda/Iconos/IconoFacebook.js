import { React } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {

    marginLeft: 3
  },
}));

const IconoFacebook = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14.236"
        height="25.47"
        viewBox="0 0 11.236 22.47"
      >
        <path
          id="facebook"
          d="M15.372,3.731h2.051V.158A26.489,26.489,0,0,0,14.434,0C11.477,0,9.451,1.86,9.451,5.28V8.426H6.187V12.42H9.451V22.47h4V12.421h3.132l.5-3.994h-3.63V5.676c0-1.154.312-1.945,1.92-1.945Z"
          transform="translate(-6.187)"
          fill="#fff"
        />
      </svg>
    </div>
  );
};

export default IconoFacebook;
