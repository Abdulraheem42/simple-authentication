import React,{Component} from 'react';
import '../App.css';
import {connect} from 'react-redux';
import {addUser} from '../action/index';
import {TextField, Grid, Container, Avatar, Typography, Button, FormControlLabel, Checkbox} from '@material-ui/core';
import {Link} from 'react-router-dom';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { withStyles } from '@material-ui/core/styles';
import useStyles from '../MaterialUiStyle'


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            fullName: "",
            fname: "",
            lname: "",
            email: "",
            password: ""
        })
    }

    // componentDidMount() {
    //     this.props.dispatch(getData())
    //     console.log(this.props.data, 'this.props.data in did mount')
    // }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit(event){
        event.preventDefault();
        const userInfo = {
            fullName: `${this.state.fname} ${this.state.lname}`,
            email:this.state.email,
            password:this.state.password
        };
        console.log(userInfo, 'userinfo')

        this.props.dispatch(addUser(userInfo));

        this.setState({
            fname: '',
            lname: '',
            email: '',
            password: ''
        });

    }

    render(){
        const{classes, data} = this.props;
        console.log(data, 'data')
        return(
            <div><menu>
                <Link to='/'><span><h1>User Authentication</h1></span></Link>
                <span id='signBtn'>
                            <Link to='signin'><Button variant='contained' color='secondary'>Sign In</Button></Link>
                        </span>
            </menu>

            <Container component="main" maxWidth="xs">
                <div className={classes.container}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <form action="post"  autoComplete="off"
                          onSubmit={this.handleSubmit.bind(this)}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    // id="outlined-username-input"
                                    label="First Name"
                                    onChange={this.handleChange.bind(this)}
                                    value={this.state.fname}
                                    className={classes.textField}
                                    type="Text"
                                    required
                                    fullWidth
                                    name='fname'
                                    margin="normal"
                                    variant="outlined"/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="outlined-username-input"
                                    label="Last Name"
                                    onChange={this.handleChange.bind(this)}
                                    value={this.state.lname}
                                    className={classes.textField}
                                    type="Text"
                                    fullWidth
                                    required
                                    name='lname'
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-email-input"
                                    label="Email Address"
                                    className={classes.textField}
                                    onChange={this.handleChange.bind(this)}
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    value={this.state.email}
                                    margin="normal"
                                    fullWidth
                                    required
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="outlined-password-input"
                                    onChange={this.handleChange.bind(this)}
                                    label="Password"
                                    className={classes.textField}
                                    type="password"
                                    value={this.state.password}
                                    fullWidth
                                    required
                                    name="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                            <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign Up
                            </Button>
                            </Grid>
                            <Grid container justify='flex-end'>
                                <Grid item>
                                    <Link to='Signin'>
                                        Already have an account? Sign in
                                    </Link>
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
        data: state.data
    }
};

export default connect(mapStateToProps)(withStyles(useStyles)(Signup));





