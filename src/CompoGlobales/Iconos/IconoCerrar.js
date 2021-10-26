import { React, useContext } from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 7,
  },
}));

const IconoCerrar = (props) => {
  const { cerrar } = props;

  const classes = useStyles();

  return (
    <div className={classes.root} onClick={() => cerrar()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 30 30"
      >
        <path
          id="cerrar"
          d="M19.95,15,29.231,5.72a2.624,2.624,0,0,0,0-3.712L27.994.771a2.624,2.624,0,0,0-3.712,0L15,10.052,5.72.769a2.624,2.624,0,0,0-3.712,0L.769,2.006a2.624,2.624,0,0,0,0,3.712L10.052,15,.771,24.282a2.624,2.624,0,0,0,0,3.712l1.237,1.237a2.624,2.624,0,0,0,3.712,0L15,19.95l9.281,9.281a2.624,2.624,0,0,0,3.712,0l1.237-1.237a2.624,2.624,0,0,0,0-3.712Zm0,0"
          fill="#fff"
        />
      </svg>
    </div>
  );
};

export default IconoCerrar;
