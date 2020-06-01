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

const routes = [
  /* {
    path: "/",
    exact: true,
    main: () => <SessionStart />,
  }, */
  {
    path: "/Resources",
    main: () => <Resources />,
  },
  {
    path: "/Emergency",
    main: () => <Emergency />,
  },
  {
    path: "/Teletherapy",
    main: () => <Teletherapy />,
  },
  {
    path: "/Articles",
    main: () => <Articles />,
  },
  {
    path: "/Excercises",
    main: () => <Excercises />,
  },
/*   {
    path: "/Survey",
    main: () => <Survey />,
  }, */
];


function Routing() {
    return (
        <Router>
            <div className="Sidebar">
                <ul ClassName="Menu Lists">
                    {/* <li>
                        <Link to="/">Start</Link>
                    </li> */}
                    <li>
                        <Link to="/Resources">Resources</Link>
                    </li>
                    <li>
                        <Link to="/Resources/Emergency">Emergency</Link>
                    </li>
                    <li>
                        <Link to="/Resources/Teletherapy">Teletherapy</Link>
                    </li>
                    <li>
                        <Link to="/Resources/Articles">Articles</Link>
                    </li>
                    <li>
                        <Link to="/Resources/Excercises">Excercises</Link>
                    </li>
                    {/* <li>
                        <Link to="/"> Survery</Link>
                    </li> */}

                </ul>

                <Switch>
                    {routes.map((route, index) => (
                    
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.main />}
                    />
                    ))}
                </Switch>
            </div>
        </Router>
    )
}

export default Routing;