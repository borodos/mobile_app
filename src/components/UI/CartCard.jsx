import React, { useState } from "react";

import "../../styles/UI/CartCard.scss";
import { Alert, Button, Snackbar } from "@mui/material";
import ModalDescription from "./ModalDescription";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../redux/cartSlice";
import { useSnackbar } from "notistack";

const CartCard = ({ mobile }) => {
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const showSnackSuccess = () => {
    enqueueSnackbar("Товар успешно куплен", {
      variant: "success",
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
      autoHideDuration: 1500,
    });
  };

  const openDialog = () => {
    setOpen(false);
  };

  const deleteMobileFromCart = () => {
    dispatch(removeProduct(mobile.id));
    enqueueSnackbar("Товар удален из корзины", {
      variant: "warning",
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
      autoHideDuration: 1500,
    });
  };

  return (
    <div className='cart-card'>
      <div className='cart-card__wrapper'>
        <div className='cart-card__img-container'>
          <img src={mobile.image} alt={mobile.name} />
        </div>
        <div className='cart-card__content'>
          <div className='cart-card__title'>{mobile.name}</div>
          <div className='cart-card__description' onClick={setOpen}>
            Описание
          </div>
          <ModalDescription
            open={open}
            handleClose={openDialog}
            description={mobile.description}
            mobileName={mobile.name}
          />

          <div className='cart-card__price'>{mobile.price} Р</div>
          <div className='cart-card__menu'>
            <Button variant='contained' color='success' onClick={showSnackSuccess}>
              Купить
            </Button>
            <Button variant='contained' color='error' onClick={deleteMobileFromCart}>
              Отменить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
