import React from 'react';
import m from './Posts.module.css'
import Profilefoto from '../../../../images/klient.jpg'

const Posts = () => {
    return (
      <div className={m.item}>
        <img className={m.profilefoto} src={Profilefoto} alt='Profile foto' />
          Post 1
          <div>
          <span>Like</span>
          </div>
      </div>
    );
}

export default Posts;