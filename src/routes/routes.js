import MainPage from "../pages/MainPage";
import ProductPage from "../pages/ProductPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import ProfilePage from "./../pages/ProfilePage";

export const publicRoutes = [
  {
    path: "/",
    component: <MainPage />,
  },

  {
    path: "/products/:id",
    component: <ProductPage />,
  },

  {
    path: "/login",
    component: <LoginPage />,
  },

  {
    path: "/registration",
    component: <RegistrationPage />,
  },

  {
    path: "/users/:id",
    component: <ProfilePage />,
  },
];
