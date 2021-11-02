const ADD_TO_CART = 'cart/ADD_TO_CART';

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    };
};


export default function cartReducer(state = {}, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {...state, [action.id]: {id:action.id, count: 1}};
        default:
            return state;
    }
}
