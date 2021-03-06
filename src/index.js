import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, Redirect } from 'react-router';
import { firebaseApp } from './firebase';
import { logUser } from './actions';
import reducer from './reducers';

import './App.css';

import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import SignIn from './components/SignIn';
import LaptopFinder from './components/LaptopFinder';
import BlogPost from './components/admin/BlogPost';
import Admin from './components/Admin';
import NotFound from './components/NotFound';


const store = createStore(reducer);

function requireAuth(){
    firebaseApp.auth().onAuthStateChanged( user => {
        if(user){
            const { email } = user;
            //console.log('test',email);
            //console.log('user is logged in', user);
            store.dispatch(logUser(email));
            browserHistory.push('/admin');
        }else{
            browserHistory.push('/sign-in');
            //console.log('user is not logged in');
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
            <Route path="/admin" component={Admin} onEnter={requireAuth}/>
            <Route path="/laptop-finder" component={LaptopFinder}/>
            <Route path="/admin/blogpost" component={BlogPost} onEnter={requireAuth}/>
            <Route path="/404" component={NotFound} />
            <Redirect from="*" to="/404"/>
        </Router>
    </Provider>, document.getElementById('root')
)