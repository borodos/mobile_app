import { Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/UI/MobileCard.scss";
import ModalDescription from "./ModalDescription";

const MobileCard = ({ mobile }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const openDialog = () => {
    setOpen(false);
  };

  return (
    <div className='mobile-card'>
      <div className='mobile-card__wrapper'>
        <h4 className='mobile-card__title'>{mobile.name}</h4>
        <div className='mobile-card__image'>
          <img src={mobile.image} alt='adsa' />
        </div>
        <p className='mobile-card__description' onClick={() => setOpen(true)}>
          Описание
        </p>
        <ModalDescription
          open={open}
          handleClose={openDialog}
          description={mobile.description}
          mobileName={mobile.name}
        />
        <p className='mobile-card__rating'>
          Средняя оценка: <span className='rate'>{mobile.rating}</span>
        </p>

        <div className='mobile-card__price'>{mobile.price} Р</div>
        <Button
          className='mobile-card__button'
          variant='contained'
          onClick={() => navigate(`products/${mobile.id}`)}
        >
          Подробнее
        </Button>
      </div>
    </div>
  );
};

export default MobileCard;
