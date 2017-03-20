import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLaptops } from '../../actions';
import { laptopRef } from '../../firebase';
import LaptopItem from './LaptopItem';


class LaptopList extends Component{


    componentDidMount(){
        laptopRef.on('value', snap =>{
            
            let laptops = [];
            snap.forEach(laptop => {
                
                let {title, category, productLink, description, laptopImageURL} = laptop.val();
                laptops.push({title, category, productLink, description, laptopImageURL});
            })
            //console.log('laptops', laptops);
            this.props.setLaptops(laptops);
        })
    }

    render(){
        console.log('This.props', this.props);
        return(
            <div className="admin-laptop-list">
                {
                    this.props.laptops.map((laptop, index) => {
                        return(
                            //<div key={index}>{laptop.title}</div>
                            <LaptopItem key={index} 
                            title={laptop.title}
                            category={laptop.category}
                            productLink={laptop.productLink}
                            description={laptop.description}
                            img={laptop.laptopImageURL}
                             />
                        )
                    }
                    )
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    //console.log('laptopliststate', state);
    let { laptops, user } = state;
    return{
        laptops,
        user
    }

}

export default connect(mapStateToProps, { setLaptops })(LaptopList);