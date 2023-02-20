import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <section className='app'>
      <BrowserRouter>
        <NavBar />
        <div className='app-container'>
          <AppRouter />
        </div>
        <Footer />
      </BrowserRouter>
    </section>
  );
}

export default App;
