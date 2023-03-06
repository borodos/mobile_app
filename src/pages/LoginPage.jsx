import React, { useState } from "react";
import {
  Button,
  ChakraProvider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { usersData } from "../mokData";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/authUserSlice";

import "../styles/AuthPages.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const isErrorEmail = email === "";
  const isErrorPassword = password === "";
  const dispatch = useDispatch();

  const toast = useToast();

  const onSubmit = (event) => {
    event.preventDefault();
    usersData.map((user) => {
      if (user.email === email && user.password === password) {
        dispatch(setAuthUser(user));
        navigate("/");
      } else {
        toast({
          position: "top-center",
          title: "Error",
          description: "Неправильный пароль или почта",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
      return user;
    });
  };

  return (
    <ChakraProvider>
      <section className='login'>
        <div className='login__container'>
          <div className='login__wrapper'>
            <div className='login__title'>
              <span>Добро пожаловать в Mobile Shop! Пожалуйста, войдите.</span>
            </div>
            <div className='login__body'>
              <form id='form-login' onSubmit={onSubmit}>
                <FormControl className='email-container' isInvalid={isErrorEmail}>
                  <FormLabel>Email</FormLabel>
                  <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                  {isErrorEmail ? <FormErrorMessage>Заполните email.</FormErrorMessage> : null}
                </FormControl>
                <FormControl className='password-container' isInvalid={isErrorPassword}>
                  <FormLabel>Пароль</FormLabel>
                  <Input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {isErrorPassword ? <FormErrorMessage>Заполните пароль.</FormErrorMessage> : null}
                </FormControl>
              </form>
            </div>
            <div className='login__text'>
              <span>
                Нет аккаунта? <Link to='/registration'>Зарегистрироваться</Link>
              </span>
            </div>
            <div className='login__menu'>
              <Button colorScheme='gray' variant='outline' type='submit' form='form-login'>
                Войти
              </Button>
            </div>
          </div>
        </div>
      </section>
    </ChakraProvider>
  );
};

export default LoginPage;
