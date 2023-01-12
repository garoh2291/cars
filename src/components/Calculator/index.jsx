import { Header } from "../header";
import { CalcBody } from "./CalcBody";
import "./styles.css";

export const Calculator = () => {
  return (
    <div className="calculator-wrapper">
      <div className="container">
        <Header />
        <CalcBody />
      </div>
    </div>
  );
};
