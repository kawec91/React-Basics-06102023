import React, { useState } from "react";
import classes from "./geschwindigkeit.module.css";

export default function Geschwindigkeit() {
  const [speed, changeSpeed] = useState(0);
  const schneller = () => {
    changeSpeed(speed + 5);
  };
  const langsamer = () => {
    changeSpeed(speed - 5);
  };
  const nochSchneller = () => {
    changeSpeed(speed + 15);
  };
  const nochLangsamer = () => {
    changeSpeed(speed - 15);
  };
  return (
    <main>
      <div>
        <p
          className={
            speed > 0
              ? classes.moreThanZero
              : speed < 0
              ? classes.lessThanZero
              : classes.zero
          }
        >
          {speed}
        </p>
        <button onClick={schneller}>1</button>
        <button onClick={langsamer}>2</button>
        <button onClick={nochSchneller}>3</button>
        <button onClick={nochLangsamer}>4</button>
      </div>
    </main>
  );
}
