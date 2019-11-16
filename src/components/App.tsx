import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { HomePage } from "./pages/HomePage";

class App extends React.Component<{}> {
    render() {
        return (
            <div>
            <div className="container">
                <div className="jumbotron">Welcome</div>
            </div>
            <Router>
                <div className="container">
                    <div className="row-12">
                        <Route exact path="/" component={HomePage} />
                        {/* <Route path="/login" component={LoginPage} /> */}
                    </div>
                </div>
            </Router>
            </div>
        );
    }
}

export default App;