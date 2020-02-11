import React from 'react';
import Add_Post from './Add_Post/Add_Post';
import New_Posts from './New_posts/New_Posts';
import Style from './Wall.module.css';
import state from '../../../../../Data/state';





function Wall(props) {
    return(
        <div className={Style.Wall}>
            <Add_Post  Add_button__state={props.Add_button__state}/>
            <New_Posts  state={state} Add_button__state={props.Add_button__state}/>
        </div>
    )
}
export default Wall;
