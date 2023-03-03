import React, { useState } from "react";
import "../styles/AuthPages.scss";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Box,
  ChakraProvider,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/authUserSlice";
import { Link, useNavigate } from "react-router-dom";
import { usersData } from "../mokData";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  const isErrorEmail = email === "";
  const isErrorPassword = password === "";
  const isErrorFirstName = firstName === "";
  const isErrorSecondName = secondName === "";

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    if (isErrorEmail || isErrorPassword || isErrorFirstName || isErrorSecondName) {
      return false;
    }

    const newUser = {
      id: usersData.length + 1,
      firstName: firstName,
      secondName: secondName,
      isAuth: true,
      email: email,
      password: password,
      token:
        "eyJhbGciOiJDAazxXcaAWeqsaInR5cCI6IkpXVCJ9.ejSjdpoaSIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
      image: "",
    };

    usersData.push(newUser);

    dispatch(setAuthUser(newUser));
    navigate("/");
  };

  return (
    <ChakraProvider>
      <section className='register'>
        <div className='register__container'>
          <div className='register__wrapper'>
            <div className='register__title'>
              <span>Добро пожаловать в Mobile Shop! Пожалуйста, войдите.</span>
            </div>
            <div className='register__body'>
              <form id='form-register' onSubmit={onSubmit}>
                <Box className='name-container' py={2}>
                  <FormControl className='firstname-container' isInvalid={isErrorFirstName}>
                    <FormLabel>Имя</FormLabel>
                    <Input
                      type='text'
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                    {isErrorEmail ? <FormErrorMessage>Заполните имя.</FormErrorMessage> : null}
                  </FormControl>
                  <FormControl className='secondname-container' isInvalid={isErrorSecondName}>
                    <FormLabel>Фамилия</FormLabel>
                    <Input
                      type='text'
                      value={secondName}
                      onChange={(e) => setSecondName(e.target.value)}
                    />
                    {isErrorEmail ? <FormErrorMessage>Заполните фамилию.</FormErrorMessage> : null}
                  </FormControl>
                </Box>
                <Box py={2}>
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
                    {isErrorPassword ? (
                      <FormErrorMessage>Заполните пароль.</FormErrorMessage>
                    ) : null}
                  </FormControl>
                </Box>
              </form>
            </div>
            <div className='register__text'>
              <span>
                Есть аккаунт? <Link to='/login'>Войдите</Link>
              </span>
            </div>
            <div className='register__menu'>
              <Button colorScheme='gray' variant='outline' type='submit' form='form-register'>
                Зарегистрироваться
              </Button>
            </div>
          </div>
        </div>
      </section>
    </ChakraProvider>
  );
};

export default RegisterPage;
