import { useState } from "react";
import "./styles.css";
import { tenureData } from "./utils/tenureData";

export default function App() {
  const [cost, setCost] = useState();
  const [interest, setInterest] = useState();
  const [fee, setFee] = useState();
  const [downPayment, setDownpayment] = useState();
  const [emi, setEmi] = useState();
  const [tenure, setTenure] = useState(12);

  const updateEMI = (e) => {
    if (!cost) return;

    const dp = Number(e.target.value);
    setDownpayment(dp.toFixed(0));

    // calculate emi and update it
  };

  const updateDownpayment = (e) => {
    if (!cost) return;

    const emi = Number(e.target.value);
    setEmi(emi.toFixed(0));

    // calculate downpayment and update it
  };
  const calculateEMI = () => { };

  return (
    <div className="App">
      <h2>EMI Calculator</h2>

      <label htmlFor="cost">Total Cost</label>
      <input
        type="number"
        id="cost"
        placeholder="Enter total cost of asset"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
      />
      <label htmlFor="interest">Interest Rate (in %)</label>
      <input
        type="number"
        id="interest"
        placeholder="Enter interest rate in %"
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
      />
      <label htmlFor="fee">Processing Fee (in %)</label>
      <input
        type="number"
        id="fee"
        placeholder="Enter processing fee in %"
        value={fee}
        onChange={(e) => setFee(e.target.value)}
      />
      <label htmlFor="downpayment">Down Payment</label>
      <div>
        <input
          type="range"
          id="downpayment"
          value={downPayment}
          onChange={updateEMI}
          className="slider"
          min={0}
          max={cost}
        />

        <div className="labels">
          <label>0%</label>
          <b>{downPayment}</b>
          <label>100%</label>
        </div>
      </div>

      <label htmlFor="emi">EMI</label>

      <div>
        <input
          type="range"
          id="emi"
          onChange={updateDownpayment}
          value={emi}
          min={calculateEMI(cost)}
          max={calculateEMI(0)}
          className="slider"
        />
        <div className="labels">
          <label>{calculateEMI(cost)}</label>
          <b>{emi}</b>
          <label>{calculateEMI(0)}</label>
        </div>
      </div>

      <span>Tenure (in months) </span>
      <div className="tenure">
        {tenureData.map((t) => {
          return (
            <button
              className={`tenure-btn ${t === tenure ? "selected" : ""}`}
              key={t}
              onClick={() => setTenure(t)}
            >
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
}
