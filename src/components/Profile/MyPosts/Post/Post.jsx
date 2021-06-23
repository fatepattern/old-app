import React from 'react';
import s from './Post.module.css';


const Post = (props) => {

    const addLikes = () => {
        props.addLikes({id:props.id})
    }
    return (  
      <div className={s.item}>
        <img src='https://business-user.de/wp-content/uploads/2020/08/Slack-Emojis2_Depositphotos_105907580-780x470.jpg' alt='' />
        {props.message}
        <div>
        <button onClick={addLikes}>like</button>
        {props.countLikes + ' Likes'}
        </div>
      </div>
    )
}

export default Post;