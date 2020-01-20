import React,{Component} from 'react';
import '../App.css';
import {Container, Grid, Avatar, Typography, TextField, Button, FormControlLabel, Checkbox} from '@material-ui/core';
import {LockOutlined} from '@material-ui/icons';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signIn} from "../action/index";
import { withStyles } from '@material-ui/core/styles';
import useStyles from '../MaterialUiStyle'

class Signin extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

     handleSubmit(event){
        event.preventDefault();
        const{ history } = this.props;
        this.props.dispatch(signIn(this.state, history));
    }

    render() {
        const{classes} = this.props;
        return(
            <div>
                <menu>
                    <Link to='/'><span><h1>User Authentication</h1></span></Link>
                    <span id='signBtn'>
                            <Link to='signup'><Button variant='contained' color='secondary'>Sign Up</Button></Link>
                    </span>
                </menu>

                <Container component="main" maxWidth='xs'>
                    <div className={classes.container}>
                        <Avatar className={classes.avatar}>
                            <LockOutlined/>
                        </Avatar>
                        <Typography variant='h5'>
                            Sign in
                        </Typography>
                        <form action="" onSubmit={this.handleSubmit.bind(this)}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField type="email"
                                               name='email'
                                               id='outlined-email-input'
                                               fullWidth
                                               required
                                               margin="normal"
                                               variant="outlined"
                                               label='Email'
                                               value={this.state.email}
                                               onChange={this.handleChange.bind(this)}
                                               placeholder='Email'/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField type="password"
                                               name='password'
                                               variant="outlined"
                                               fullWidth
                                               margin="normal"
                                               required
                                               label="Password"
                                               value={this.state.password}
                                               onChange={this.handleChange.bind(this)}
                                               placeholder='Password'/>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="Remember me."
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button type="submit"
                                            value="SignIn"
                                            variant="contained"
                                            color="primary"
                                            fullWidth
                                            margin="normal"
                                            className={classes.submit}
                                    >
                                        Sign in
                                    </Button>
                                </Grid>
                                <Grid container>
                                    <Grid item xs>
                                        <NavLink to="#">
                                            Forgot Password?
                                        </NavLink>

                                    </Grid>
                                    <Grid item>
                                        <NavLink to="signup">
                                            Don't have an account? Sign up
                                        </NavLink>
                                    </Grid>

                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        data: state.token
        // data:state
    }
}

export default connect(mapStateToProps)(withStyles(useStyles)(Signin));
