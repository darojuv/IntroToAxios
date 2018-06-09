import React, {Component} from 'react';
import  './Posts.css';
import axios from '../../Instance';
import Post from '../../components/Post/Post';
import {Route } from  'react-router-dom';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts:[]
    };
    postSelectedHandler =(id)=>{
        //this.setState({selectedPostId: id});
        this.props.history.push({pathname: '/post/' + id});
    }
    componentDidMount(){
        console.log(this.props);
        axios.get('/posts')
        .then(response => { 
            const posts = response.data.slice(0,4);
            const udpatedPosts = posts.map(post => {
                return{
                    ...post, author: 'Max'
                }
            });
            this.setState({posts: udpatedPosts});
            //console.log(response);
         })
         .catch(error => {
             //this.setState({error: true})
         });
    }
    render(){
                //console.log(this.state.posts);
                let posts = <p style={{textAlign: 'center'}}> Something went wrong! </p>;
                if(!this.state.error){
                    posts = this.state.posts.map(
                        post => {
                            return (
                            //<Link to={'/' + post.id } key={post.id} >
                                <Post 
                                key={post.id}
                                    title={post.title} 
                                    author={post.author}
                                    clicked={()=>{this.postSelectedHandler(post.id)}} />
                            //</Link>
                            );
                        }
                    );
                } 
        return(
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
            </div>);
    }
}
export default Posts;