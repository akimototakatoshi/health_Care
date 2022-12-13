import React from "react";
import { Link } from "react-router-dom";
import "../modules/home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CalrieGraph from "./components/CalrieGraph";

const Home = () => {
    const [calorie, setCalorie] = useState([]);

    useEffect(() => {
        axios
            .get("calorieIntake")
            .then((res) => {
                setCalorie(res.data.data);
                console.log(res.data.data);
            })
            .catch((e) => {
                console.log(e);
            });
    }, []);

    return (
        <div className="container">
            {/* {calorie.map((todo) => {
                return (
                    <div key={todo.id}>
                        {todo.food_name} {todo.calorie} {todo.created_at}
                    </div>
                );
            })} */}

            <CalrieGraph />
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
