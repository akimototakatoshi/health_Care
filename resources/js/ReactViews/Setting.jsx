import React from "react";

const Setting = () => {
    return (
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                    <div class="card-header">情報</div>
                        <div class="card-body">
                            <form method="POST" action="">
                                <div class="row mb-3">
                                    <label
                                        for="name"
                                        class="col-md-4 col-form-label text-md-end"
                                    >
                                        氏名
                                    </label>

                                    <div class="col-md-6">
                                        <input
                                            id="name"
                                            type="text"
                                            class="form-control"
                                            name="name"
                                        />
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label
                                        for="email"
                                        class="col-md-4 col-form-label text-md-end"
                                    >
                                        email
                                    </label>

                                    <div class="col-md-6">
                                        <input
                                            id="email"
                                            type="email"
                                            class="form-control"
                                            name="email"
                                        />
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label
                                        for="age"
                                        class="col-md-4 col-form-label text-md-end"
                                    >
                                        age
                                    </label>

                                    <div class="col-md-6">
                                        <select name="age" class="form-select">
                                            <option value="">
                                                選択してください
                                            </option>
                                            <option
                                                value="1"
                                                class="form-control"
                                            >
                                                ~19歳
                                            </option>
                                            <option
                                                value="2"
                                                class="form-control"
                                            >
                                                20歳~29歳
                                            </option>
                                            <option
                                                value="3"
                                                class="form-control"
                                            >
                                                30歳~39歳
                                            </option>
                                            <option
                                                value="4"
                                                class="form-control"
                                            >
                                                40歳~49歳
                                            </option>
                                            <option
                                                value="5"
                                                class="form-control"
                                            >
                                                50歳~59歳
                                            </option>
                                            <option
                                                value="6"
                                                class="form-control"
                                            >
                                                60歳~
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label class="col-md-4 col-form-label text-md-end">
                                        gender
                                    </label>

                                    <div class="col-md-6">
                                        <input
                                            type="radio"
                                            id="male"
                                            name="gender"
                                            value="0"
                                            class="form-check-input"
                                        />
                                        <label
                                            class="form-check-label"
                                            for="male"
                                        >
                                            男性
                                        </label>
                                        <input
                                            type="radio"
                                            id="female"
                                            name="gender"
                                            value="1"
                                            class="form-check-input"
                                        />
                                        <label
                                            class="form-check-label"
                                            for="female"
                                        >
                                            女性
                                        </label>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label
                                        for="height"
                                        class="col-md-4 col-form-label text-md-end"
                                    >
                                        height
                                    </label>

                                    <div class="col-md-6">
                                        <input
                                            id="height"
                                            type="text"
                                            class="form-control"
                                            name="height"
                                        />
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label
                                        for="weight"
                                        class="col-md-4 col-form-label text-md-end"
                                    >
                                        Weight
                                    </label>

                                    <div class="col-md-6">
                                        <input
                                            id="weight"
                                            type="weight"
                                            class="form-control"
                                            name="weight"
                                        />
                                    </div>
                                </div>

                                <div class="row mb-0">
                                    <div class="col-md-6 offset-md-4">
                                        <button
                                            type="submit"
                                            class="btn btn-primary"
                                        >
                                            lll
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
