import React, { useState } from "react";
import {useNavigate } from "react-router-dom";

const EatedList = () => {
    const navigate = useNavigate();
    const [eated, setEated] = useState("");

    const onClickRegister = () => {
        navigate("/");
    };
    return (
        <div>
            <h1>食べたものを登録する</h1>
            <input
                type="text"
                value={eated}
                onChange={(event) => setEated(event.target.value)}
            />
            <button onClick={onClickRegister}>登録</button>
        </div>
    );
};

export default EatedList;
