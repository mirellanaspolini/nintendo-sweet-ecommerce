import DefaultPage from 'componentes/DefaultPage';
import ProductPage from 'componentes/ProductPage';
import ScrollToTop from 'componentes/ScrollToTop';
import { CartProvider } from 'contexts/Cart';
import { FavoriteProvider } from 'contexts/Favorites';
import Cart from 'pages/Cart';
import Favorites from 'pages/Favorites';
import NotFound from 'pages/NotFound';
import SearchResults from 'pages/SearchResults';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function AppRoutes() {
    return (
        <CartProvider>
            <FavoriteProvider>
                <BrowserRouter>
                    <ScrollToTop />
                    <Fragment>
                        <Routes>
                            <Route path="/" element={<DefaultPage />}>
                                <Route path="/" element={<HomePage />} />
                                <Route
                                    path="search"
                                    element={<SearchResults />}
                                />
                                <Route path="/carrinho" element={<Cart />} />
                                <Route
                                    path="/favoritos"
                                    element={<Favorites />}
                                />
                            </Route>
                            <Route path="/entrar" element={<SignIn />}></Route>
                            <Route
                                path="/cadastre-se"
                                element={<SignUp />}
                            ></Route>
                            <Route
                                path="/produtos/:slug/*"
                                element={<ProductPage />}
                            />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Fragment>
                </BrowserRouter>
            </FavoriteProvider>
        </CartProvider>
    );
}

export default AppRoutes;
