import React from "react";

export default function Tabelle({ titel }) {
  const collectInfoData = () => {
    const vname = prompt("Vorname: ");
    const nname = prompt("Nachname: ");
    const kinfo = prompt("Kontakt info: ");

    if (vname !== "" && nname !== "" && kinfo !== "") {
      const user = { vorname: vname, nachname: nname, kontakt: kinfo };
      return user;
    } else {
      alert("Du musst alle felder ausfullen.");
    }
  };
  return (
    <div>
      <h3>{titel}</h3>
      <table>
        <thead>
          <tr>
            <td>Vorname</td>
            <td>Nachname</td>
            <td>Kontakt</td>
          </tr>
        </thead>
        <tbody id="tbody"></tbody>
      </table>
      <button
        onClick={() => {
          const myUser = collectInfoData();
          const connTbody = document.getElementById("tbody");

          myUser !== undefined
            ? (connTbody.innerHTML += `<tr><td>${myUser.vorname}</td><td>${myUser.nachname}</td><td>${myUser.kontakt}</td></tr>`)
            : console.log(myUser);
        }}
      >
        Hinzufügen
      </button>
    </div>
  );
}
