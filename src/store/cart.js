const ADD_TO_CART = 'cart/ADD_TO_CART';

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    };
};


const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART';

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        id
    }
}

const INCREMENT = 'cart/INCREMENT'

export const incrementCart = (id) => {
    return {
        type: INCREMENT,
        id
    }
}

const DECREMENT = 'cart/DECREMENT'

export const decrementCart = (id) => {
    return {
        type: DECREMENT,
        id
    }
}

const ENTRY = 'cart/ENTRY'
// everythin here looked good. We need the val from the onChange event for us to update state
export const entryCart = (id, val) => {
    return {
        type: ENTRY,
        id,
        val
    }
}


export default function cartReducer(state = {}, action) {

    const newState = {...state}
    const id = action.id

    switch (action.type) {
        case ADD_TO_CART:
            return {...state, [action.id]: {id:action.id, count: 1}};
        case REMOVE_FROM_CART:
            delete newState[id]
            return newState;
        case INCREMENT:
            newState[id].count = newState[id].count + 1
            return newState;
        case DECREMENT:
            newState[id].count = newState[id].count - 1;
            return newState;
        case ENTRY:
/* -------------------------UPDATE ---------------------------------*/
            //we added action in front of val otherwise it is undefined. val comes from the action object.
            newState[id].count = action.val;
            return newState;
        default:
            return state;
    }
}
