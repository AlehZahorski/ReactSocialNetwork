import React from 'react';
import Photo from './Photo/Photo'
import First_Groups from './First-groups/First_Groups';
import Style from './First_column.module.css';

function First_column() {
    return(
        <div className={Style.First_column}>
        <Photo />
        <First_Groups />
        </div>
    )
}

export default First_column;