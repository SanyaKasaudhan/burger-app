import React from 'react';

import './Toolbar.css';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import classes from './Toolbar.css'
const Toolbar = ( props ) => (
    <header className='Toolbar'>
        MENU
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className='Logo'>
            <Logo />
        </div>
        <nav className='DesktopOnly'>
            <NavigationItems />
        </nav>
    </header>
);

export default Toolbar;