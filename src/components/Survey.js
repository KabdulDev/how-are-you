import React from 'react';
import Questions from './Objects/questions';
import Header from './Header';

class Survey extends React.component {

    constructor(props){
        super(props);

        this.state = {
               QuestionCounter : 1,
        
        }
    }
    //Header.updateTitle("How Are You?")

    render() {

        return (

            <div>
            <Header 
                title= "How are You?" />
            <div className= 'Questions'>

                <h2> Would you like to talk today? </h2>


            </div>

            <div className = 'Answers'>
                
                <button onClick > No </button>
                <button onClick> Yes </button>
            </div>

            </div> 
        );
    }


}

export default Survey;