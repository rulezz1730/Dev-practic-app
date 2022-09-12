import React from 'react';
import {NavLink} from "react-router-dom";
import style from './Header.module.scss'
import {headerLinks} from "./headerLinks";

const Header = () => {
    return (
        <div className={style.header}>
            <h2>Header bar</h2>
            <div className={style.linkBar}>
                {
                    headerLinks.map(link => {
                        return <NavLink
                            key={link.desc}
                            to={link.path}
                            className={({isActive}) => isActive? style.activeLink : "" }>
                            {link.desc}
                        </NavLink>
                    })
                }
            </div>
        </div>
    );
};

export default Header;