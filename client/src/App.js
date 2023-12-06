import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import { ProductProvider} from './context/ProductContext';


import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Register } from './components/Register/Register';
import { Login } from './components/Login/login';
import { Logout } from './components/Logout/Logout';
import { Shop } from './components/Shop/Shop';
import { Waterpomp } from './components/Shop/Waterpomp/Waterpomp';
import { Create } from './components/Create/Create';
import { Parts } from './components/Shop/Parts/Parts';
import {Tools} from './components/Shop/Tools/Tools';


function App() {
  return (
    <AuthProvider>
        <ProductProvider>
          <div className='root'>
            <Header />
            <main >
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/shop/waterpom' element={<Waterpomp />} />
                <Route path='/shop/parts' element={<Parts/>} />
                <Route path='/shop/tools' element={<Tools/>} />
                <Route path='/create' element={<Create />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/logout' element={<Logout />} />

              </Routes>
            </main>

            <Footer />
          </div>
        </ProductProvider>
    </AuthProvider>

  );
}

export default App;
