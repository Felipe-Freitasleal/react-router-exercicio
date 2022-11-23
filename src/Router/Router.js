import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import ProductPage from "../pages/ProductPage";

function Router () {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="*" element={<ErrorPage/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/product/:id" element={<ProductPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router