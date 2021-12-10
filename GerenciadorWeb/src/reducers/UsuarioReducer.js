const initialState = {
    token: '',
    name:'Visitante',
    contador: 0
}


const UsuarioRedecer = (state = initialState, action) =>{

    switch (action.type) {
        case 'SET_TOKEN':
            return {...state, token: action.payload.token}

        case 'SET_NAME':
            return{...state, name: action.payload.name};
            break;
    }

    return state;

};

export default UsuarioRedecer;