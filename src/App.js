import { useCallback, useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [messageList, setMessageList] = useState([]);

  const resetInputValue = useCallback(() => {
    setInputValue("");
  }, []);

  const addNewMassage = useCallback((author, text) => {
    const massage = {
      author: author,
      text: text,
    };
    setMessageList((prevState) => {
      return [...prevState, massage];
    });
  }, []);

  const init = useRef(false);

  useEffect(() => {
    if (init.current) {
      if (messageList[messageList.length - 1].author === "user") {
        const timerId = setTimeout(() => {
          addNewMassage("bot", "Hello");
        }, 1500);
        return () => {
          clearTimeout(timerId);
        };
      }
    } else {
      init.current = true;
    }
  }, [messageList]);

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewMassage("user", inputValue);
    resetInputValue();
  };

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input value={inputValue} onChange={onChangeInput} type="text" />
        <button type="submit"> submit </button>
      </form>
      <div>
        {messageList.map(({ author, text }, index) => (
          <div key={index}>
            {author}: {text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
