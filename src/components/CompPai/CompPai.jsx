import { useState } from "react";
import { CompFilhoA } from "../CompFilhoA/CompFilhoA";
import { CompFilhoB } from "../CompFilhoB/CompFilhoB";
import "./CompPai.css";
import { BatataContext } from "../../contexts/BatataContext";

export function CompPai() {
  // primeiramente definimos uma informação que os componentes da hierarquia irão precisar
  const [batata, setBatata] = useState("batata");

  function repetir() {
    setBatata(batata + "a");
  }

  return (
    <div className="pai">
        <h3>PAI</h3>        
        <p>
          <b>Valor: </b>
          {batata}
        </p>
        <button className="btn btn-dark" onClick={repetir}>Repetir</button>
        {/*Fornece o value para a hierarquia:*/}
        <BatataContext.Provider value={batata}>
          <CompFilhoA />
          <CompFilhoB />
        </BatataContext.Provider>
    </div>
  );
}
