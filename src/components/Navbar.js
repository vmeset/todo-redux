import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const login = useSelector(state => state.login)
    const user = login.auth.currentUser
    // const dispatch = useDispatch()

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    }

    const logout = () => {
        login.auth.signOut()
        toggleClass()
    }

    return (
        <nav className="navbar">
            {user 
                ? <div className="navbar-brand">
                    <div>
                        <img src={user.photoURL || "https://cdn1.iconfinder.com/data/icons/social-black-buttons/512/anonymous-512.png"} width="30" height="30"
                        />
                    </div>
                    <div>
                        <span className="brand-title">
                            {user.displayName || "Guest notes"}
                        </span>
                    </div> 
                </div>
                : <div className="navbar-brand">
                    Note App
                </div>
            }
            <div className="toggle-button-block">
                <NavLink className="toggle-button" to="./" onClick={toggleClass} >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </NavLink>
            </div>
            <div className={isActive ? 'nav-links active-menu': 'nav-links'}>
                <ul>
                    <li>
                        <NavLink onClick={toggleClass} to="/">Main</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={toggleClass} to='done'>Done</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={toggleClass} to='buy'>Buy</NavLink>
                    </li>
                    {user 
                        ? <button className="btn-logout" onClick={logout}>Sign OUT</button>
                        : <span>
                            {/* <NavLink to='login'>Login</NavLink> */}
                        </span>
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;