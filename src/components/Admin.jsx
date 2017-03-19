import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
//import { setLaptops, logUser } from '../actions';
import AddLaptop from './admin/AddLaptop';
import LaptopList from './admin/LaptopList';


class Admin extends Component{

    signOut(){
        firebaseApp.auth().signOut();
    }

    render(){
        console.log('admin state', this.props.state);
        return(
            <div className="page blog-page">
                <h1>Admin Panel</h1>
                <button className="btn btn-danger" onClick={() => this.signOut()}>SignOut</button>
                <div className="row">
                    <div className="col-lg-6">
                        <AddLaptop />
                    </div>
                    <div className="col-lg-6">
                        <LaptopList />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('main state',state);
    //const { email, laptops} = state;
    return {
        state
    };
}

export default connect(mapStateToProps, null)(Admin);