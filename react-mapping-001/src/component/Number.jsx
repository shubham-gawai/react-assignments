import React from "react";
import "./number.css";

const Number = () => {
  function checkPrime(n) {

    var i,
    flag = true;

    if (n < 2) return false;

    for (i = 2; i <= n - 1; i++)
      if (n % i === 0) {
        flag = false;
        break;
      }

    if (flag === true) return true;
  }

  return (
    <div className="number">

      {Array(32)
        .fill("")
        .map((e, i) => {
          return (
            <div
              className="content"
              style={{
                height: "50px",
                width: "50px",
                backgroundColor: checkPrime(i)
                  ? "#ff5e57"
                  : i % 2 === 0
                  ? "#05c46b"
                  : "#f9ca24",
              }}
            >
              {i}
            </div>
          );
        })}
        
    </div>
  );
};

export default Number;
