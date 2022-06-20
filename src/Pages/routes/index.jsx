import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "../Home";
import Favorites from "../Favorites";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/favoritos" element={<Favorites />} />
            </Routes>
        </BrowserRouter>
    )

}

export default Router;