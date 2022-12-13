import React from "react";
import { Link } from "react-router-dom";
import "../modules/home.css";
// import { useEffect, useState } from "react";
import CalrieGraph from "./components/CalrieGraph";

const Home = () => {

    return (
        <div className="container">        
            <div className="row">
                <div className="col-3">
                    <h3>必要運動量</h3>
                    <ul>
                        <li>ウォーキング：１０分</li>
                        <li>ランニング：５分</li>
                        <li>サイクリング：３分</li>
                    </ul>
                </div>
                <div className="col-9">
                    <CalrieGraph />
                </div>
            </div>

            <div>
                <ul className="nav-list row">
                    <li className="col-3">
                        <Link to="/eated-list" className="nav-text">
                            <button className="material-symbols-outlined btn btn-info btn-lg">
                                restaurant
                            </button>
                            <p>食事を登録する</p>
                        </Link>
                    </li>
                    <li className="col-3">
                        <Link to="/shops-recommend" className="nav-text">
                            <button className="material-symbols-outlined btn btn-info btn-lg">
                                storefront
                            </button>
                            <p>お店を検索する</p>
                        </Link>
                    </li>
                    <li className="col-3">
                        <Link to="/graph" className="nav-text">
                            <button className="material-symbols-outlined btn btn-info btn-lg">
                                show_chart
                            </button>
                            <p>グラフを見る</p>
                        </Link>
                    </li>
                    <li className="col-3">
                        <Link to="/setting" className="nav-text">
                            <button className="material-symbols-outlined btn btn-info btn-lg">
                                settings
                            </button>
                            <p>設定</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
