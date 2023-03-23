import { useContext } from "react";
import { Alert } from "react-bootstrap";
import { BatataContext } from "../../contexts/BatataContext";
import "./CompFilhoD.css";


export function CompFilhoD() {

const resultado = useContext(BatataContext)

  return (
    <div className="filho-d">
        <h3>Filho D</h3>
        <Alert variant="danger">
          Valor: {resultado}
        </Alert>        
    </div>
  );
}
