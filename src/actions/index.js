import { SIGNED_IN, SET_LAPTOPS } from '../constants';

export function logUser(email){
    const action = {
        type : SIGNED_IN,
        email
    }
    return action;
}

export function setLaptops(laptop){
    const action = {
        type : SET_LAPTOPS,
        laptop
    }
    return action;
}