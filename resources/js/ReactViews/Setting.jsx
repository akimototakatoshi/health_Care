import React, { useEffect } from "react";
import useSWR from "swr";
import SettingGender from "./components/SetteingGender";
import SettingAge from "./components/SettingAge";
import SettingPhysical from "./components/SettingPhysical";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Setting = () => {
    const { data, error, isLoading } = useSWR("userSetting", fetcher);
    const navigate = useNavigate();

    // 初期データを保管、Ï入力されたデータを保管
    const [formName, setFormName] = useState("");
    const [formAge, setFormAge] = useState("");
    const [formGender, setFormGender] = useState("");
    const [formHeight, setFormHeight] = useState("");
    const [formWeight, setFormWeight] = useState("");
    const [formPhysical, setFormPhysical] = useState("");

    console.log(data);
    console.log("gen", formGender);
    console.log("age", formAge);
    console.log("phy", formPhysical);
    console.log("wei", formWeight);

    const userData = data?.data[0];
    useEffect(() => {
        if (userData) {
            setFormName(userData.name);
            setFormAge(userData.age);
            setFormGender(userData.gender);
            setFormHeight(userData.height);
            setFormWeight(userData.weight);
            setFormPhysical(userData.physical);
        }
    }, [userData]);

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;

    const userUpdate = () => {
        axios
            .post("/userUpdate", {
                name: userData.name,
                age: formAge,
                gender: formGender,
                height: formHeight,
                weight: formWeight,
                physical: formPhysical,
            })
            .then((res) => {
                console.log(res);
            })
            .catch(() => {
                console.log("axiosError");
            });
        navigate("/");
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">登録情報</div>
                        <div className="card-body">
                            <div className="row mb-3">
                                <label
                                    htmlFor="name"
                                    className="col-md-4 col-form-label text-md-end"
                                >
                                    氏名
                                </label>

                                <div className="col-md-6">
                                    <input
                                        id="name"
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={formName}
                                        onChange={(e) =>
                                            setFormName(e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label
                                    htmlFor="email"
                                    className="col-md-4 col-form-label text-md-end"
                                >
                                    メールアドレス
                                </label>

                                <div className="col-md-6">
                                    <input
                                        id="email"
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={userData.email}
                                        onChange={() => {}}
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label
                                    htmlFor="age"
                                    className="col-md-4 col-form-label text-md-end"
                                >
                                    年齢
                                </label>
                                <SettingAge age={formAge} setAge={setFormAge} />
                            </div>

                            <div className="row mb-3">
                                <label className="col-md-4 col-form-label text-md-end">
                                    性別
                                </label>
                                <SettingGender
                                    gender={formGender}
                                    setGender={setFormGender}
                                />
                            </div>

                            <div className="row mb-3">
                                <label
                                    htmlFor="height"
                                    className="col-md-4 col-form-label text-md-end"
                                >
                                    身長
                                </label>

                                <div className="col-md-6">
                                    <input
                                        id="height"
                                        type="text"
                                        className="form-control"
                                        name="height"
                                        value={formHeight}
                                        onChange={(e) =>
                                            setFormHeight(e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label
                                    htmlFor="weight"
                                    className="col-md-4 col-form-label text-md-end"
                                >
                                    体重
                                </label>

                                <div className="col-md-6">
                                    <input
                                        id="weight"
                                        type="weight"
                                        className="form-control"
                                        name="weight"
                                        value={formWeight}
                                        onChange={(e) =>
                                            setFormWeight(e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label
                                    htmlFor="physical"
                                    className="col-md-4 col-form-label text-md-end"
                                >
                                    活動レベル
                                </label>
                                <SettingPhysical
                                    physical={formPhysical}
                                    setPhysical={setFormPhysical}
                                />
                            </div>

                            <div className="row mb-0">
                                <div className="col-md-6 offset-md-4">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={userUpdate}
                                    >
                                        更新
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Setting;
