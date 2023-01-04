import { useCallback, useEffect, useState } from "react";
import "./App.scss";
import PinInputModal from "./compound/PinIputModal";
import ToastMessage from "./compound/ToastMessage";

const pin = "13456";
const inputValue = "134   asdff56";

function App() {
  const [inputArray, setInputArray] = useState([]);
  const [pinValue, setPinValue] = useState("");
  const [hideModeEnable, setHideModeEnable] = useState(false);
  const [progress, setProgress] = useState(0);
  const [alertConf, setAlertConf] = useState({
    message: "",
    severity: "none",
  });

  useEffect(() => {
    if (document && inputArray.length > 0) {
      document.addEventListener("paste", (event) => {
        event.preventDefault();
        event.stopPropagation();

        handlePasteInputEvent(event);
      });
    }

    return () => {
      document.removeEventListener("paste", handlePasteInputEvent);
    };
  }, [inputArray]);

  useEffect(() => {
    if (pinValue) {
      const generatedInputArray = generateInputArray();
      setInputArray(generatedInputArray);
    }
  }, [pinValue]);

  const handlePasteInputEvent = (event) => {
    const paste = event.clipboardData.getData("text");

    if (paste) {
      const pattern = /^\d+(?: *- *[a-zA-Z0-9 ]+)+$/;
      const _pinValue = paste.split(pattern)?.join("");

      for (let i = 0; i < _pinValue.length; i++) {
        onChangeInputValue(i, _pinValue[i]);

        if (_pinValue.charAt(i) !== pinValue.charAt(i)) {
          break;
        }
      }
    }
  };

  useEffect(() => {
    modeledPin(pin);
  }, []);

  const modeledPin = useCallback((pin) => {
    setPinValue(pin);
  }, []);

  const generateInputArray = useCallback(() => {
    const newInputArray = [];

    for (let i = 0; i < pinValue.length; i++) {
      const inputObj = {
        value: "",
        state: i === 0 ? "focus" : "",
        key: i,
      };
      newInputArray.push(inputObj);
    }

    return newInputArray;
  }, [pinValue]);

  const onChangeInputValue = (key, value) => {
    const modifiedInputArray = inputArray.map((input, index) => {
      if (input.key === key && pinValue.charAt(index) === value) {
        input.value = value;
        input.state = "success";
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
  };

  const onClickHideMode = (event) => {
    setHideModeEnable(event.target.checked);
  };

  const onSumitHandler = () => {
    if (progress === 100) {
      setAlertConf({
        message: "Success !",
        severity: "success",
      });
    }
  };

  return (
    <div className="App">
      <ToastMessage message={alertConf.message} severity={alertConf.severity} />
      <div className="App-header">
        <PinInputModal
          progress={progress}
          isSuccess={false}
          inputArray={inputArray}
          pinValue={pinValue}
          inputChangeHandler={onChangeInputValue}
          hideModeEnable={hideModeEnable}
          onClickHideMode={onClickHideMode}
          onSumitHandler={onSumitHandler}
        />
      </div>
    </div>
  );
}

export default App;
