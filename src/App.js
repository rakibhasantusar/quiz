import { useState } from "react";
import "./App.css";
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from "react-bootstrap";

const questions = [
  {
    questionText: "What is the main language india?",
    answerOptions: [
      { answerText: "Hindi", isCorrect: true },
      { answerText: "Bangla", isCorrect: false },
      { answerText: "English", isCorrect: false },
      { answerText: "polish", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which team win fifa world cup 2022?",
    answerOptions: [
      { answerText: "Argentina", isCorrect: true },
      { answerText: "Brazil", isCorrect: false },
      { answerText: "Netherland", isCorrect: false },
      { answerText: "Croetia", isCorrect: false },
    ],
  },
  {
    questionText: "which company made Iphone?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "which is made by Shahjahan?",
    answerOptions: [
      { answerText: "Tazmahal", isCorrect: true },
      { answerText: "kotabari", isCorrect: false },
      { answerText: "lal bag killa", isCorrect: false },
      { answerText: "Aram bag", isCorrect: false },
    ],
  },
];

function App() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [mark, setMark] = useState(0);
  const [wronng, setWronng] = useState(0)

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
      setMark(mark + 25);
    } else {
      setWronng(wronng + 25);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (

    <div>
      <div className="w-full mb-5">
        <Container fluid>
          <Row>
            <Col><ProgressBar striped variant="success" now={mark} label={`${mark}%`} /></Col>
            <Col><ProgressBar striped variant="danger" now={wronng} label={`${wronng}%`} /></Col>
          </Row>
        </Container>
      </div>

      <div className="app">
        {showScore ? (
          <div className="score-section">
            Your Score is {score} Out of {questions.length}
          </div>
        ) : (
          <>

            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>

            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <button
                    onClick={() => handleAnswer(answerOption.isCorrect)}
                    key={index}
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            </div>
          </>
        )}
      </div>

    </div>
  );
}

export default App;
