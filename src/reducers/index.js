import { SIGNED_IN, SET_LAPTOPS } from '../constants';

let user = {
    email : null
}


const laptop = (action) =>{
    let laptopArr = []
    action.laptops.forEach(laptop => {
        //console.log('laptop foreach', laptop);
        laptopArr.push( {
            title : laptop.title,
            category : laptop.category,
            productLink : laptop.productLink,
            description : laptop.description,
            laptopImageURL : laptop.laptopImageURL
        })
    })
    return laptopArr;
}

export default (state = [], action) => {
    let laptops = null;
    switch(action.type){
        case SIGNED_IN :
            const { email } = action;
            user = {
                email
            }
            return user;
        case SET_LAPTOPS :
            laptops = laptop(action);
            console.log('reducer laptops', laptops);
            return laptops;
        default :
            return state;
    }
}