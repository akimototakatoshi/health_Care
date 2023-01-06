import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { CalorieOfYear } from "./types/calorie";
import "../modules/home.css";
import PrimaryButton from "./components/atoms/button/PrimaryButton";
import DeleteButton from "./components/atoms/button/DeleteButton";

const EatedList = () => {
    const [eated, setEated] = useState("");
    const [getData, setGetData] = useState<CalorieOfYear[]>([]);
    const [inputFood, setInputFood] = useState("");
    const [inputFoodCal, setInputFoodCal] = useState("");

    const onClickCancel = () => {
        setEated("");
        setInputFood("");
        setInputFoodCal("");
    };

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

    const today = new Date();
    const day = today.getDay();

    // 直接入力されたデータを保存
    const onClickAddText = () => {
        if (!inputFood) {
            return;
        } else {
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
            alert("登録しました");
        }
    };

    // セレクトしてデータ保存
    const onClickAddSelect = (name: string, calorie: string) => {
        if (!name) {
            return;
        } else {
            axios
                .post("calorieAddSelect", {
                    food_name: name,
                    calorie: String(calorie),
                    week: day,
                })
                .then((res) => {
                    console.log(res);
                })
                .catch((e) => {
                    console.log("axiosError");
                });
            setGetData([]);
            alert("登録しました");
        }
    };

    return (
        <div className="container">
            <p className="font-monospace h4">料理を検索</p>
            <div className="form-floating mb-3">
                <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="食べた物を入力"
                    value={eated}
                    onChange={(event) => setEated(event.target.value)}
                />
                <label htmlFor="floatingInput">食べた物を入力</label>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-2 mt-md-4">
                    <PrimaryButton onClick={onClickSearch}>検索</PrimaryButton>
                    <DeleteButton onClick={onClickCancel}>取消</DeleteButton>
                </div>
            </div>

            <div className="mb-5">
                {getData.length ? (
                    <p className="font-monospace h6">＜選択してください＞</p>
                ) : (
                    ""
                )}
                {getData.map((e) => {
                    let splitName = e.name.split("/");
                    let arrayLastData = splitName.slice(-1)[0];
                    return (
                        <div key={e.id}>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col d-flex align-items-center justify-content-center">
                                            商品名：{arrayLastData}
                                        </div>
                                        <div className="col d-flex align-items-center justify-content-center">
                                            カロリー：{e.calorie} kcal
                                        </div>
                                        <div className="col d-flex align-items-center justify-content-center">
                                            <PrimaryButton onClick={() => onClickAddSelect(arrayLastData, e.calorie)}>登録</PrimaryButton>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    );
                })}
            </div>

            <p className="font-monospace h4">カロリーを登録する</p>
            <div className="row mb-5">
                <div className="form-floating col-6">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingInput2"
                        placeholder="食べた物を入力"
                        value={inputFood}
                        onChange={(e) => setInputFood(e.target.value)}
                    />
                    <label
                        htmlFor="floatingInput2"
                        style={{ marginLeft: "10px" }}
                    >
                        食べた物を入力
                    </label>
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
                    <label
                        htmlFor="floatingInput3"
                        style={{ marginLeft: "10px" }}
                    >
                        カロリーを入力
                    </label>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-2 mt-md-4">
                    <PrimaryButton onClick={onClickAddText}>登録</PrimaryButton>
                    <DeleteButton onClick={onClickCancel}>取消</DeleteButton>
                </div>
            </div>

            <div className="text-center">
                <Link to="/eated-list/eatedHistory">登録した食べ物一覧</Link>
            </div>
        </div>
    );
};

export default EatedList;
