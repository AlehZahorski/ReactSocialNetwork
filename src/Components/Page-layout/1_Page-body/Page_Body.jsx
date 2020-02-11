import React from 'react';
import First_column from './First-column/First_column';
import Second_column from './Second-column/Second_column';
import Style from "./Page_Body.module.css";

function Page_Body(props){

    return(
        <div className={Style.Page_Body}>
            <First_column />
            <Second_column  state={props.state.walls_posts} Add_button__state={props.Add_button__state}/>
        </div>
    )
}

export default Page_Body;
