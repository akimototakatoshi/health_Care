import React from "react";
import useSWR from "swr";
import axios from "axios";
import { Link } from "react-router-dom";

const EatedHistory = () => {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR("eatedHistory", fetcher);

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;
    const EatedData = data.data;

    // 登録したもの削除
    const onClickFoodDelete = (foodId: number) => {
        axios
            .post("eatedDelete", {
                id: foodId,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log("axiosError");
            });
        location.reload();
    };

    return (
        <div className="container">
            <table className="table table-striped text-center">
                <thead>
                    <tr>
                        <th scope="col">料理名</th>
                        <th scope="col">カロリー</th>
                        <th scope="col">登録時間</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {EatedData.map((e: any) => {
                        return (
                            <tr key={e.id}>
                                <td>
                                    <p className="mb-0 mt-2">{e.name}</p>
                                </td>

                                <td>
                                    <p className="mb-0 mt-2">
                                        {e.calorie} kcal
                                    </p>
                                </td>
                                <td>
                                    <p className="mb-0 mt-2">{e.created_at}</p>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger"
                                        onClick={() => {
                                            onClickFoodDelete(e.id);
                                        }}
                                    >
                                        削除
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {EatedData.length === 0 && (
                <div className="text-center mt-5">
                    <p>本日登録した料理はありません</p>
                </div>
            )}
            <div>
                <Link to="/eated-list">
                    <button type="button" className="btn btn-info">
                        戻る
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default EatedHistory;