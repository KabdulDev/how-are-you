import React from "react";
import Header from "./Header";
import Confirm from "./AnswerConfirm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import initialAppState from "./initialAppState";
import { createBrowserHistory } from "history";
import '../siteDesign.css'

const customHistory = createBrowserHistory();

const deepDup = (obj) => JSON.parse(JSON.stringify(obj));

class Survey extends React.Component {
  constructor() {
    super();

    this.state = deepDup(initialAppState);
  }

  SessionNav = () =>  {
    let location = useLocation();
    let background = location.state && location.state.background;
    return (
      <div>
        <Switch location={background || location}>
          <Route path="/Survey" children={<this.SurveyRender />} />
          <Route path="/Confirm" children={<Confirm />} />
          {/* <Route path="/img/:id" children={<ImageView />} /> */}
        </Switch>
      </div>
    );
  }

  QuestionRender = () => {
    const idx = this.state.currentQuestionIdx;
    const questionDisplay = this.state.questions.Questions[idx].question;
    return (
      <div className="Questions">
        <h2> {questionDisplay} </h2>
      </div>
    );
  };

  AnswerRender = (props) => {
    const idx = this.state.currentQuestionIdx;
    const answers = this.state.questions.Questions[idx].answers;
    const handleAnswerClick = (answer) => (event) => {
      event.preventDefault();
      let answerVal = { ...this.state.userResponses };
      answerVal.answer[idx] = answer;
      this.setState({ userResponses: answerVal });
      console.log("you chose", answer);
      answerVal = this.state.userResponses.answer;
      console.log("These are current responses", answerVal);
    };
    return (
      <div>
        {answers.map((a, idx) => {
          return (
            <button key={idx} onClick={handleAnswerClick(a.answer)}>
              {a.answer}
            </button>
          );
        })}
      </div>
    );
  };

  handlePrevClick = (event) => {
    console.log("you clicked Prev");
    const idx = this.state.currentQuestionIdx;

    if (idx > 0) {
      this.setState((state) => {
        return { currentQuestionIdx: this.state.currentQuestionIdx - 1 };
      });
    }
  };

  
  handleNextClick = (event) => {
    console.log("you clicked next");
    const idx = this.state.currentQuestionIdx;
    

    if (idx < this.state.questions.Questions.length - 1) {
      this.setState((state) => {
        return { currentQuestionIdx: this.state.currentQuestionIdx + 1 };
      });
    } else {
      /* this.props.history.push("/Confirm"); */
      console.log("End of line");
    }
  };
  QuestionNavRender = () => {
    const currentQuestionNumber = this.state.currentQuestionIdx + 1;
    const numberOfQuestions = this.state.questions.Questions.length;
    return (
      <div>
        <div className="questionNum">{`${currentQuestionNumber} of ${numberOfQuestions}`}</div>
        <div className="questionCycler">
          <button onClick={this.handlePrevClick}>Prev</button>
          <button onClick={this.handleNextClick}>Next</button>
        </div>
      </div>
    );
  };

  SurveyRender = (props) => {
    return (
        <div>
          <Header title="How are You?" />
          <div className="questions">
            <this.QuestionRender />
          </div>

          <div className="answers">
            <this.AnswerRender />
          </div>

          <div className="questionNav">
            <this.QuestionNavRender />
          </div>
        </div>
      );
  }

  render() {
          return (
            <Router history={customHistory}>
            <this.SessionNav />
          </Router>
      );
    
  }
}

export default Survey;
