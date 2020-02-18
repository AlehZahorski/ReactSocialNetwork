import React from 'react';
import Style from './Header.module.css';
import Logo from "../../images/cog-solid.png";
import Like from "../../images/heart-regular.png";
import Question from "../../images/question-circle-solid.png";
import Login from "../../images/sign-in-alt-solid.png";



function Header() {
  return(
   <header className={Style.App_header}>
<div className={Style.App_header__section}>
<div className={Style.App_header__item0}>
<a href="/Page_Body"><img src={Logo}  alt="logo"/></a>
</div>
<div className={Style.App_header__item1}>
  <textarea  placeholder="&#128269; search" className={Style.App_header__search}></textarea>
</div>
<div className={Style.App_header__item2}>
<img src={Like} alt="Like"/>
</div>
<div className={Style.App_header__item3}>
<img src={Question} alt="Question"/>
</div>
<div className={Style.App_header__item4}>
<img src={Login} alt="Login"/>
</div>
</div>
    </header>
  );
}

export default Header;
