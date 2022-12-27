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
    const [aaaa, setAaaaa] = useState();
    const [inputFood, setInputFood] = useState("");
    const [inputFoodCal, setInputFoodCal] = useState("");

    const onClickRegister = () => {
        navigate("/");
    };

    // 入力した名前と一致するデータを取得
    const onClickSearch = () => {
        axios
            .post("calorieSearch", {
                search: eated,
            })
            .then((res) => {
                setAaaaa(res.data);
            })
            .catch((e) => {
                console.log("axiosError");
            });
    };
    console.log("ccc", aaaa);

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
        <div>
            <h1>食べたものを登録する</h1>
            <input
                type="text"
                value={eated}
                onChange={(event) => setEated(event.target.value)}
            />

            <button name="add" onClick={onClickSearch}>
                検索
            </button>

            <h1>食べたものを入力する</h1>
            <input
                type="text"
                value={inputFood}
                onChange={(e) => setInputFood(e.target.value)}
                placeholder="カレー"
            />
            <input
                type="text"
                value={inputFoodCal}
                onChange={(e) => setInputFoodCal(e.target.value)}
                placeholder="100"
            />
            <button onClick={onClickAddText}>登録</button>
        </div>
    );
};

export default EatedList;
