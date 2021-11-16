import React, { useContext } from 'react';
import BurgerMenu from './BurgerMenu';
import { SideBarContext } from './SideBar';
import '../css/BurgerStyles.css';
import '../css/StylesNav.css';



const NavBar = () => {
  const { setIsShowSidebar } = useContext(SideBarContext);
    return(

        <div id="nav-bar" >
        <div className="span"  >
          <BurgerMenu onClick={() => setIsShowSidebar(true)}/>
          
         </div>
          <i class="fas fa-sign-out-alt"></i>
          <i class="fas fa-question-circle"></i>
          <i class="fas fa-cog"></i>
          <i class="fas fa-bell"></i>
       
        </div>
    );
};

export default NavBar;