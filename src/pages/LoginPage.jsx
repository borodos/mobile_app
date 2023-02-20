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
    usersData.find((user) => {
      if (user.email === email && user.password === password) {
        if (!user.isAuth) {
          user.isAuth = true;
        }
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
              <span>Welcome to MySoft! Please, sign in.</span>
            </div>
            <div className='login__body'>
              <form id='form-login' onSubmit={onSubmit}>
                <FormControl className='email-container' isInvalid={isErrorEmail}>
                  <FormLabel>Email</FormLabel>
                  <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                  {isErrorEmail ? <FormErrorMessage>Email is required.</FormErrorMessage> : null}
                </FormControl>
                <FormControl className='password-container' isInvalid={isErrorPassword}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {isErrorPassword ? (
                    <FormErrorMessage>Password is required.</FormErrorMessage>
                  ) : null}
                </FormControl>
              </form>
            </div>
            <div className='login__text'>
              <span>
                Don't have an account? <Link to='/registration'>Sign In</Link>
              </span>
            </div>
            <div className='login__menu'>
              <Button colorScheme='gray' variant='outline' type='submit' form='form-login'>
                Log In
              </Button>
            </div>
          </div>
        </div>
      </section>
    </ChakraProvider>
  );
};

export default LoginPage;
