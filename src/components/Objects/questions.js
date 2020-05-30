import React from 'react'

class Questions extends React.Component {

    constructor(props){
        super(props);

        this.state = {

            Questions: [
                {id: 1, question: "Have you eaten", 
                answers: [
                    {answer: "yes", depVal:0, anxVal:0, suicideVal:0 },
                    {answer: "no", depVal:1, anxVal:1, suicideVal:0 },
                    {answer: "maybe", depVal:1, anxVal:1, suicideVal:0}
                ],
                tags: ["suicide", "anxiety", "domestic violence"]
                },
                {id: 2, question: "Have you eaten", 
                answers: [
                    {answer: "yes", depVal:0, anxVal:0, suicideVal:0 },
                    {answer: "no", depVal:1, anxVal:1, suicideVal:0 },
                    {answer: "maybe", depVal:1, anxVal:1, suicideVal:0}
                ],
                tags: ["suicide", "anxiety", "domestic violence"]
                },
                {id: 3, question: "Have you eaten", 
                answers: [
                    {answer: "yes", depVal:0, anxVal:0, suicideVal:0 },
                    {answer: "no", depVal:1, anxVal:1, suicideVal:0 },
                    {answer: "maybe", depVal:1, anxVal:1, suicideVal:0}
                ],
                tags: ["suicide", "anxiety", "domestic violence"]
                },
                {id: 4, question: "Have you eaten", 
                answers: [
                    {answer: "yes", depVal:0, anxVal:0, suicideVal:0 },
                    {answer: "no", depVal:1, anxVal:1, suicideVal:0 },
                    {answer: "maybe", depVal:1, anxVal:1, suicideVal:0}
                ],
                tags: ["suicide", "anxiety", "domestic violence"]
                },
            ]




            
        }
    }

}

export default Questions;