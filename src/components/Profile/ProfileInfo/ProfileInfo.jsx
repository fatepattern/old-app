import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
    <div className={s.content}>
        <img src='https://www.photoblog.com/learn/wp-content/uploads/2017/06/34961973010_6c8c9b5b47_h.jpg' 
        alt=''/>
        <div className='description'>
          profile pic + description
        </div>
    </div>
    )
}

export default ProfileInfo;