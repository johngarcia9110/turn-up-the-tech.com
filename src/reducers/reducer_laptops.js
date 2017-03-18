import { SET_LAPTOPS } from '../constants';

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
    //console.log('action',action)
    switch(action.type){
        case SET_LAPTOPS :
            laptops = [...state, laptop(action)];
            return laptops;
        default :
            return state; 
    }
}