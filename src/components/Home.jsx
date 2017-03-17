import React, { Component } from 'react';

class Home extends Component{
    render(){
        return(
            <div className="page home-page">
                <div className="jumbotron">
                    <h1>Theme example</h1>
                    <p>This is where I will put the main image.</p>
                </div>
                <div className="row">
                    <div className="col-lg-4"> Section 1 </div>
                    <div className="col-lg-4"> Section 2 </div>
                    <div className="col-lg-4"> Section 3 </div>
                </div>
            </div>
        )
    }
}
export default Home;