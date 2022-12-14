import React from "react";
import { Link } from "react-router-dom";
import "../modules/home.css";
// import { useEffect, useState } from "react";
import useSWR from "swr";
import CalrieGraph from "./components/CalrieGraph";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Home = () => {
    const { data, error, isLoading } = useSWR("userSetting", fetcher);

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;

// console.log(data)
    // let userdata = data[0]
    // function aaa (){
    //     if(userdata.gender === 0){
    //     13.397 * userdata.weight + 4.799 * userdata.height - 5.677 * 25 + 88.362
    //     }else if(userdata.gender === 1){
    //         9.247 * userdata.weight + 3.098 * userdata.height - 4.33 * 25 + 447.593
    //     }
    // }

    // console.log(aaa())
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
                    <CalrieGraph userData={data}/>
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
