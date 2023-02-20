import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { mobilesData } from "../mokData";
import { Alert, Button, Snackbar } from "@mui/material";

import "../styles/ProductPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/cartSlice";

const ProductPage = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.authUserSlice.user);

  useEffect(() => {
    if (!user.isAuth) {
      navigate("/login");
    }
  });

  let mobile = {};

  const [openSuccess, setOpenSuccess] = useState();
  const [openWarning, setOpenWarning] = useState();

  const params = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartSlice.cart);

  const searchMobile = () => {
    mobilesData.forEach((value) => {
      if (value.id === Number(params.id)) {
        return (mobile = value);
      }
    });
  };

  searchMobile();

  const showSnackSuccess = () => {
    setOpenSuccess(true);
  };

  const showSnackWarning = () => {
    setOpenWarning(true);
  };

  const addToCart = () => {
    if (cart.find((value) => value.id === mobile.id)) {
      return showSnackWarning();
    } else {
      dispatch(addProduct(mobile));
      return showSnackSuccess();
    }
  };

  return (
    <section className='product'>
      <div className='product__wrapper'>
        <h1 className='product__title'>
          <Link className='product__title-link' to='/'>
            Главная
          </Link>{" "}
          &gt; {mobile.name}
        </h1>
        <div className='product__info'>
          <div className='product__img-container'>
            <div className='product__img'>
              <img src={mobile.image} alt='mobile' />
              <span className='product__img-text'>{mobile.name}</span>
            </div>
          </div>
          <div className='content'>
            <div className='content__title'>{mobile.description}</div>
            <ul className='content__body'>
              <li>
                <span className='content__property'>Разрешение экрана:</span> {mobile.resolution}
              </li>
              <li>
                <span className='content__property'>Объем памяти:</span> {mobile.memory}
              </li>
              <li>
                <span className='content__property'>Технология экрана:</span>{" "}
                {mobile.manufacturingScreen}
              </li>
              <li>
                <span className='content__property'>Частота обновления экрана:</span>{" "}
                {mobile.frequencyScreen}
              </li>
              <li>
                <span className='content__property'>Операционная система:</span> {mobile.os}
              </li>
              <li>
                <span className='content__property'>Процессор:</span> {mobile.processor}
              </li>
              <li>
                <span className='content__property'>Кол-во ядер процессора:</span>{" "}
                {mobile.coreCount}
              </li>
              <li>
                <span className='content__property'>Техпроцесс:</span> {mobile.technicalProcess}
              </li>
              <li>
                <span className='content__property'>Графический ускоритель:</span>{" "}
                {mobile.videoCard}
              </li>
              <li>
                <span className='content__property'>Кол-во камер:</span> {mobile.cameraCount}
              </li>
              <li>
                <span className='content__property'>Камера:</span> {mobile.camera}
              </li>
              <li>
                <span className='content__property'>Кол-во мегапикселей камеры:</span>{" "}
                {mobile.cameraPixels}
              </li>
            </ul>
            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={openSuccess}
              autoHideDuration={2000}
              onClose={() => setOpenSuccess(false)}
            >
              <Alert severity='success' sx={{ width: "100%" }} variant='filled'>
                Товар успешно добавлен в корзину
              </Alert>
            </Snackbar>

            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "center" }}
              open={openWarning}
              autoHideDuration={2000}
              onClose={() => setOpenWarning(false)}
            >
              <Alert severity='warning' sx={{ width: "100%" }} variant='filled'>
                Товар уже добавлен в корзину
              </Alert>
            </Snackbar>

            <Button variant='contained' color='success' onClick={addToCart}>
              Добавить в корзину
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
