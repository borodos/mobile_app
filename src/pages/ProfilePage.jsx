import React, { useEffect, useState } from "react";
import { Avatar, ChakraProvider, Input } from "@chakra-ui/react";

import "../styles/ProfilePage.scss";
import { useDispatch, useSelector } from "react-redux";
import { setProfileImage } from "../redux/authUserSlice";

const ProfilePage = () => {
  const user = useSelector((store) => store.authUserSlice.user);
  const [file, setFile] = useState("");
  const dispatch = useDispatch();

  const setImage = () => {
    if (file) {
      const splittedFile = file.split("\\");
      const filePath = splittedFile[splittedFile.length - 1];
      dispatch(setProfileImage(`./assets/${filePath}`));
      return require(`../assets/${filePath}`);
    }
  };

  return (
    <ChakraProvider>
      <section className='profile'>
        <div className='profile__container'>
          <div className='profile__wrapper'>
            <div className='profile__img-container'>
              <Avatar size='2xl' src={setImage()} />
              <Input
                value={file}
                placeholder='Download file'
                type='file'
                onChange={(e) => setFile(e.target.value)}
              />
            </div>
            <div className='profile__content'>
              <p className='profile__email info'></p>
              <p className='profile__firstname info'>
                Имя: <span>{user.firstName}</span>
              </p>
              <p className='profile__secondname info'>
                Фамилия: <span>{user.secondName}</span>
              </p>
              <p className='profile__email info'>
                Email: <span>{user.email}</span>
              </p>
              <p className='profile__password info'>
                Password: <span>******</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </ChakraProvider>
  );
};

export default ProfilePage;
