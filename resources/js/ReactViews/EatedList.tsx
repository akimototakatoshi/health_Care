import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";


const EatedList= () => {
    // const getUser = async () => {
    //     const data = await axios.get("/calorie");

    //     console.log(data.data[1]);
    // };

    // useEffect(() => {
    //     getUser();
    // }, []);

    const navigate = useNavigate();
    const [eated, setEated] = useState("");
    const [inputFood,setInputFood]=useState("")
    const [inputFoodCal,setInputFoodCal]=useState("")
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
            <h1>食べたものを入力する</h1>
         <input type="text" value={inputFood} onChange={(e)=>setInputFood(e.target.value)} placeholder="カレー"/>
         <input type="text" value={inputFoodCal} onChange={(e)=>setInputFoodCal(e.target.value)} placeholder="100"/>
         <button>登録</button>
        </div>
    );
};

export default EatedList;
