import React, {Component} from 'react';
import  './Posts.css';
import axios from '../../Instance';
import Post from '../../components/Post/Post';

class Posts extends Component {
    state = {
        posts:[]
    };
    postSelectedHandler =(id)=>{
        this.setState({selectedPostId: id});
    }
    componentDidMount(){
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
                            return <Post 
                            title={post.title} 
                            key={post.id} 
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}/>;
                        }
                    );
                } 
        return(
            <section className="Posts">
                {posts}
            </section>);
    }
}
export default Posts;