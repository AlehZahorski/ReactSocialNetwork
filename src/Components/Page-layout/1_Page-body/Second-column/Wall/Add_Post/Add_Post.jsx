import React from 'react';
import Style from './Add_Post.module.css';

let New_post_text = React.createRef();




function Add_Post(props){

// debugger;
// console.log(props.Add_button__state);
    let Add_button__click = () => {
        let text = New_post_text.current.value;
        props.Add_button__state(text);
        New_post_text.current.value = '';
        console.log(props.Add_button__state);
    };
    let Change_textarea = () => {
        let text = New_post_text.current.value;
        console.log(text);
    }


    return(
        <div className={Style.Add_post}>
            <textarea ref={New_post_text} onChange={Change_textarea} value={props.new_post_text} placeholder="enter your message.." className={Style.Add_post__input} type="text" />
            <input className={Style.Add_post__add_file} type="file"/>
            <button onClick={ Add_button__click } className={Style.Add_post__buton_add_mail}>Add post</button>
        </div>

    )
}

export default Add_Post;