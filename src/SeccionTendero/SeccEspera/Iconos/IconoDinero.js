import { React } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 2,
    marginRight: 6,
  },
}));

const IconoDinero = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12.359"
        height="21.188"
        viewBox="0 0 12.359 21.188"
      >
        <path
          id="dinero"
          d="M-1417.014-148.27h-1.324v-4.414h3.531a.883.883,0,0,0,.883-.883.883.883,0,0,0-.883-.883h-3.531V-157.1a.883.883,0,0,0-.883-.883.883.883,0,0,0-.883.883v2.648h-1.324a3.977,3.977,0,0,0-3.973,3.973,3.977,3.977,0,0,0,3.973,3.973h1.324v4.414h-4.414a.883.883,0,0,0-.883.883.883.883,0,0,0,.883.883h4.414v2.648a.883.883,0,0,0,.883.883.883.883,0,0,0,.883-.883v-2.648h1.324a3.978,3.978,0,0,0,3.973-3.973A3.978,3.978,0,0,0-1417.014-148.27Zm-4.414,0a2.21,2.21,0,0,1-2.207-2.207,2.21,2.21,0,0,1,2.207-2.207h1.324v4.414Zm4.414,6.18h-1.324V-146.5h1.324a2.21,2.21,0,0,1,2.207,2.207A2.21,2.21,0,0,1-1417.014-142.09Z"
          transform="translate(1425.401 157.981)"
          fill="gray"
        />
      </svg>
    </div>
  );
};

export default IconoDinero;
