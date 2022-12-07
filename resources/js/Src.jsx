import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import EatedList from "./EatedList";
import Graph from "./Graph";
import Home from "./Home";
import Notfound from "./Notfound";
import ShopsRecommend from "./ShopsRecommend";

const Src = () => {
    return (
        <div>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path={"/graph"} element={<Graph />} />
                    <Route path={"/shop-recommend"} element={<ShopsRecommend />} />
                    <Route path={"/eated-list"} element={<EatedList />} />
                    <Route path="*" element={<Notfound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Src;
