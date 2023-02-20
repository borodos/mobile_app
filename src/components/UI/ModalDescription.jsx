import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

import "../../styles/UI/ModalDescription.scss";

const ModalDescription = ({ open, handleClose, description, mobileName }) => {
  return (
    <Dialog className='mobile-dialog' open={open} onClose={handleClose}>
      <DialogTitle className='mobile-dialog__title'>{mobileName}</DialogTitle>
      <DialogContent className='mobile-dialog__content'>
        <DialogContentText className='mobile-dialog__text'>{description}</DialogContentText>
      </DialogContent>
      <DialogActions className='mobile-dialog__menu'>
        <Button className='mobile-dialog__button' onClick={handleClose} variant='outlined'>
          Закрыть
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalDescription;
