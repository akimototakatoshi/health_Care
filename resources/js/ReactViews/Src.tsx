import React from "react";
import {HashRouter , Route, Routes } from "react-router-dom";
import EatedList from "./EatedList";
import Graph from "./Graph";
import Home from "./Home";
import Notfound from "./Notfound";
import ShopsRecommend from "./ShopsRecommend";
import Setting from "./Setting"
const Src = () => {

    return (
        <div>
            <HashRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path={"/graph"} element={<Graph />} />
                    <Route path={"/shops-recommend"} element={<ShopsRecommend />} />
                    <Route path={"/eated-list"} element={<EatedList />} />
                    <Route path={"/setting"} element={<Setting />} />
                    <Route path="*" element={<Notfound />} />
                </Routes>
            </HashRouter>
        </div>
    );
};

export default Src;
