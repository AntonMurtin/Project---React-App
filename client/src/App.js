
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { AuthProvider } from './context/AuthContext';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/login';
import { Catalog } from './components/Catalog/Catalog';


function App() {
  return (
    <AuthProvider>
      <div >
        <Header />
        <main >
          <Routes>
          <Route path='/' element={<Home />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register/>} />

          </Routes>
        </main>

        <Footer />
      </div>
    </AuthProvider>

  );
}

export default App;
