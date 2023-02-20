import { Avatar, Badge, Button, IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.scss";

const NavBar = () => {
  return (
    <section className='navbar'>
      <div className='navbar__wrapper'>
        <Link to='/'>
          <p className='navbar__logo'>Mobile Shop</p>
        </Link>
        <div className='navbar__menu'>
          <Button aria-label='cart'>
            <Badge badgeContent={574} color='secondary'>
              adsadad
            </Badge>
          </Button>
          <span className='navbar__profile-name'>Giga Gigach</span>
          <Avatar className='navbar__avatar' alt='Giga Gigach' src='/static/images/avatar/1.jpg' />
        </div>
      </div>
    </section>
  );
};

export default NavBar;
