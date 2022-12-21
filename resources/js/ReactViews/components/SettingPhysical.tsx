import React from "react";

const SettingPhysical = (props:any) => {
    return (
        <div className="col-md-6">
            <select
                name="physical"
                className="form-select"
                value={props.physical}
                onChange={(e) => {
                    props.setPhysical(e.target.value);
                }}
            >
                <option value="1.5" className="form-control">
                    生活の大部分が座位で、静的な活動が中心
                </option>
                <option value="1.75" className="form-control">
                    座位中心の仕事だが、作業・接客等、あるいは通勤・買物・家事など軽い運動を含む
                </option>
                <option value="2" className="form-control">
                    移動や立位の多い仕事への従事者。あるいは、スポーツなど余暇における活発な運動習慣をもっている
                </option>
            </select>
        </div>
    );
};

export default SettingPhysical;
