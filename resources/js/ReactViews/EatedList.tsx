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
        </div>
    );
};

export default EatedList;
