import React from 'react'
import questions from './questions.json'


/*
Question Shape: 
{
    id: number;
    question: string;
    answers: [Answers];
    tags: [string];
}
Answer Shape:
{
    answer: string;
    depVal: number;
    anxVal: number;
    suicideVal: number;
}

*/
class Questions extends React.Component {

    constructor(props){
        super(props);

        this.state = questions
    }



}

export default Questions;