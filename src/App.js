import { useCallback, useEffect, useState } from "react";
import "./App.scss";
import PinInputModal from "./compound/PinIputModal";

const numberOfInput = 5;
const pin = "13456";

function App() {
  const [inputArray, setInputArray] = useState([]);
  const [pinValue, setPinValue] = useState("");
  const [hideModeEnable, setHideModeEnable] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const newInputArray = [];

    for (let i = 0; i < numberOfInput; i++) {
      const inputObj = {
        value: "",
        state: i === 0 ? "focus" : "",
        key: i,
      };
      newInputArray.push(inputObj);
    }

    setInputArray(newInputArray);
  }, []);

  useEffect(() => {
    modeledPin(pin);
  }, []);

  const modeledPin = useCallback((pin) => {
    setPinValue(pin);
  }, []);

  const onChangeInputValue = useCallback((key, value) => {
    const modifiedInputArray = inputArray.map((input, index) => {
      if (input.key === key && pinValue.charAt(index) === value) {
        input.value = value;
        input.state = "sucess";
        const _progress = ((index + 1) / inputArray.length) * 100;
        setProgress(_progress);
        if (inputArray[index + 1]) {
          inputArray[index + 1].state = "focus";
        }
      } else if (input.key === key && pinValue[index] !== value) {
        input.value = value;
        input.state = "error";
      }

      return input;
    });

    setInputArray(modifiedInputArray);
  });

  const onClickHideMode = (event) => {
    setHideModeEnable(event.target.checked);
  };

  return (
    <div className="App">
      <div className="App-header">
        <PinInputModal
          progress={progress}
          isSuccess={false}
          inputArray={inputArray}
          pinValue={pinValue}
          inputChangeHandler={onChangeInputValue}
          hideModeEnable={hideModeEnable}
          onClickHideMode={onClickHideMode}
        />
      </div>
    </div>
  );
}

export default App;
