import AppRouter from "./routes/AppRouter";

import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { usersData } from "./mokData";

function App() {
  const user = useSelector((state) => state.authUserSlice.user);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      usersData.find((value) => {
        if (value.token === token) {
          return console.log(value);
        }
      });
    }
  }, []);

  return (
    <section className='app'>
      <NavBar />
      <div className='app-container'>
        <AppRouter />
      </div>
      <Footer />
    </section>
  );
}

export default App;
