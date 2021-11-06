import React from 'react';
import m from './Profile.module.css'
import ProfileBackground from '../../images/forest.jpg'
import MyPosts from './MyPosts/MyPosts.jsx';

const Profile = () => {
    return (
        <div className={m.content}>
        <div>
          <img className={m.profile__background} src={ProfileBackground} alt='Profile background' />
        </div>
        <div>
          ava + description
        </div>
        <MyPosts/>
      </div>
    );
}

export default Profile;