import React, { useState, useEffect } from "react";
import "./style.css"; // Assuming style.css is in the same directory as your component

const Calculator = () => {
  const [num, setNum] = useState({ num1: "", num2: "" });
  const [message, setMessage] = useState({
    success: "Success",
    error: "Error!!!",
  });
  const [res, setRes] = useState("");
  const [operation, setOperation] = useState("");

  const calculateResult = (num1, num2) => {
    const a = parseInt(num1);
    const b = parseInt(num2);

    if (operation === "+") setRes(a + b);
    else if (operation === "-") setRes(a - b);
    else if (operation === "/") setRes(a / b);
    else if (operation === "*") setRes(a * b);
  };

  useEffect(() => {
    if (num.num1 !== "" && num.num2 !== "") {
      calculateResult(num.num1, num.num2);
    }
  }, [operation, num]); // Trigger the effect when the operation or numbers change

  return (
    <div className="container">
      <div className="display">
        <h1>React Calculator</h1>
        <input
          type="text"
          placeholder="Num1"
          required
          onChange={(e) => setNum({ ...num, num1: e.target.value })}
        />
        <input
          type="text"
          placeholder="Num2"
          required
          onChange={(e) => setNum({ ...num, num2: e.target.value })}
        />
        <div className="operation">
          {["+", "-", "*", "/"].map((val) => (
            <button key={val} onClick={() => setOperation(val)}>
              {val}
            </button>
          ))}
        </div>
        <div>
          <h2 style={{ color: message.error === "Error!!!" ? "red" : "green" }}>
            {num.num1 !== "" && num.num2 !== ""
              ? message.success
              : message.error}
          </h2>

          <h2>
            {num.num1 !== "" && num.num2 !== "" ? (
              <h3>Your Result :{res}</h3>
            ) : (
              "Numbers cannot be empty"
            )}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
