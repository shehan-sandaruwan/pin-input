import { useEffect, useState } from "react";
import "./App.scss";
import PinInputModal from "./compound/PinIputModal";

const numberOfInput = 5;

function App() {
  const [inputArray, setInputArray] = useState([]);

  useEffect(() => {
    const newInputArray = [];

    for (let i = 0; i < numberOfInput; i++) {
      const inputObj = {
        value: "",
        state: "",
        key: i,
      };
      newInputArray.push(inputObj);
    }

    setInputArray(newInputArray);
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <PinInputModal
          progress={60}
          isSuccess={false}
          inputArray={inputArray}
        />
      </div>
    </div>
  );
}

export default App;
