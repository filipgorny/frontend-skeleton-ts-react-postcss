import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { HomePage } from "./pages/HomePage";

class App extends React.Component<{}> {
    render() {
        return (
            <div>
            <h1>Welcome</h1>
            <Router>
                <Route exact path="/" component={HomePage} />
                {/* <Route path="/login" component={LoginPage} /> */}
            </Router>
            </div>
        );
    }
}

export default App;