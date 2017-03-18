import React, { Component } from 'react';

class LaptopItem extends Component{
    render(){
        return(
            <div className="laptop-list-item">
                <div className="laptop-li-title">{this.props.title}</div>
                <div className="laptop-li-info">
                    <img className="laptop-preview-img" src={this.props.img} alt="laptop"/>
                    <div className="laptop-li-cat">Category: {this.props.category}</div>
                    <div className="laptop-li-details">Description: {this.props.description}</div>
                    <div className="laptop-li-link">Amazon Link: {this.props.productLink}</div>
                </div>
            </div>
        )
    }
}
export default LaptopItem;