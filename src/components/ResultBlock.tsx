import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useAppRedux";
import { restartTyping } from "../redux/services/typingSlice";

const ResultBlock: React.FC = () => {
  const { errors, wpm } = useAppSelector((state) => state.typingSlice);
  const dispatch = useAppDispatch();

  const handleRestart = React.useCallback(() => {
    dispatch(restartTyping());
  }, [dispatch]);

  return (
    <div>
      <p>Errors: {errors}</p>
      <p>Wpm: {wpm}</p>
      <button onClick={handleRestart}>restart</button>
    </div>
  )
}

export default ResultBlock;