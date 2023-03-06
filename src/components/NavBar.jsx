import { Avatar, Badge, Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/NavBar.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useSelector, useDispatch } from "react-redux";
import { logoutAuthUser } from "../redux/authUserSlice";

const NavBar = () => {
  const cart = useSelector((state) => state.cartSlice.cart);
  const user = useSelector((state) => state.authUserSlice.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const imageProfile = () => {
    if (user.image) {
      return require("../assets/grandbeauty00.jpg");
    }
  };

  const showComponent = () => {
    if (!Object.keys(user).length) {
      return "hidden";
    } else {
      return "navbar";
    }
  };
  const logout = () => {
    dispatch(logoutAuthUser());
    navigate("/login");
  };

  return (
    <section className={showComponent()}>
      <div className='navbar__wrapper'>
        <Link to='/'>
          <p className='navbar__logo'>Mobile Shop</p>
        </Link>
        <div className='navbar__menu'>
          <Button
            className='navbar__button'
            variant='contained'
            onClick={() => navigate(`/users/${user.id}/cart`)}
          >
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
          onClick={logout}
        >
          Выйти
        </Button>
      </div>
    </section>
  );
};

export default NavBar;
