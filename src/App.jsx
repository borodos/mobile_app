import AppRouter from "./routes/AppRouter";

import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
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
