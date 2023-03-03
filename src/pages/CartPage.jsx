import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartCard from "./../components/UI/CartCard";

import "../styles/CartPage.scss";

const CartPage = () => {
  const cart = useSelector((state) => state.cartSlice.cart);

  return (
    <section className='cart'>
      <div className='cart__container'>
        {cart.length ? (
          <div className='cart__wrapper'>
            <div className='cart__list'>
              {cart.map((value, index, array) => (
                <CartCard key={`${value}-${index}`} mobile={value} />
              ))}
            </div>
          </div>
        ) : (
          <p className='cart__p'>Корзина пуста!</p>
        )}
      </div>
    </section>
  );
};

export default CartPage;
