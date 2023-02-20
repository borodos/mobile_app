import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.authUserSlice.user);

  useEffect(() => {
    if (!user.isAuth) {
      navigate("/login");
    }
  });

  const cart = useSelector((state) => state.cartSlice.cart);

  return (
    <section className='cart'>
      <div className='cart__container'>
        {cart.length ? (
          <div className='cart__wrapper'>
            <div className='cart__list'>
              {/* {cart.map((value, index, array) => (
                <CartCard key={`${value}-${index}`} computer={value} />
              ))} */}
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
