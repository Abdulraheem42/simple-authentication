
const initialState = {
    data: '',
    token: ''
};

const myReducer = (state = initialState, action)=>{
    switch (action.type) {
        case "ADD_USER":
            console.log(action.payload, 'add user')
            return {
                ...state,
                data:[...state.data, action.payload,]
            };
        case "GET_DATA":
            return{
                data: action.payload
            };
        case "SIGNIN":
            return {
            token:action.payload
            };
        case 'USER_TOKEN':
            return {
                data: action.payload

            };
        default:{
            return state
        }
    }
};

export default myReducer;
