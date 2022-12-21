import React from "react";

const SettingAge = (props) => {
    return (
        <div className="col-md-6">
            <select
                name="age"
                className="form-select"
                value={props.age}
                onChange={(e) => props.setAge(e.target.value)}
            >
                <option value="15" className="form-control">
                    10歳~19歳
                </option>
                <option value="25" className="form-control">
                    20歳~29歳
                </option>
                <option value="35" className="form-control">
                    30歳~39歳
                </option>
                <option value="45" className="form-control">
                    40歳~49歳
                </option>
                <option value="55" className="form-control">
                    50歳~59歳
                </option>
                <option value="65" className="form-control">
                    60歳~70歳
                </option>
            </select>
        </div>
    );
};

export default SettingAge;
