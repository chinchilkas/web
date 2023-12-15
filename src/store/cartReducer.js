import { ADD_PET, DELETE_PET, CHANGE_AMOUNT } from './actionTypes';

const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PET:
            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    {
                        id: action.payload.id,
                        color: action.payload.color,
                        age: action.payload.age,
                        amount: action.payload.amount,
                        price: action.payload.price
                    },
                ],
            };
        case DELETE_PET:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    item =>
                        item.id !== action.payload.id &&
                        item.color !== action.payload.color &&
                        item.age !== action.payload.age
                ),
            };
        case CHANGE_AMOUNT:
            return {
                ...state,
                cartItems: state.cartItems.map(item => {
                    if (
                        item.id === action.payload.id &&
                        item.color === action.payload.color &&
                        item.age === action.payload.age
                    ) {
                        if (item.amount + action.payload.amountDiff > 0){
                            return { ...item, amount: item.amount + action.payload.amountDiff };
                        }
                    }
                    return item;
                }),
            };
        default:
            return state;
    }
};

export default cartReducer;