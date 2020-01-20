import axios from 'axios'
const Swal = require('sweetalert2')


export const addUser = (userInfo)=>{
    return async (dispatch)=>{
        await axios.post('http://localhost:3000/api/users/', userInfo)
            .then(res =>{
                dispatch({
                    type: 'ADD_USER',
                    payload: res.data
                })
                Swal.fire('SignUp Successfully!')

            })
            .catch(err=>{
                console.log(err)
            })
    }
};

export const signIn = (user, history)=>{
    return async (dispatch)=>{
        await axios.post('http://localhost:3000/auth/local', user)
            .then(res =>{
                    dispatch({
                        type: 'SIGNIN',
                        payload: res.data
                    });
                localStorage.setItem('token', res.data.token)
                Swal.fire('Login Successfully',history.push('/dashboard'))
            })
            .catch(err=>{
                if(err){
                    Swal.fire('Something Wrong!')
                }
            })
    }
};

export const getToken = (history) => {
    const token = localStorage.getItem('token')
    return async (dispatch)=>{
        await axios.get('http://localhost:3000/api/users/me',  { headers: {Authorization: (`Bearer ${token}`)}})
            .then(res =>{
                    dispatch({
                        type: 'USER_TOKEN',
                        payload: res.data
                    })
            })
            .catch(err=>{
                console.log(err)
            })

    }
};

export const getData = ()=>{
     return async (dispatch)=>{
        await axios.get('http://localhost:3000/api/user/' )
            .then(res =>{
                dispatch({
                    type: 'GET_DATA',
                    payload: res.data
                })

            })
    }
};
