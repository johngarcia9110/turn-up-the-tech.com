import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import AddLaptop from './admin/AddLaptop';

class Admin extends Component{

    signOut(){
        firebaseApp.auth().signOut();
    }

    render(){
        return(
            <div className="page blog-page">
                <h1>Admin Panel</h1>
                <button className="btn btn-danger" onClick={() => this.signOut()}>SignOut</button>
                <div className="row">
                    <div className="col-lg-6">
                        <AddLaptop />
                    </div>
                    <div className="col-lg-6">
                        Laptop lists
                    </div>
                </div>
            </div>
        )
    }
}
export default Admin;