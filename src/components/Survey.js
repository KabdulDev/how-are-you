import React from "react";
import qs from "./Objects/questions.json";
import Header from "./Header";

import initialAppState from "./initialAppState";

const deepDup = (obj) => JSON.parse(JSON.stringify(obj));

class Survey extends React.Component {
  constructor() {
    super();

    this.state = deepDup(initialAppState);
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
      let answerVal = {...this.state.userResponses};
      answerVal.answer[idx] = answer;
      this.setState({userResponses: answerVal});
      console.log("you chose", answer);
      answerVal = this.state.userResponses.answer
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

    if(idx > 0){
        this.setState((state) => {
        return { currentQuestionIdx: this.state.currentQuestionIdx - 1 };
        }); 
    }

  };
  handleNextClick = (event) => {
    console.log("you clicked next");
    const idx = this.state.currentQuestionIdx;

    if(idx < this.state.questions.Questions.length-1){
        this.setState((state) => {
            return {currentQuestionIdx: this.state.currentQuestionIdx + 1};
        })
    }else{
        console.log("End of line")
    }
  };
  QuestionNavRender = () => {
    const currentQuestionNumber = this.state.currentQuestionIdx + 1;
    const numberOfQuestions = this.state.questions.Questions.length;
    return (
      <div>
        <div>{`${currentQuestionNumber} of ${numberOfQuestions}`}</div>
        <div>
          <button onClick={this.handlePrevClick}>Prev</button>
          <button onClick={this.handleNextClick}>Next</button>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Header title="How are You?" />
        <div className="Questions">
          <this.QuestionRender />
        </div>

        <div className="Answers">
          <this.AnswerRender />
        </div>

        <div className="QuestionNav">
          <this.QuestionNavRender />
        </div>
      </div>
    );
  }
}

export default Survey;
