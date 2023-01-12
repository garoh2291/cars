import "./App.css";
import { CarContextProvider } from "./context/provider";
import "antd/dist/reset.css";
import { Calculator } from "./components/Calculator";
function App() {
  return (
    <CarContextProvider>
      <div className="App">
        <Calculator />
      </div>
      ;
    </CarContextProvider>
  );
}
export default App;
