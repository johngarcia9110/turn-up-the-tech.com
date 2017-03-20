import React, { Component } from 'react';

class LaptopItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            visible : false
        }
    }

    htmlDecode(input){
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }

    toggleDetails = () => {
        this.setState({ visible : !this.state.visible});
        console.log('visible', this.state.visible);
    }

    render(){
        return(
            <div className="laptop-list-item">
                <div className="col-lg-12 laptop-li-snapshot">
                    <div className="laptop-li-title">{this.props.title}</div>
                    <div className="laptop-li-cat">Category: {this.props.category}</div>
                    <button className="btn show-hide-btn" onClick={this.toggleDetails}>Details</button>
                </div>
                <div className={this.state.visible ? "show" : "hide" + " laptop-details-wrapper" }>
                    <div className="laptop-li-info-left col-lg-12 col-md-4">
                        <img className="laptop-preview-img pull-left" src={this.props.img} alt="laptop"/>
                    </div>
                    <div className="laptop-li-info-right col-lg-12 col-md-8">
                        
                        <div className="laptop-li-details" dangerouslySetInnerHTML={{__html: this.props.description}}></div>
                        <div className="laptop-li-link">Amazon Link: {this.props.productLink}</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LaptopItem;