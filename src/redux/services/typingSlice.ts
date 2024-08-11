import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateProps } from "../../types";

export const initialState: StateProps = {
  content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quam? Culpa autem esse modi aliquam accusantium non odio praesentium debitis cum similique maiores quas architecto eveniet vero dolores ex explicabo, reprehenderit dolorum aut provident! Ipsa temporibus rem unde pariatur earum, consectetur nostrum aut soluta quasi labore facere veritatis debitis tempora?",
  userInput: "",
  startTime: 0,
  errors: 0,
  wpm: 0,
  completed: false
};

export const typingSlice = createSlice({
  name: "typing",
  initialState,
  reducers: {
    setUserInput: (state, action: PayloadAction<string>) => {
      state.userInput = action.payload;
      if (!state.startTime) state.startTime = Date.now();
    },
    calcResults: (state) => {
      const endTime = Date.now();
      const timeTaken = (endTime - state.startTime) / 60000;
      const wordsTyped = state.userInput.split(" ").length;

      state.wpm = (wordsTyped / timeTaken);
      state.errors = [...state.content].filter((char, index) => char !== state.userInput[index]).length;
      state.completed = true;
    },
    restartTyping: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { setUserInput, calcResults, restartTyping } = typingSlice.actions;
export default typingSlice.reducer;