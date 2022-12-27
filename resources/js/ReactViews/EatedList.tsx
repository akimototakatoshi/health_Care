import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const EatedList = () => {
    // useEffect(() => {
    //     getUser();
    // }, []);

    const navigate = useNavigate();
    const [eated, setEated] = useState("");
    const [getData, setGetData] = useState<any[]>([]);
    const [inputFood, setInputFood] = useState("");
    const [inputFoodCal, setInputFoodCal] = useState("");
    // const [suggestName,setSuggestName]=useState("")
    // const [suggestCal,setSuggestCal]=useState("")


    // 入力した名前と一致するデータを取得
    const onClickSearch = () => {
        if (!eated) {
            return;
        } else {
            axios
                .post("calorieSearch", {
                    search: eated,
                })
                .then((res) => {
                    setGetData(res.data.data);
                })
                .catch((e) => {
                    console.log("axiosError");
                });
        }
        setEated("");
    };




    // 直接入力されたデータを保存
    const today = new Date();
    const day = today.getDay();
    const onClickAddText = () => {
        axios
            .post("calorieAddText", {
                food_name: inputFood,
                calorie: inputFoodCal,
                week: day,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log("axiosError");
            });
        setInputFood("");
        setInputFoodCal("");
    };


    // セレクトしてデータ保存
    const onClickAddSelect = () => {
        // setInputFood();
        // setInputFoodCal();
        onClickAddText();
    };

    return (
        <div className="container">
            <h3>食べたものを検索する</h3>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="食べた物を入力"
                    value={eated}
                    onChange={(event) => setEated(event.target.value)}
                />
                <label htmlFor="floatingInput">
                    食べた物を入力
                </label>
                <button name="add" onClick={onClickSearch}>
                    検索
                </button>
            </div>


            <h3>食べた物を自分で登録する</h3>
            <div className="row">
            <div className="form-floating col-6">
                <input
                    type="text"
                    className="form-control"
                    id="floatingInput2"
                    placeholder="食べた物を入力"
                    value={inputFood}
                    onChange={(e) => setInputFood(e.target.value)}
                />
                <label htmlFor="floatingInput2">食べた物を入力</label>
            </div>
            <div className="form-floating col-6">
                <input
                    type="text"
                    className="form-control"
                    id="floatingInput3"
                    placeholder="カロリーを入力"
                    value={inputFoodCal}
                    onChange={(e) => setInputFoodCal(e.target.value)}
                />
                <label htmlFor="floatingInput3">カロリーを入力</label>
            </div>
            </div>
                <button onClick={onClickAddText}>登録</button>

            <div>
                {getData.map((e) => {
                    let splitName = e.name.split("/");
                    let arrayLastData = splitName.slice(-1)[0];
                    return (
                        <div key={e.id}>
                            <ul>
                                <li>
                                    名前：{arrayLastData} カロリー：{e.calorie}
                                </li>
                                <button>登録</button>
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default EatedList;
