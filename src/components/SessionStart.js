import React from 'react';
import Intro from './Intro'
import Header from './Header';
import {
    // BrowserRouter as Router,
    // Switch,
    Route,
    Link
} from "react-router-dom";
//import Survey from './Survey';
import Resources from './ResourcesPages/Resources';

function SessionStart(){

    //Header.updateTitle("How Are You?")
    return (

        <div>
        
        <Intro />
        <Header 
            title= "How are You?" />
        <div className= 'Questions'>

            <h2> Would you like to talk today? </h2>


        </div>

        <div className = 'Answers'>
        
            {/* <Router> */}
                {/* <Link to="/Resources">
                    <button onClick> No </button>
                </Link> */}

            {/* </Router> */}

            <button onClick> No </button>
            <button onClick> Yes </button>

            {/* <Route path="/Resources" component= {Resources} /> */}

        </div>

        </div>
        
        
    )


}

export default SessionStart;