import React from 'react';
import Post from './New_Post/Post';



function New_Post(props){
//Кей добавил для того, чтобы убрать ошибку связанную с уникальностью ключей для переданных элементов, вопрос КАК ЭТО БЛЯТЬ ПРАВИЛЬНО СДЕЛАТЬ???
//РЕШЕНО блять!!!!! но только сука на старте....при добавлении снова все летит к хуям..

let  New_Post = props.state.walls_posts.posts.map( (posts) =>   <Post   message={posts.message} key={posts.id} id={posts.id}  like={posts.like}  /> );


    return(
        <div className="New_Posts" >
           {New_Post} 
        </div>  
    )
}

export default New_Post;
