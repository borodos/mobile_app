import { Avatar, Badge, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cart = useSelector((state) => state.cartSlice.cart);
  const user = useSelector((state) => state.authUserSlice.user);

  const imageProfile = () => {
    if (user.image) {
      return require("../assets/somebody.jpeg");
    }
  };

  const showComponent = () => {
    if (!user?.isAuth) {
      return "hidden";
    } else {
      return "navbar";
    }
  };

  return (
    <section className={showComponent()}>
      <div className='navbar__wrapper'>
        <Link to='/'>
          <p className='navbar__logo'>Mobile Shop</p>
        </Link>
        <div className='navbar__menu'>
          <Button className='navbar__button' variant='contained'>
            <Badge badgeContent={cart.length} color='secondary'>
              <ShoppingCartIcon />
            </Badge>
          </Button>
          <Link to={`users/${user.id}`}>
            <span className='navbar__profile-name'>
              {user?.firstName} {user?.secondName}
            </span>
          </Link>
          <Avatar
            className='navbar__avatar'
            alt={`${user?.firstName} ${user?.secondName}`}
            src={imageProfile()}
          />
        </div>
        <Button
          className='navbar__button'
          variant='contained'
          color='error'
          endIcon={<ExitToAppIcon />}
        >
          Logout
        </Button>
      </div>
    </section>
  );
};

export default NavBar;
