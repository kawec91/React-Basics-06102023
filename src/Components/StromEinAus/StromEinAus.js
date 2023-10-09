import React, { useState } from "react";
import classes from "./stromEinAus.module.css";

export default function StromEinAus() {
  const [myWert, changeWert] = useState(0);
  const wechseln = () => {
    switch (myWert) {
      case 0:
        changeWert(1);
        break;
      default:
        changeWert(0);
        break;
    }
  };
  return (
    <header>
      <p className={classes.textWhite}>
        <b
          onMouseDown={wechseln}
          className={myWert === 1 ? classes.bgIndigo : classes.bgHotPink}
        >
          {myWert === 1 ? "Strom fließt" : "Kein Strom"}
        </b>
      </p>
    </header>
  );
}
