import { CompFilhoC } from "../CompFilhoC/CompFilhoC";
import "./CompFilhoA.css";

export function CompFilhoA() {
  return(
    <div className="filho-a">
      <h3>Filho A</h3>
      <CompFilhoC /> 
    </div>
    );
}
