# Typing Speed Test Application

## Overview
This project is a typing speed test application built using React and Redux. The application allows users to test their typing speed and accuracy by comparing their input against a pre-defined text. The app calculates the words per minute (WPM) and tracks the number of errors made during the typing test.

### Features
`1. Typing Test:` Users can start a typing test that measures their speed and accuracy. The test begins when the user starts typing and lasts for 60 seconds.

`2. Real-time Feedback:` As users type, the text is compared to the original content, and each character is color-coded to indicate correctness (green for correct, red for incorrect).

`3. Timer:` A countdown timer tracks the remaining time during the typing test.

`4. Debounce Input:` User input is debounced to improve performance and avoid unnecessary state updates.

`5. Results Calculation:` The application calculates the WPM and the total number of errors after the test is completed.

`6. Restart Functionality:` Users can restart the test to try again.

- Technologies Used:

`React:` The UI is built using React, a popular JavaScript library for building user interfaces.

`Redux Toolkit:` State management is handled by Redux, utilizing the Redux Toolkit for efficient and concise code.

`TypeScript:` The project is written in TypeScript, providing type safety and improved developer experience.

`use-debounce:` A debounce hook is used to limit the frequency of user input updates, enhancing performance.
### Code Structure

- Components:

`1. TypingBlock:` The main component that handles the typing test logic. It manages user input, the timer, and provides real-time feedback on the typing accuracy.

`2. ResultBlock:` This component displays the results of the typing test, including WPM and errors, and provides an option to restart the test.

- Redux Slice:

`typingSlice:` This slice manages the typing test state, including the user's input, timing, errors, and WPM calculation. It contains the following reducers:

`setUserInput:` Updates the user's input and records the start time if the test has just begun.

`calcResults:` Calculates the WPM and the number of errors after the test is completed.

`restartTyping:` Resets the state to start a new typing test.
