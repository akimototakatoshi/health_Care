import React from "react";
import useSWR from "swr";
import SettingGender from './components/SetteingGender'
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Setting = () => {
    const { data, error, isLoading } = useSWR("userSetting", fetcher);

    const [gender, setGender] = useState('');

    console.log(data);
    console.log('uuuu', gender)

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;

    const userData = data.data[0];

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">登録情報</div>
                        <div className="card-body">
                            <form method="POST" action="">
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
                                            value={userData.name}
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

                                    <div className="col-md-6">
                                        <select
                                            name="age"
                                            className="form-select"
                                        >
                                            <option value="">
                                                選択してください
                                            </option>
                                            <option
                                                value="15"
                                                className="form-control"
                                            >
                                                10歳~19歳
                                            </option>
                                            <option
                                                value="25"
                                                className="form-control"
                                            >
                                                20歳~29歳
                                            </option>
                                            <option
                                                value="35"
                                                className="form-control"
                                            >
                                                30歳~39歳
                                            </option>
                                            <option
                                                value="45"
                                                className="form-control"
                                            >
                                                40歳~49歳
                                            </option>
                                            <option
                                                value="55"
                                                className="form-control"
                                            >
                                                50歳~59歳
                                            </option>
                                            <option
                                                value="65"
                                                className="form-control"
                                            >
                                                60歳~70歳
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <label className="col-md-4 col-form-label text-md-end">
                                        性別
                                    </label>

                                    <SettingGender value={userData.gender} setGender={setGender}/>
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

                                    <div className="col-md-6">
                                        <select
                                            name="physical"
                                            className="form-select"
                                        >
                                            <option value="">
                                                選択してください
                                            </option>
                                            <option
                                                value="1.5"
                                                className="form-control"
                                            >
                                                生活の大部分が座位で、静的な活動が中心
                                            </option>
                                            <option
                                                value="1.75"
                                                className="form-control"
                                            >
                                                座位中心の仕事だが、作業・接客等、あるいは通勤・買物・家事など軽い運動を含む
                                            </option>
                                            <option
                                                value="2"
                                                className="form-control"
                                            >
                                                移動や立位の多い仕事への従事者。あるいは、スポーツなど余暇における活発な運動習慣をもっている
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row mb-0">
                                    <div className="col-md-6 offset-md-4">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            更新
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Setting;
