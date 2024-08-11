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
    <div className="resultBlock">
      <div className="resultInfo">
        <p>Errors: <span>{errors}</span></p>
        <p>Wpm: <span>{wpm.toFixed(2)}</span></p>
      </div>
      <button className="restartButton" onClick={handleRestart}>restart</button>
    </div>
  )
}

export default ResultBlock;