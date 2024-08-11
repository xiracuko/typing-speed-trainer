import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useAppRedux";
import { calcResults, setUserInput } from "../redux/services/typingSlice";
import { useDebounce } from "use-debounce";

const TypingBlock: React.FC = () => {
  const { content, userInput } = useAppSelector((state) => state.typingSlice);
  const dispatch = useAppDispatch();
  const [debouncedInput] = useDebounce(userInput, 500);

  const [isDisabled, setIsDisabled] = React.useState<boolean>(true);
  const [timer, setTimer] = React.useState<number>(60);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (userInput.length >= content.length) setIsDisabled(true);
  }, [userInput, content.length]);

  React.useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (!isDisabled && timer > 0) {
      interval = setInterval(() => {
        setTimer(prevTimer => {

          if (prevTimer <= 1) {
            setIsDisabled(true);
            return 0;
          }

          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isDisabled, timer]);

  React.useEffect(() => {
    dispatch(setUserInput(debouncedInput));
  }, [debouncedInput, dispatch]);

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isDisabled) dispatch(setUserInput(e.target.value));
  }, [dispatch, isDisabled]);

  const handleSubmit = React.useCallback(() => {
    dispatch(calcResults());
  }, [dispatch]);

  const handleStart = () => {
    setIsDisabled(false);
    setTimer(60);
    dispatch(setUserInput(""));

    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 0)
  };

  const getStyledText = () => {
    return content.split("").map((char, index) => {
      const inputChar = userInput[index];
      const color = inputChar === char ? 'green' : inputChar === undefined ? '#a3a3a3' : 'red';
      return (
        <span key={index} style={{ color }} className="textContentChar">
          {char}
          {index === userInput.length && !isDisabled && <div className="caret"></div>}
        </span>
      );
    });
  };

  return (
    <div className="infoBlock">
      <p className="timer">{timer}</p>
      <div className="textContentFunc" style={{ opacity: isDisabled ? 0.5 : 1 }}>
        {getStyledText()}
      </div>
      <form className="formBlock">
        <input
          className="inputField"
          type="text"
          value={userInput}
          onChange={handleChange}
          disabled={isDisabled}
          ref={inputRef}
          autoFocus
          spellCheck="false"
        />
        <div className="buttonBlock">
          <button className="formButton" onClick={handleStart} disabled={!isDisabled}>start</button>
          <button className="formButton" onClick={handleSubmit}>submit</button>
        </div>
      </form>
    </div>
  )
}

export default TypingBlock;