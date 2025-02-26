import { useState } from "react";
import "./App.css";

function App() {
  const [invest, setInvest] = useState(100);
  const [rate, setRate] = useState(10);
  const [goal, setGoal] = useState(300);
  const [results, setResults] = useState([]);

  const calculateInvestment = () => {
    let year = new Date().getFullYear();
    let currentInvest = parseFloat(invest);
    let interestRate = parseFloat(rate) / 100;
    let target = parseFloat(goal);
    let tempResults = [];

    while (currentInvest < target) {
      let result = currentInvest + currentInvest * interestRate;
      tempResults.push({
        year,
        invest: currentInvest.toFixed(2),
        rate,
        result: result.toFixed(2),
      });
      currentInvest = result;
      year++;
    }
    setResults(tempResults);
  };

  return (
    <div className="container">
      <p style={{ color: "black" }}>Calculation Investment</p>
      <div className="input">
        <span style={{ color: "black" }}>Invest:</span>
        <input
          type="number"
          value={invest}
          onChange={(e) => setInvest(e.target.value)}
        />
      </div>
      <br />
      <div className="input">
        <span style={{ color: "black" }}>Rate:</span>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <br />
      <div className="input">
        <span style={{ color: "black" }}>Goal:</span>
        <input
          type="number"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
      </div>
      <br />
      <button onClick={calculateInvestment}>Cal</button>
      <br />
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "#f4f4f4",
              textAlign: "left",
              color: "black",
            }}
          >
            <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
              Year
            </th>
            <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
              Invest
            </th>
            <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
              Rate (%)
            </th>
            <th style={{ padding: "10px", borderBottom: "2px solid #ddd" }}>
              Result
            </th>
          </tr>
        </thead>
        <tbody>
          {results.map((item, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#fafafa" : "#fff",
                color: "black",
              }}
            >
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                {item.year}
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                {item.invest}
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                {item.rate}
              </td>
              <td style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
                {item.result}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
