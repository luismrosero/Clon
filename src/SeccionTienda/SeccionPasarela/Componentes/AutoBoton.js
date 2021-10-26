import { React, useEffect } from "react";

const AutoBoton = (props) => {
  const { pedidoCompleto, tienda, cantidad, setCantidad, setCargo } = props;
  useEffect(() => {
    

    const script = document.createElement("script");
    script.src = "https://checkout.epayco.co/checkout.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      setCargo(false)
      document.body.removeChild(script);
    };
  }, [pedidoCompleto]);
  return (
    <div style={{display: "none"}} >
      <form>
        <script        
          src="https://checkout.epayco.co/checkout.js"
          className="epayco-button"
          data-epayco-key={tienda.key}
          data-epayco-amount={pedidoCompleto.valTotal}
          data-epayco-name={pedidoCompleto.id}
          data-epayco-description={"Pedido con " + cantidad + " de articulos a " + tienda.nombre}
          data-epayco-currency="cop"
          data-epayco-country="co"
          data-epayco-test="true"
          data-epayco-extra1={pedidoCompleto.id}
          data-epayco-autoclick="true"
          data-epayco-external="false"         
          data-epayco-response={
            "https://starfy-7a1d3.web.app/recepcion/?id=" + pedidoCompleto.id
          }
          data-epayco-confirmation="http://starfy-7a1d3.web.app/confirmacion.php"
        />
      </form>
    </div>
  );
};

export default AutoBoton;
