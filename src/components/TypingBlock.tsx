import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useAppRedux";
import { calcResults, setUserInput } from "../redux/services/typingSlice";
import { useDebounce } from "use-debounce";

const TypingBlock: React.FC = () => {
  const { content, userInput } = useAppSelector((state) => state.typingSlice);
  const dispatch = useAppDispatch();
  const [debouncedInput] = useDebounce(userInput, 500);

  React.useEffect(() => {
    dispatch(setUserInput(debouncedInput));
  }, [debouncedInput, dispatch]);

  const handleChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserInput(e.target.value));
  }, [dispatch]);

  const handleSubmit = React.useCallback(() => {
    dispatch(calcResults());
  }, [dispatch]);

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        value={userInput}
        placeholder={content}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  )
}

export default TypingBlock;