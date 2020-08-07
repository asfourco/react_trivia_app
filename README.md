# Trivia App

## Description

This is a simple Trivia app based on the [short course from freeCodeCamp](https://www.freecodecamp.org/news/how-to-build-a-quiz-app-using-react-and-typescript/). It uses the [open trivia DB API](https://opentdb.com). The difference between this code and that of the course is that I chose to use "Science & Nature" category and to display the user answers at the end of the quiz.

## Usage

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Modifications

The API url can be modified within [API.ts](./src/API.ts) in the function `fetchQuizQuestions()`. Modify the endpoint to point to the API url generated at the Open Trivia Database site.