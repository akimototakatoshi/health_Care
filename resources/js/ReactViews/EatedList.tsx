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
    const [inputFood,setInputFood]=useState("")
    const [inputFoodCal,setInputFoodCal]=useState("")

    const onClickRegister = () => {
        navigate("/");
    };

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

    // const selectCalorie = () => {
    //     axios
    //     .get("calorieSearch")
    // }

    // const onClickGetSearch = () => {
    //     axios
    //         .get("", {
    //             search: eated,
    //         })
    //         .then((res) => {
    //             console.log(res);
    //         })
    //         .catch((e) => {
    //             console.log("axiosError");
    //         })
    // };

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
         <input type="text" value={inputFood} onChange={(e)=>setInputFood(e.target.value)} placeholder="カレー"/>
         <input type="text" value={inputFoodCal} onChange={(e)=>setInputFoodCal(e.target.value)} placeholder="100"/>
         <button>登録</button>

        </div>
    );
};

export default EatedList;
