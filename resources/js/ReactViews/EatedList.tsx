import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";


const EatedList= () => {
    const getUser = async () => {
        const data = await axios.get("/calorie");

        console.log(data.data[1]);
    };

    useEffect(() => {
        getUser();
    }, []);

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
            <button 
            name= "add"
            onClick={onClickRegister}>登録</button>
        
        </div>
    );
};

export default EatedList;
