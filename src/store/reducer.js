const initialState = {
    name: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADDNAME':
        
        return{
            ...state,
            name: state.name.concat({value: action.name})
        }
    }
        return state;
    };

export default reducer;