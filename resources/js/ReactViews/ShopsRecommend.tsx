import React, { useEffect, useState } from "react";
import axios from "axios";
import useSWR from "swr";
// import { useNavigate } from 'react-router-dom';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const ShopsRecommend = () => {
    const { data, error, isLoading } = useSWR("FavoriteStore", fetcher);
    //   var options = {
    //     enableHighAccuracy: true,
    //     maximumAge: 0
    //   };

    //   function success(pos) {
    //     var crd = pos.coords;

    //     console.log('Your current position is:');
    //     console.log(`Latitude : ${crd.latitude}`);//緯度
    //     console.log(`Longitude: ${crd.longitude}`);//軽度
    //     console.log(`More or less ${crd.accuracy} meters.`);
    //   }

    //   function error(err) {
    //     console.warn(`ERROR(${err.code}): ${err.message}`);
    //   }

    //   navigator.geolocation.getCurrentPosition(success, error, options);

    // const navigate=useNavigate()

    const [searchName, setSearchName] = useState("");
    const [searchPrefecture, setSearchPrefecture] = useState("");
    const [searchCity, setSearchCity] = useState("");
    const [searchHistory, setSearchHistory] = useState(() => {
        //ストレージから持ってきたJSONをパースした値を初期値に入れる。何もなかったら空を返す
        let shopsJson = sessionStorage.getItem("shops");
        if (shopsJson === null) {
            return [];
        }
        try {
            let listShops = JSON.parse(shopsJson);
            return listShops;
        } catch (e) {
            console.error(e, shopsJson);
            sessionStorage.removeItem("shops");
            return [];
        }
    });

    //お気に入りデータ取得
    const favoriteStore = data?.data;
    
    useEffect(() => {
        if (searchHistory.length === 0) {
            sessionStorage.clear();
        }
    }, [searchHistory]); //searchHistoryが空ならローカルストレージを全て削除する。
    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;
    
    const onClickSearch = () => {
        if (!searchName && !searchPrefecture && !searchCity) {
            return;
        } else {
            let history = [
                ...searchHistory,
                { searchName, searchPrefecture, searchCity },
            ];
            sessionStorage.setItem("shops", JSON.stringify(history)); //historyの値をJSON形式に直して、shopsに追加
            setSearchHistory(history); //historyの値はローカルストレージに保存されているので、ステイトを更新しても値は消えない

            window.open(
                `https://www.google.co.jp/maps/search/${searchPrefecture}${searchCity}${searchName}/`
            ); //新しいウィンドウで開く
            setSearchName("");
            setSearchPrefecture("");
            setSearchCity("");
        }
    };

    const onClickCancel = () => {
        setSearchName("");
        setSearchPrefecture("");
        setSearchCity("");
    };

    const onClickRemoveHistory = (index: number) => {
        //@ts-ignore
        const storageShops = JSON.parse(sessionStorage.getItem("shops")); //JSONをパースした値を持ってくる
        delete storageShops[index]; //"shops"のindex番目を削除
        sessionStorage.setItem("shops", JSON.stringify(storageShops)); //ローカルストレージにindex番目を消した値を追加する

        const history = [...searchHistory];
        history.splice(index, 1);
        setSearchHistory(history);
    };

    // お気に入りに追加
    const onClickFavorite = (index: number) => {
        axios
            .post("FavoriteAdd", {
                name: searchHistory[index].searchName,
                prefecture: searchHistory[index].searchPrefecture,
                city: searchHistory[index].searchCity,
            })
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log("axiosError");
            });
        onClickRemoveHistory(index);
        location.reload();
    };

    // お気に入り検索
    const onClickFavoriteSearch = (favoriteData: any) => {
        setSearchName(favoriteData.name);
        setSearchPrefecture(favoriteData.prefecture);
        setSearchCity(favoriteData.city);
    };

    // お気に入りに削除
    const onClickFavoriteDelete = (favoId: number) => {
        axios
            .post("FavoriteDelete", {
                id: favoId,
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
            <div className="m-2 mb-5">
                <label htmlFor="search" className="font-monospace h2">
                    お店を検索
                </label>
                <div
                    className="row justify-content-center"
                    style={{ height: "50px" }}
                >
                    <input
                        className="col-4 h-md-100 h-75"
                        type="text"
                        value={searchName}
                        onChange={(e) => setSearchName(e.target.value)}
                        id="search"
                        placeholder="マクドナルド"
                    />
                    <input
                        className="col-4 h-md-100 h-75"
                        type="text"
                        value={searchPrefecture}
                        onChange={(e) => setSearchPrefecture(e.target.value)}
                        id="search"
                        placeholder="東京都"
                    ></input>
                    <input
                        className=" col-4 h-md-100 h-75"
                        type="text"
                        value={searchCity}
                        onChange={(e) => setSearchCity(e.target.value)}
                        id="search"
                        placeholder="新宿"
                    ></input>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-2 mt-md-4">
                    <button
                        className="btn btn-primary mx-2"
                        onClick={onClickSearch}
                    >
                        検索
                    </button>
                    <button
                        className="btn btn-danger mx-2"
                        onClick={onClickCancel}
                    >
                        取消
                    </button>
                </div>
            </div>
            <hr />
            <div className="accordion mt-3" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            <h5 className="font-monospace">検索履歴</h5>
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            {searchHistory.length > 0 ? (
                                searchHistory.map(
                                    (history: any, index: number) => {
                                        return (
                                            <div
                                                key={index}
                                                className="row d-md-flex"
                                                style={{ margin: "10px" }}
                                            >
                                                <div
                                                    className="col-md-9 text-center text-md-start d-flex align-items-center justify-content-center"
                                                    style={{
                                                        backgroundColor:
                                                            "#f5f5f5",
                                                        height: "50px",
                                                    }}
                                                >
                                                    <span className="col-3">
                                                        {history.searchName}
                                                    </span>
                                                    <span className="col-3">
                                                        {
                                                            history.searchPrefecture
                                                        }
                                                    </span>
                                                    <span className="col-3">
                                                        {history.searchCity}
                                                    </span>
                                                </div>
                                                <div className="d-grid gap-2 d-md-flex justify-content-md-end col-md-3">
                                                    <button
                                                        type="button"
                                                        className="btn btn-warning"
                                                        onClick={() => {
                                                            onClickFavorite(
                                                                index
                                                            );
                                                        }}
                                                    >
                                                        お気に入り
                                                    </button>

                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-danger"
                                                        onClick={() => {
                                                            onClickRemoveHistory(
                                                                index
                                                            );
                                                        }}
                                                    >
                                                        削除
                                                    </button>
                                                </div>
                                                <hr className="mt-3" />
                                            </div>
                                        );
                                    }
                                )
                            ) : (
                                <div className="d-flex align-items-center justify-content-center">
                                    <p>履歴がありません</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            <h5 className="font-monospace">お気に入り</h5>
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            {favoriteStore.length > 0 ? (
                                favoriteStore.map((favorite: any) => {
                                    return (
                                        <div
                                            key={favorite.id}
                                            className="row d-md-flex"
                                            style={{ margin: "10px" }}
                                        >
                                            <div
                                                className=" col-md-9 text-center text-md-start d-flex align-items-center justify-content-center"
                                                style={{
                                                    backgroundColor: "#f5f5f5",
                                                    height: "50px",
                                                }}
                                            >
                                                <span className="col-3">
                                                    {favorite.name}
                                                </span>
                                                <span className="col-3">
                                                    {favorite.prefecture}
                                                </span>
                                                <span className="col-3">
                                                    {favorite.city}
                                                </span>
                                            </div>

                                            <div className="d-grid gap-2 d-md-flex justify-content-md-end col-md-3">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-primary"
                                                    onClick={() => {
                                                        onClickFavoriteSearch(
                                                            favorite
                                                        );
                                                    }}
                                                >
                                                    入力
                                                </button>

                                                <button
                                                    type="button"
                                                    className="btn btn-outline-danger"
                                                    onClick={() => {
                                                        onClickFavoriteDelete(
                                                            favorite.id
                                                        );
                                                    }}
                                                >
                                                    削除
                                                </button>
                                            </div>
                                            <hr className="mt-3" />
                                        </div>
                                    );
                                })
                            ) : (
                                <div className="d-flex align-items-center justify-content-center">
                                    <p>お気に入りがありません</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopsRecommend;
