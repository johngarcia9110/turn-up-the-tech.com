import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, Redirect } from 'react-router';
import { firebaseApp } from './firebase';

import reducer from './reducers/reducer_laptops';

import './App.css';

import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import SignIn from './components/SignIn';
import LaptopFinder from './components/LaptopFinder';
import Admin from './components/Admin';
import NotFound from './components/NotFound';


const store = createStore(reducer);

function requireAuth(){
    firebaseApp.auth().onAuthStateChanged( user => {
        if(user){
            console.log('user is logged in');
            browserHistory.push('/admin');
        }else{
            browserHistory.push('/sign-in');
            console.log('user is not logged in');
        }
    })
}


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/sign-in" component={SignIn} onEnter={requireAuth}/>
            <Route path="/admin" component={Admin} />
            <Route path="/laptop-finder" component={LaptopFinder}/>
            <Route path="/404" component={NotFound} />
            <Redirect from="*" to="/404"/>
        </Router>
    </Provider>, document.getElementById('root')
)