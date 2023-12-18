import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';


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
import { Tools } from './components/Shop/Tools/Tools';
import { IrrigationSystems } from './components/Shop/IrrigationSystems/IrrigationSystems';
import { PowerMachines } from './components/Shop/PowerMachines/PowerMachines';
import { Pipes } from './components/Shop/Pipes/Pipes';
import { Details } from './components/Details/Details';
import { Edit } from './components/Edit/Edit';
import { Delete } from './components/Delete/Delete';
import { Buy } from './components/Buy/Buy';
import { Favorit } from './components/Favorit/Favorit';
import { Abault } from './components/Abault/Abault';
import { ErrorPage } from './components/404/404';
import { Search } from './components/Search/Search';
import { BuyProvider } from './context/BuyContext';
import { FavoritProvider } from './context/FavoritContext';
import { NotificationProvider } from './context/NotificationContext';
import { RouteGuard } from './components/common/RouteGuard';
import { ProductAdmin } from './components/common/ProductAdmin';
import { SearchGuard } from './components/common/SearchGuard';
import { UserGuard } from './components/common/UserGuard';


function App() {
  return (
    <NotificationProvider>
      <AuthProvider>
        <ProductProvider>
          <BuyProvider>
            <FavoritProvider>
              <div >
                <Header />
                <main >
                  <Routes>

                    <Route path='/' element={<Home />} />

                    <Route element={<UserGuard />}>
                      <Route path='/login' element={<Login />} />
                      <Route path='/register' element={<Register />} />
                    </Route>

                    <Route path='/shop' element={<Shop />} />
                    <Route path='/shop/waterpomps' element={<Waterpomp />} />
                    <Route path='/shop/systems' element={<IrrigationSystems />} />
                    <Route path='/shop/parts' element={<Parts />} />
                    <Route path='/shop/machines' element={<PowerMachines />} />
                    <Route path='/shop/pipes' element={<Pipes />} />
                    <Route path='/shop/tools' element={<Tools />} />
                    <Route path='/shop/:type/:productId/details' element={<Details />} />
                    <Route path='/abalt' element={<Abault />} />

                    <Route element={<SearchGuard />}>
                      <Route path='/search' element={<Search />} />
                    </Route>

                    <Route element={<RouteGuard />}>
                      <Route path='/create' element={
                        <ProductAdmin>
                          <Create />
                        </ProductAdmin>
                      } />
                      <Route path='/shop/:type/:productId/edit' element={
                        <ProductAdmin>
                          <Edit />
                        </ProductAdmin>
                      } />
                      <Route path='/shop/:type/:productId/delete' element={
                        <ProductAdmin>
                          <Delete />
                        </ProductAdmin>
                      } />
                      <Route path='/buy' element={<Buy />} />
                      <Route path='/favorit' element={<Favorit />} />
                      <Route path='/logout' element={<Logout />} />
                    </Route>

                    <Route path='/*' element={<ErrorPage />} />

                  </Routes>
                </main>

                <Footer />
              </div>
            </FavoritProvider>
          </BuyProvider>
        </ProductProvider>
      </AuthProvider>
    </NotificationProvider>
  );
}

export default App;
