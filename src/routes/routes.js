import MainPage from "../pages/MainPage";
import ProductPage from "../pages/ProductPage";

export const publicRoutes = [
  {
    path: "/",
    component: <MainPage />,
  },
  {
    path: "/products/:id",
    component: <ProductPage />,
  },
];
