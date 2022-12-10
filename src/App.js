import "./App.css";
import Dragable from "./components/Dragable";
import Weight from "./components/Weight";
import Scales from "./components/Scales";

function App() {
  return (
    <div className="App">
      <Scales />
      <Dragable pos={[0, 10]} size={[30, 40]}>
        <Weight label="1kg" labelSize="14px" />
      </Dragable>
      <Dragable pos={[0, 50]} size={[40, 50]}>
        <Weight label="3kg" labelSize="18px" />
      </Dragable>
      <Dragable pos={[0, 100]} size={[50, 60]}>
        <Weight label="5kg" labelSize="20px" />
      </Dragable>
    </div>
  );
}

export default App;
