import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../modules/home.css";
import useSWR from "swr";
import CalrieGraph from "./components/CalrieGraph";
import Exercise from "./components/Exercise";
import { Data } from "./types/user";
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home = () => {
    const {
        data,
        error,
        isLoading,
    }: { data: Data; error: Error | undefined; isLoading: boolean } = useSWR(
        "userSetting",
        fetcher
    );
    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;

    return (
        <div>
            <div className="container justify-content-sm-center">
                <div className="card">
                    <div className="row">
                        <div className="col justify-content-sm-center justify-content-md-start">
                            <CalrieGraph userData={data} />
                        </div>
                        <div className="col mt-5 wf-roundedmplus1c" style={{margin:"20px 20px 20px 20px"}}>
                            <Exercise userData={data} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5 p-0">
                <ul className="nav-list p-0 d-flex justify-content-between flex-wrap">
                    <li className="col-6 col-md-3">
                        <Link to="/eated-list" className="nav-text">
                            <button className="material-symbols-outlined btn btn-info btn-lg">
                                restaurant
                            </button>
                            <p>食事を登録する</p>
                        </Link>
                    </li>
                    <li className="col-6 col-md-3">
                        <Link to="/shops-recommend" className="nav-text">
                            <button className="material-symbols-outlined btn btn-info btn-lg">
                                storefront
                            </button>
                            <p>お店を検索する</p>
                        </Link>
                    </li>
                    <li className="col-6 col-md-3">
                        <Link to="/graph" className="nav-text">
                            <button className="material-symbols-outlined btn btn-info btn-lg">
                                show_chart
                            </button>
                            <p>グラフを見る</p>
                        </Link>
                    </li>
                    <li className="col-6 col-md-3">
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
