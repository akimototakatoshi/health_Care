import React from "react";
import { useState } from "react";

const settingGender = (props) => {
    return (
        <>
            <div className="col-md-6">
                <input
                    type="radio"
                    id="male"
                    name="gender"
                    className="form-check-input"
                    value="0"
                    onChange={(e) => {
                        props.setGender(0);
                    }}
                    checked={props.gender === 0}
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
                        props.setGender(1);
                    }}
                    checked={props.gender === 1}
                />
                <label className="form-check-label" htmlFor="female">
                    女性
                </label>
            </div>
        </>
    );
};

export default settingGender;
