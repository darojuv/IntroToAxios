import React, { Component } from 'react';

import Posts from '../Posts/Posts';
import './Blog.css';
import {Route, NavLink, Switch } from  'react-router-dom';
import NewPost from '../NewPost/NewPost';
//import FullPost from '../FullPost/FullPost';

class Blog extends Component {
 
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
                                }}
                                >Posts</NavLink>
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
                   <Route path="/new-post"  component={NewPost} />
                   <Route path="/post"  component={Posts} />
                </Switch>
            </div>
        );
    }
}

export default Blog;