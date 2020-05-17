import React from 'react';
import Intro from './Intro'
import Header from './Header';

function SessionStart(){

    // Header.updateTitle("How Are You?")
    return (

        <div>
        
        <Intro />
        <Header 
            title= "How are You?"
        />
        <div className= 'Questions'>

            <h2> Would you like to talk today? </h2>


        </div>

        <div className = 'Answers'>
            
            <button onClick > No </button>
            <button onClick> Yes </button>
        </div>

        </div>
        
        
    )


}

export default SessionStart;