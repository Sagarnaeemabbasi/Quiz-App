import "./App.css";
import {
  Button,
  Checkbox,
  Grid,
  MenuItem,
  Radio,
  Select,
  Slider,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

function App() {
  let questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York" },
        { answerText: "London" },
        { answerText: "Paris" },
        { answerText: "Dublin"},
      ],
      correctAnwer:"Paris"
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos"  },
        { answerText: "Elon Musk" },
        { answerText: "Bill Gates" },
        { answerText: "Tony Stark"  },
      ],
      correctAnwer:"Elon Musk"
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple" },
        { answerText: "Intel"   },
        { answerText: "Amazon" },
        { answerText: "Microsoft" },
      ],
      correctAnwer:"Apple"
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1" },
        { answerText: "4"  },
        { answerText: "6" },
        { answerText: "7" },
      ],
      correctAnwer:"7"
    },
    {
      questionText: "what is js?",
      answerOptions: [
        {
          answerText:
            "JavaScript is a scripting language used to make the website interactive"
        },
        {
          answerText:
            "JavaScript is an assembly language used to make the website interactive"
        },
        {
          answerText:
            "JavaScript is a compiled language used to make the website interactive"
        },
        { answerText: "None of the mentioned" }

      ],
      correctAnwer:"None of the mentioned"
    },
  ];
  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);
  function CurrentDate() {
    let newDate = new Date("oct 19 2022");
    let minutes = newDate.setMinutes("05");
    let seconds = newDate.setSeconds("00");
    console.log(minutes+":"+seconds);
    
    // let DateStandard = hours < 12 ? "AM" : "PM";
    // hours = hours > 12 ? hours - 12 : hours;
    // minutes = (minutes < 10 ? "0" : "") + minutes;
    // seconds = (seconds < 10 ? "0" : "") + seconds;
    // let DateStr;
    // return (DateStr =
    //   hours + ":" + minutes + ":" + seconds + " " + DateStandard);
  }
  useEffect(()=>{
    CurrentDate();
  },[])
  let next = (val, isCorrect) => {
    let showQuestion = currentQuestion + 1;
    if (showQuestion < questions.length) {
      setCurrentQuestion(showQuestion);
    }
    else{
      setResult(true)
    }
    if (val === isCorrect) {
      setScore(score + 1);
    }
  };

  return (
    <div className="App">
      {result ? (
        <Grid item xs={12}>
          <h1>
            Your Score is {score} / {questions.length}
          </h1>
        </Grid>
      ) : (
        <>
          <h2>
            Question: {currentQuestion + 1} / {questions.length}
          </h2>
        <Grid item lg={12} container spacing={2}>
          <Grid item xs={12} lg={12}>
            {questions[currentQuestion].questionText}
          </Grid>
          {questions[currentQuestion].answerOptions.map((element, index) => {
            return (
              <Grid
                item
                xs={6}
                onClick={() => next(element.answerText, questions[currentQuestion].correctAnwer)}
                key={index}
              >
                {/* <Checkbox value={index}  /> */}
                {element.answerText}
              </Grid>
            );
          })}
        </Grid>
        </>
      )}
    </div>
  );
}
export default App;

// xs -tablet screen
// sm-small screen
// lg-large screen which we use
// md-previous screens for laptop (mid)

{
  /* <Grid item xs={12}>
              <Button onClick={next} variant="outlined">
                Click For Next
              </Button>
            </Grid> */
}
// </Grid>
{
  /* <div>{CurrentDate()}</div> */
}
// </>
