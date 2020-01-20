import React, {Component} from 'react';
import { getToken } from '../action/index'
import {connect} from 'react-redux'
import {Link} from "react-router-dom";
import {Button, CircularProgress, Avatar, Card, Typography, CardActionArea, CardMedia, CardContent, CardActions} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import useStyles from "../MaterialUiStyle";
const Swal = require('sweetalert2')


class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        const{history} = this.props
        this.props.dispatch(getToken(history))

    }

    logOut(){
        Swal.fire({
            title: 'Are you sure?',
            text: "",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Are you sure?!'
        }).then((result) => {
            if (result.value) {
                localStorage.removeItem('token')
                this.props.history.push('/signin');
                Swal.fire(
                    'You are Loged Out.',
                )
            }


        })

    }

    render() {
        const {data, classes} = this.props;

        return (
            <div>

                <menu>
                    <Link to='/'><h1>User Authentication</h1></Link>
                   <span> <Button size="small" variant='contained' color='secondary' onClick={this.logOut.bind(this)} >Log Out</Button></span>
                </menu>
                <div className={classes.wrapper}>
                    {!data ? <CircularProgress/> :
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYRo312WnVB2qsW-5HzmpjGiorN1JvJ9eR-ywhSkVMwYic0qBK&s"
                                    title="Contemplative Reptile"
                                />
                            </CardActionArea>
                            <CardContent>
                                    <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgKE0sW4gDNA5Jkwx6vGMsssbNg0_xR2kull1qXZImHlWnEvBmPQ&s" className={classes.avatar}/>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {data.fullName}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        <strong>Name:</strong> {data.fullName}<br/>
                                        <strong>Email:</strong> {data.email}<br/>
                                        <strong>Status:</strong> Null

                                    </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    }

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
};


export default connect(mapStateToProps)(withStyles(useStyles)(Dashboard));
