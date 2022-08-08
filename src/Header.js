import React from 'react';
import './Header.css';
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useStateValue } from './StateProvider';

function Header() {
    const [{user}] = useStateValue(); /*Pulling the user data from the state provider*/

    return ( 
        <div className='header'> {/*Thi is BEM(Block Element Modifier) convention*/}
            <div className='header__left'>
                <Avatar
                    className='header__avatar' 
                    alt={user?.displayName}
                    src={user?.photoURL} />
                <AccessTimeIcon/>    
            </div>
            <div className='header__search'>
                <SearchIcon/>
                <input
                    placeholder="Search for channels"
                    type="text"
                />
            </div>
            <div className='header__right'>
                <HelpOutlineIcon/>
            </div>

        </div>
     );
}

export default Header;