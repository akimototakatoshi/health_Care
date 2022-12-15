import React from "react";
import { useState } from "react";

const settingGender = (props) => {
    const getGender = props.value;
    const [formGender, setFormGender] = useState('');

    // const genders = [0, 1];

    props.setGender(formGender);

    console.log("aaa", formGender);

    return (
        <div>
            {getGender === 0 ? (
                <div className="col-md-6">
                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        className="form-check-input"
                        value="0"
                        onChange={(e) => {
                            setFormGender(e.target.value);
                        }}
                        checked
                    />
                    <label className="form-check-label" htmlFor="male">
                        男性
                    </label>
                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="1"
                        className="form-check-input"
                        onChange={(e) => {
                            setFormGender(e.target.value);
                        }}
                    />
                    <label className="form-check-label" htmlFor="female">
                        女性
                    </label>
                </div>
            ) : (
                <div className="col-md-6">
                    <input
                        type="radio"
                        id="male"
                        name="gender"
                        className="form-check-input"
                        value="0"
                        onChange={(e) => {
                            setFormGender(e.target.value);
                        }}
                    />
                    <label className="form-check-label" htmlFor="male">
                        男性
                    </label>
                    <input
                        type="radio"
                        id="female"
                        name="gender"
                        value="1"
                        className="form-check-input"
                        onChange={(e) => {
                            setFormGender(e.target.value);
                        }}
                        checked
                    />
                    <label className="form-check-label" htmlFor="female">
                        女性
                    </label>
                </div>
            )}
        </div>
    );
};

export default settingGender;
