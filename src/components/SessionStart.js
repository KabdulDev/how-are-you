import React from 'react';
import Intro from './Intro'
import Header from './Header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation
} from "react-router-dom";
//import Survey from './Survey';
import Routing from './Routing';

export default function SessionStartFull(){
        return(
        <Router>
            <SessionNav />
        </Router>
    );
}

function SessionNav(){
    let location = useLocation();
    let background = location.state && location.state.background;
    return(
        <div>
            <Switch location={background || location}>
                <Route exact path="/" children={<SessionStart />} />
                <Route path="/Resources" children={<Routing />} />
                {/* <Route path="/img/:id" children={<ImageView />} /> */}
            </Switch>
        </div>
    );

}

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
            
                
                    <Link to="/Resources">
                        <button onClick> No </button>
                    </Link>

                

                {/* <button onClick> No </button> */}
                <button onClick> Yes </button>

                {/* <Route path="/Resources" component= {Resources} /> */}

            </div>

        </div>
        
        
    )


}

