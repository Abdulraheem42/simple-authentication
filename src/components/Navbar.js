import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

class Navbar extends Component {
    render() {
        return (
            <div>
                <menu>
                    <Link to='/'><span><h1>User Authentication</h1></span></Link>
                    <span id='signBtn'>
                            <Link to='Signup'><Button variant='contained' color='secondary'>Sign Up</Button></Link>
                            <Link to='Signin'><Button variant='contained' color='secondary'>Sign In</Button></Link>
                        </span>
                </menu>
            </div>
        );
    }
}

export default Navbar;
