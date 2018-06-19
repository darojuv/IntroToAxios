import React, { Component } from 'react';

import Posts from './Posts/Posts';
import './Blog.css';
import {Route, NavLink, Switch, Redirect } from  'react-router-dom';
//import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsycNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});
//import FullPost from '../FullPost/FullPost';

class Blog extends Component {
 state={
     auth: true
 }
    render () {

        return (
            <div className="Blog">
                <header>
                    <nav >
                        <ul>
                            <li>
                                {/* <a href="/">Home</a> */}
                                <NavLink 
                                    to="/post"
                                    exact
                                    activeClassName="my-active"
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration:'Underline'
                                    }} >Posts</NavLink>
                                </li>
                                <li>
                                {/* <a href="/new-post">New Post</a> */}
                                <NavLink to={{
                                    pathname:'/new-post',
                                    hash:'#submit',
                                    search:'?quick-submit=true'
                                }}>New Post</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact  render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} />*/}
                <Switch>
                  {this.state.auth ? <Route path="/new-post"  component={AsycNewPost} /> : null }
                   <Route path="/post"  component={Posts} />
                   <Redirect from="/" to="/post" />
                   {/* <Route path="/"  component={Posts} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;