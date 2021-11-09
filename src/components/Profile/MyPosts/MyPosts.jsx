import React from 'react';
import m from './MyPosts.module.css'
import Posts from '../MyPosts/Post/Posts.jsx';

const MyPosts = () => {
    return (
        <div>
          My post
          <div>
            <textarea></textarea>
            <button className={m.addpost}>Add post</button>
            <button>Remove post</button>
          </div>
          <div className={m.props}>
            <Posts message="Hi, how are you?" likesCount="0" />
            <Posts message="It's my first post" likesCount="23"/>
          </div>
        </div>
    );
}

export default MyPosts;