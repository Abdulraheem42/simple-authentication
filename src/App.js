import React,{Component} from 'react';
import './App.css';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    console.log('protected Route')
    const token = localStorage.getItem('token');
    return token ? (
        <Route {...rest} render={matchProps => <Component {...matchProps} />} />
    ) : (
        <Redirect to="/signin"/>
    )
};

const UnprotectedRoute = ({component: Component, ...rest }) => {
    const token = localStorage.getItem('token');
    return !token ? (
        <Route {...rest} render={matchProps => <Component  {...matchProps} />} />
    ) : (
        <Redirect to="/dashboard"/>
    )
}

class App extends Component{

    render(){
        return(
            <BrowserRouter>
                    <Switch>
                        <UnprotectedRoute exact path='/' component={Navbar}/>
                        <ProtectedRoute exact path='/dashboard' component={Dashboard}/>
                        <UnprotectedRoute exact path='/signup' component={Signup}/>
                        <UnprotectedRoute exact path='/signin' component={Signin}/>
                    </Switch>
            </BrowserRouter>
        )

    }
}



export default App;
