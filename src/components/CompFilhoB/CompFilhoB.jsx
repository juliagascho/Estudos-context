import { useContext } from "react";
import { Alert } from "react-bootstrap";
import { BatataContext } from "../../contexts/BatataContext";
import "./CompFilhoB.css";

export function CompFilhoB() {

  const resultado = useContext(BatataContext);

  return (
    <div className="filho-b">
      <h3>Filho B</h3>
      <Alert variant="primary">
          Valor: {resultado}
      </Alert>  
    </div>
  );
}
