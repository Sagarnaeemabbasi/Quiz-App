import {
  Checkbox,
  MenuItem,
  Radio,
  Select,
  Slider,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

function App() {
  let mark = [
    {
      value: 0,
      label: "start",
    },
    {
      value: 100,
      label: "mid",
    },
    {
      value: 190,
      label: "end",
    },
    {
      value: 75,
      label: "custom",
    },
  ];
  let [name, setName] = useState(["sagar"]);
  let [gender, setGender] = useState("female");
  function checkFunction(value) {
    setName([...name, value.target.value]);
    console.log(name);
  }
  let genderFunction = (e) => {
    setGender(e);
    console.log(e);
  };
  let changeHandler = (e, val) => {
    // console.log(e,val);
    setVal(val);
  };
  let [val, setVal] = useState([20, 100]);
  let [course, setCourse] = useState("empty");
  let selectHandler = (e) => {
    setCourse(e.target.value);
  };
  let change = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <div className="App">
        <h2>This Is Material UI work</h2>
        <Select value={course} onChange={selectHandler}>
          <MenuItem value="empty">Select One</MenuItem>
          <MenuItem value={1}>Node</MenuItem>
          <MenuItem value={2}>Php</MenuItem>
          <MenuItem value={3}>JavaScript</MenuItem>
          <MenuItem value={4}>React</MenuItem>
        </Select>
        <hr />
        <TextField
          label="Enter Here"
          color="secondary"
          //  variant="outlined"
          variant="filled"
          //  type="password"
          //  type="number"
          onChange={change}
        />
        {/* <div style={{width:300,margin:30}}>
          <Slider 
          color="secondary"
          valueLabelDisplay="auto"
          defaultValue={0} //where the slider is placed
          max={200}  // total value of slider
          step={10}   // how many steps the slider takes 
          // marks={mark}
          value={val}
          onChange={changeHandler}
          // orientation="vertical"
          />
        </div> */}
      </div>{" "}
      <Checkbox
        indeterminate
        color="default"
        value="Ali"
        onClick={(e) => checkFunction(e)}
      />
      <Checkbox
        color="secondary"
        checked
        value="sagar"
        onClick={(e) => checkFunction(e)}
      />
      <Checkbox
        color="secondary"
        icon={<Favorite />}
        checkedIcon={<FavoriteBorder />}
        value="xyz"
        onClick={(e) => checkFunction(e)}
      />
      <div>
        <Radio
          color="secondary"
          value="male"
          onChange={(e) => genderFunction(e.target.value)}
          checked={gender === "male"}
        />{" "}
        Male
      </div>
      <div>
        <Radio
          value="female"
          onChange={(e) => genderFunction(e.target.value)}
          checked={gender === "female"}
        />{" "}
        Female
      </div>
    </>
  );
}

// xs -tablet screen
// sm-small screen
// lg-large screen which we use
// md-previous screens for laptop (mid)

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
import { useState } from "react";

function App() {
  let questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York" },
        { answerText: "London" },
        { answerText: "Paris" },
        { answerText: "Dublin" },
      ],
      correctAnwer: "Paris",
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos" },
        { answerText: "Elon Musk" },
        { answerText: "Bill Gates" },
        { answerText: "Tony Stark" },
      ],
      correctAnwer: "Elon Musk",
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple" },
        { answerText: "Intel" },
        { answerText: "Amazon" },
        { answerText: "Microsoft" },
      ],
      correctAnwer: "Apple",
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1" },
        { answerText: "4" },
        { answerText: "6" },
        { answerText: "7" },
      ],
      correctAnwer: "7k",
    },
    {
      questionText: "what is js?",
      answerOptions: [
        {
          answerText:
            "JavaScript is a scripting language used to make the website interactive",
        },
        {
          answerText:
            "JavaScript is an assembly language used to make the website interactive",
        },
        {
          answerText:
            "JavaScript is a compiled language used to make the website interactive",
        },
        { answerText: "None of the mentioned" },
      ],
      correctAnwer: "None of the mentioned",
    },
  ];
  let [currentQuestion, setCurrentQuestion] = useState(0);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);
  function CurrentDate() {
    let newDate = new Date();
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    let DateStandard = hours < 12 ? "AM" : "PM";
    hours = hours > 12 ? hours - 12 : hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    let DateStr;
    return (DateStr =
      hours + ":" + minutes + ":" + seconds + " " + DateStandard);
  }
  let next = (val, isCorrect) => {
    let showQuestion = currentQuestion + 1;
    if (showQuestion < questions.length) {
      setCurrentQuestion(showQuestion);
    } else {
      setResult(true);
    }
    if (val === isCorrect) {
      setScore(score + 1);
    }
    console.log(score, result);
    console.log(isCorrect);
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
                  onClick={() => next(element, element.isCorrect)}
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
