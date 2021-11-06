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
          <Posts/>
          <Posts/>
          <Posts/>
          <Posts/>
          <Posts/>
        </div>
    );
}

export default MyPosts;