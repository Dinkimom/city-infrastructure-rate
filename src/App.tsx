import "./styles.css";
import { Controls } from "./components/Controls";
import { Map } from "./components/Map";

export default function App() {
  return (
    <div className="App">
      <Controls />

      <Map />
    </div>
  );
}
