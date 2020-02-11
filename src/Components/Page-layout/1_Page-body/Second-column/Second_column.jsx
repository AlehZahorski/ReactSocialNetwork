import React from 'react';
import Information from './Information/Information';
import Wall from './Wall/Wall';
import Style from './Second_column.module.css';



function Second_column(props){

    return(
        <div className={Style.Second_column}>
            <Information />
            <Wall  Add_button__state={props.Add_button__state}/>
        </div>
    )
}

export default Second_column;
