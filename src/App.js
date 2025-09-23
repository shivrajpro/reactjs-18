import { useState } from "react";
import "./styles.css";

export default function App() {
  const [cost, setCost] = useState();
  const [interest, setInterest] = useState();
  const [fee, setFee] = useState();
  const [downPayment, setDownpayment] = useState();
  const [emi, setEmi] = useState();

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
      <input
        type="range"
        id="downpayment"
        value={downPayment}
        onChange={(e) => setDownpayment(e.target.value)}
        min={0}
        max={cost}
      />
      <label htmlFor="emi">Loan per month</label>
      <input
        type="range"
        id="emi"
        onChange={(e) => setEmi(e.target.value)}
        value={emi}
        min={0}
        max={cost}
      />

      <span>Tenure</span>
    </div>
  );
}
