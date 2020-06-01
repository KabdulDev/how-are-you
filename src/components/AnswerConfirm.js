import React, { useState } from "react";
import Header from "./Header";

import initialAppState from "./initialAppState";

const deepDup = (obj) => JSON.parse(JSON.stringify(obj));


class Confirm extends React.Component {
    constructor() {
      super();
  
      this.state = deepDup(initialAppState);
    }

    TableBody () { 
        
        const state = useState;
        const rows = state.map((row, index) => {
            let surveyQuestion = this.questions.Questions.question;
            let surveryAnswer = this.userResponses.answer;
            return (
                <tr key={index}>
                    <td>{row.surveyQuestion[index]}</td>
                    <td>{row.surveryAnswer[index]}</td>
                    <td><button onClick={() => console.log("Link Back")}>Edit</button></td>
                </tr>
            );
        });
    
    
        return <tbody>{rows}</tbody>;
    }



    render() {
        return (
          <div>
            <Header title="How are You?" />
            <div className="Confirm">
              <this.TableBody />
            </div>
    
            {/* <div className="Answers">
              <this.AnswerRender />
            </div> */}
    

          </div>
        );
      }
}
export default Confirm;