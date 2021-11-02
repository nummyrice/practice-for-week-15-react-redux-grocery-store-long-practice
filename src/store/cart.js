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


export default function cartReducer(state = {}, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {...state, [action.id]: {id:action.id, count: 1}};
        case REMOVE_FROM_CART:
            const newState = {...state}
            const id = action.id
            delete newState[id]
            return newState;
        default:
            return state;
    }
}
