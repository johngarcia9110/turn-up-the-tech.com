import React, { Component } from 'react';

class LaptopItem extends Component{

    htmlDecode(input){
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }

    render(){
        return(
            <div className="laptop-list-item row">
                <div className="laptop-li-title col-lg-12">{this.props.title}</div>
                <div className="laptop-li-info-left col-lg-12 col-md-4">
                    <img className="laptop-preview-img pull-left" src={this.props.img} alt="laptop"/>
                </div>
                <div className="laptop-li-info-right col-lg-12 col-md-8">
                    <div className="laptop-li-cat">Category: {this.props.category}</div>
                    <div className="laptop-li-details" dangerouslySetInnerHTML={{__html: this.props.description}}></div>
                    <div className="laptop-li-link">Amazon Link: {this.props.productLink}</div>
                </div>
            </div>
        )
    }
}
export default LaptopItem;