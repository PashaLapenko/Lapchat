import React from 'react';
import m from './Posts.module.css'
import Profilefoto from '../../../../images/klient.jpg'

const Posts = (props) => {
    return (
      <div className={m.item}>
        <img className={m.profilefoto} src={Profilefoto} alt='Profile foto' />
          {props.message}
          <div>
          <span>Like</span> {props.likesCount}
          </div>
      </div>
    );
}

export default Posts;