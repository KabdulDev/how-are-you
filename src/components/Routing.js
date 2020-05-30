import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import SessionStart from './SessionStart';
import Resources from './ResourcesPages/Resources';
import Emergency from './ResourcesPages/Emergency';
import Teletherapy from './ResourcesPages/Teletherapy';
import Articles from './ResourcesPages/Articles';
import Excercises from './ResourcesPages/Excercises';


function Routing() {
    return (
        <Router>
            <div className="NavHeader">
                <Link to="/Resources">Resources</Link>
                <Link to="/Resources/Emergency">Emergency</Link>
                <Link to="/Resources/Teletherapy">Teletherapy</Link>
                <Link to="/Resources/Articles">Articles</Link>
                <Link to="/Resources/Excercises">Excercises</Link>
                <Link to="/"> Survery</Link>
                <hr />

                <Switch>
                    <Route default path="/">
                        <SessionStart />
                    </Route>
                    <Route path="/Resources">
                        <Resources />
                    </Route>
                    <Route path="/Resources/Emergency">
                        <Emergency />
                    </Route>
                    <Route path="/Resources/Teletherapy">
                        <Teletherapy />
                    </Route>
                    <Route path="/Resources/Articles">
                        <Articles />
                    </Route>
                    <Route path="/Resources/Excercises">
                        <Excercises />
                    </Route>

                </Switch>



            </div>

            <div>
                
            </div>
        </Router>
    )
}

export default Routing;