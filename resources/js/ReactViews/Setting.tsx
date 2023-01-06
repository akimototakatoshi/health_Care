import React, { useEffect } from "react";
import useSWR, { useSWRConfig } from "swr";
import SettingGender from "./components/SetteingGender";
import SettingAge from "./components/SettingAge";
import SettingPhysical from "./components/SettingPhysical";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Data, userData } from "./types/user";
import PrimaryButton from "./components/atoms/button/PrimaryButton";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Setting = () => {
    const {
        data,
        error,
        isLoading,
    }: { data: Data; error: Error | undefined; isLoading: any } = useSWR(
        "userSetting",
        fetcher
    );
    const navigate = useNavigate();

    // 初期データを保管、入力されたデータを保管
    const [formName, setFormName] = useState<string>("");
    const [formAge, setFormAge] = useState<number>(0);
    const [formGender, setFormGender] = useState<number>(0);
    const [formHeight, setFormHeight] = useState<number>(0);
    const [formWeight, setFormWeight] = useState<number>(0);
    const [formPhysical, setFormPhysical] = useState<number>(0);

    // console.log(data);
    // console.log("gen", formGender);
    // console.log("age", formAge);
    // console.log("phy", formPhysical);
    // console.log("wei", formWeight);

    const userData: userData = data?.data[0];
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
                                        onChange={(
                                            e: React.ChangeEvent<HTMLInputElement>
                                        ) => setFormName(e.target.value)}
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
                                        onChange={() => {
                                            return;
                                        }}
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
                                            setFormHeight(
                                                Number(e.target.value)
                                            )
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
                                            setFormWeight(
                                                Number(e.target.value)
                                            )
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
                                    <PrimaryButton onClick={userUpdate}>更新</PrimaryButton>
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
