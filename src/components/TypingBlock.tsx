import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useAppRedux";
import { calcResults, setUserInput } from "../redux/services/typingSlice";

const TypingBlock: React.FC = () => {
  const { content, userInput } = useAppSelector((state) => state.typingSlice);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserInput(e.target.value));
  }

  const handleSubmit = () => dispatch(calcResults());

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