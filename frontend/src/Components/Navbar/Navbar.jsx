import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/csh.svg';
import ToggleIcon from '../../images/toggler.svg';
import './Navbar.css';
import '../Bootstrap-Colors/palette.css';

/** Class for constructing the main navbar of the page **/
const Navbar = () => { 

    useEffect(() => {
        let activeLink;
        switch(window.location.pathname){
            case '/':
                activeLink = document.querySelector('#stream');
                break;

            default:
                activeLink = document.querySelector(`#${window.location.pathname.substring(1, window.location.pathname.length).toLowerCase()}`);
                break;
        }

        if(activeLink){
            activeLink.className += ' active';
        }
    }, [])

    /*
    Handles setting the active link on the navbar
    */
    const setLinkActive = (event) => {
        document.querySelector('.Navbar .active').className = 'nav-link';
        if(event.target.className === 'nav-link' || event.target.className === 'nav-link active'){
            event.target.className = 'nav-link active';
        }
        else{
            event.target.parentNode.className = 'nav-link active';
        }
    }

    return(
        <nav className='Navbar'>
            <div className='navbar navbar-expand-md bg-csh-primary-gradient'>
                <a className='navbar-brand order-md-first' href='https://www.csh.rit.edu/' target='_blank' rel="noopener noreferrer">
                        <img id='csh-logo' src={Logo} alt='CSH logo' />
                </a>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#collapsibleNavbar'>
                    <img src={ToggleIcon} height="100%" />
                </button>

                <div className='collapse navbar-collapse' id='collapsibleNavbar'>
                    <ul className='navbar-nav justify-content-center'>
                        <li className='nav-item'>
                            <Link id='stream' className='nav-link' onClick={setLinkActive} to='/'><span>Stream</span></Link>
                        </li>
                        <li className='nav-item'>
                            <Link id='store' className='nav-link' onClick={setLinkActive} to='/Store'><span>Store</span></Link>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#'><span>Donate</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;