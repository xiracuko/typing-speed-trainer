import React from 'react';
import TypingBlock from './components/TypingBlock';
import ResultBlock from './components/ResultBlock';
import { useAppSelector } from './hooks/useAppRedux';
import "./scss/style.scss"

const App: React.FC = () => {
  const completed = useAppSelector((state) => state.typingSlice.completed);

  return (
    <div className="container">
      {completed ? <ResultBlock /> : <TypingBlock />}
    </div>
  );
}

export default App;