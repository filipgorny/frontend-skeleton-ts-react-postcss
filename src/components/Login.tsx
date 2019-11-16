import * as React from 'react';
import { Link } from "react-router-dom";

export class Login extends React.Component<{}> {
    render() {
        return (<div>
            <Link to="/Login" >Login or signup</Link>
        </div>
        );
    }
}
