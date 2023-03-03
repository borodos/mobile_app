import AppRouter from "./routes/AppRouter";

import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usersData } from "./mokData";
import { setAuthUser } from "./redux/authUserSlice";
import { useNavigate } from "react-router-dom";
import { SnackbarProvider } from "notistack";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("message");
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      usersData.find((value) => {
        if (value.token === token) {
          dispatch(setAuthUser(value));
          navigate("/");
        }
      });
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <SnackbarProvider maxSnack={3}>
      <section className='app'>
        <NavBar />
        <AppRouter />
        <Footer />
      </section>
    </SnackbarProvider>
  );
}

export default App;
