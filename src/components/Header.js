import React from 'react';
import './Header.css';
import arrow from './images/ar.png';
import logoWeb from './Logo_H_PNG.png';
import logoMobile from './Logo_Only_PNG.png';


class Header extends React.Component{

    render(){

        return(
            <div>
                <div className="header">
                    <img src={logoWeb} alt="logo" className="logo"/>
                    <img src={logoMobile} alt="logo" className="logo_mobile"/>
            
                <div className="header-right">
                    <h1>Album</h1>
                    <img src={arrow} alt=""width="30px"/>
                    <div className="dropdown">
                        <button className="dropbtn">Sort By: ASC</button>
                        <div className="dropdown-content">
                            <a href="/">Sort By: DESC</a>
                        </div>
                    </div>
              
                </div>
            </div>
        </div>
        );
    };

}

export default Header;