import React from 'react';
import Style from './Post.module.css';
import Profile_photo from '../../../../../../../images/Profile_photo.png';
import Like from '../../../../../../../images/like.svg';
import Comment from '../../../../../../../images/comment.svg';
import Share from '../../../../../../../images/share.svg';

function Post(props){


    return(   
<div className={Style.New_Post}>
<div className={Style.New_Post__user}>
    <img className={Style.New_Post__Photo_user} src={Profile_photo} />
    <span className={Style.New_Post__Info_user}>
        Aleh Zahorski<br/>
        14 december 2019
    </span>
</div>


<div className={Style.New_Post__text}>
{props.message}
</div>


<div className={Style.New_Post__likes}>
    <div className={`${Style.New_Post__likes__like} ${Style.New_Post__likesGrid}`}>
    <img className={Style.New_Post__likes__comment__ico} src={Like} />
    <span className={Style.New_Post__number_likes}>{props.like}</span><p>Like</p>
    </div>
    <div className={`${Style.New_Post__likes__comment} ${Style.New_Post__likesGrid}`}>
    <img className={Style.New_Post__likes__comment__ico} src={Comment} /> 
    <p>Comment</p>
    </div>
    <div className={`${Style.New_Post__likes__share} ${Style.New_Post__likesGrid}`}>
    <img className={Style.New_Post__likes__comment__ico} src={Share} /> 
    <p>Share</p>
    </div>
</div>
</div>

    
        
    )
}

export default Post;