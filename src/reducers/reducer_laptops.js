import { SET_LAPTOP } from '../constants';

const laptop = (action) =>{
    let {title, category, productLink, description, laptopImageURL} = action;
    return {
        title,
        category,
        productLink,
        description,
        laptopImageURL
    }
}

export default (state = [], action) => {
    let laptops = null;
    switch(action.type){
        case SET_LAPTOP :
            laptops = [...state, laptop(action)];
            return laptops;
        default :
            return state; 
    }
}