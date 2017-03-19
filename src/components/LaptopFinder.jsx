import React, { Component } from 'react';
import FinderForm from './laptopFinder/FinderForm';

class LaptopFinder extends Component{
    
    render(){
        return(
            <div className="page lf-page">
                <FinderForm />
            </div>
        )
    }
}
export default LaptopFinder;