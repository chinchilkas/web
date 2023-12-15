
import { ADD_PET, DELETE_PET, CHANGE_AMOUNT } from './actionTypes';

export const addProduct = (id, color, age, amount, price) => ({
    type: ADD_PET,
    payload: { id, color, age: age, amount, price },
});

export const deleteProduct = (id, color, age) => ({
    type: DELETE_PET,
    payload: { id, color, age: age },
});

export const changeAmount = (id, color, age, amountDiff) => ({
    type: CHANGE_AMOUNT,
    payload: { id, color, age: age, amountDiff },
});