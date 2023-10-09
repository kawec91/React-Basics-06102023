import Geschwindigkeit from "./Components/Geschwindigkeit/Geschwindigkeit";
import StromEinAus from "./Components/StromEinAus/StromEinAus";
import Tabelle from "./Components/Tabelle/Tabelle";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <StromEinAus />
      <Geschwindigkeit />
      <Tabelle titel={"Best Titel Ever"} />
    </div>
  );
}
