import React from 'react';
import { NavLink } from 'react-router-dom';
import Style from './Navbar.module.css';
import Profile from '../../../images/profile.svg';
import Friends from '../../../images/friends.svg';
import Message from '../../../images/messages.svg';
import Group from '../../../images/group.svg';
import Forum from '../../../images/forum.svg';
import Settings from '../../../images/settings.svg';




function Navbar() {
    return(
        <nav className={Style.Navbar}>
            <span className={Style.Navbar__left_menu}>
            <p><NavLink className={Style.Navbar__NavLink} to="/Page_Body"><img className={Style.Navbar__left_menu__Ico} src={Profile}/>My page</NavLink></p>
            </span>
            <span className={Style.Navbar__left_menu}>
            <p><NavLink className={Style.Navbar__NavLink} to="/Friends"><img className={Style.Navbar__left_menu__Ico} src={Friends}/>Friends</NavLink></p>
            </span>
            <span className={Style.Navbar__left_menu}>
            <p><NavLink className={Style.Navbar__NavLink} to="/Dialogs"><img className={Style.Navbar__left_menu__Ico} src={Message}/>Messages</NavLink></p>
            </span>
            <span className={Style.Navbar__left_menu}>
            <p><NavLink className={Style.Navbar__NavLink} to="/Communities"><img className={Style.Navbar__left_menu__Ico} src={Group}/>Communities</NavLink></p>
            </span>
            <span className={Style.Navbar__left_menu}>
            <p><NavLink className={Style.Navbar__NavLink} to="/Forum"><img className={Style.Navbar__left_menu__Ico} src={Forum}/>Forum</NavLink></p>
            </span>
            <span className={Style.Navbar__left_menu}>
            <p><NavLink className={Style.Navbar__NavLink} to="/Settings"><img className={Style.Navbar__left_menu__Ico} src={Settings}/>Settigns</NavLink></p>
            </span>
        </nav>
    )
}

export default Navbar;