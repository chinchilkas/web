import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AllPetPage from "../pages/AllPetsPage";
import ItemPage from "../pages/ItemPage";
import CartPage from "../pages/CartPage";


const AppRouter = () => {
    const routes = [
        {path: "/", element: <HomePage/>},
        {path: "/all_pets", element: <AllPetPage/>},
        {path: "/all_pets/:id", element:<ItemPage/>},
        {path: "/cart", element: <CartPage/>}
    ]
    return (
        <Routes>
            {routes.map(route =>
                <Route element={route.element} path={route.path}/>)}

            <Route element={<HomePage/>} path="*"/>
        </Routes>

    );
};

export default AppRouter;