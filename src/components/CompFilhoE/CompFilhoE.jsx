import { useContext } from "react";
import { BatataContext } from "../../contexts/BatataContext";
import "./CompFilhoE.css";

// hook useContext - captura o valor que é fornecido por algum Provider

export function CompFilhoE() {

    // capturando os dados d value do provider:
  const resultado = useContext(BatataContext)

  return (
    <div className="filho-e">
        <h3>Filho E</h3>
        <p>
          <b>Valor: </b>
          {resultado}
        </p>
    </div>
  );
}
