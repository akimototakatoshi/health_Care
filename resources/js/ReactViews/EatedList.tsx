import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const EatedList = () => {

    const navigate = useNavigate();
    const [eated, setEated] = useState("");
    const [getData, setGetData] = useState<any[]>([]);
    const [inputFood, setInputFood] = useState("");
    const [inputFoodCal, setInputFoodCal] = useState("");
    // const [suggestName,setSuggestName]=useState("")
    // const [suggestCal,setSuggestCal]=useState("")

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
    const onClickAddSelect = (name: any, calorie: any) => {
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
    };

    return (
        <div className="container">
            <p className="font-monospace h4">食べた物を検索する</p>
            <div className="form-floating mb-4">
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
                    <button
                        name="add"
                        onClick={onClickSearch}
                        className="btn btn-outline-primary mx-2"
                    >
                        検索
                    </button>
                    <button
                        className="btn btn-outline-danger mx-2"
                        onClick={onClickCancel}
                    >
                        取消
                    </button>
                </div>
            </div>

            <p className="font-monospace h4">食べた物を自分で登録する</p>
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
                <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-2 mt-md-4">
                    <button
                        className="btn btn-outline-primary mx-2"
                        onClick={onClickAddText}
                    >
                        登録
                    </button>

                    <button
                        className="btn btn-outline-danger mx-2"
                        onClick={onClickCancel}
                    >
                        取消
                    </button>
                </div>
            </div>

            <div>
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
                                            <button
                                                className="btn btn-outline-primary"
                                                onClick={() =>
                                                    onClickAddSelect(
                                                        arrayLastData,
                                                        e.calorie
                                                    )
                                                }
                                            >
                                                登録
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default EatedList;
