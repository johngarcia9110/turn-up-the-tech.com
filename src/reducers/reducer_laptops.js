import { SET_LAPTOPS } from '../constants';

const laptop = (action) =>{
    console.log('action', action);
    let laptopArr = [];
    action.laptops.forEach(laptop => {
        let {title, category, productLink, description, laptopImageURL} = laptop;
        laptopArr.push(
            {
            title,
            category,
            productLink,
            description,
            laptopImageURL
            }
        )
    });
    return laptopArr;

}

export default (state = [], action) => {
    let laptops = null;
    //console.log('action',action)
    switch(action.type){
        case SET_LAPTOPS :
            laptops = [...laptop(action)];
            console.log('laptops reducer', laptops);
            return laptops;
        default :
            return state; 
    }
}