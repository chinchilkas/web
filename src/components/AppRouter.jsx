import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AllPetPage from "../pages/AllPetsPage";


const AppRouter = () => {
    const routes = [
        {path: "/", element: <HomePage/>},
        {path: "/all_pet", element: <AllPetPage/>}
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