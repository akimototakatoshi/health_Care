import React, { useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';

const ShopsRecommend = () => {
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
    const [searchHistory, setSearchHistory] = useState(() => { //ストレージから持ってきたJSONをパースした値を初期値に入れる。何もなかったら空を返す
        let json:any = localStorage.getItem("shops");
        let listShops:any = JSON.parse(json);
        return listShops || "";
    });

    useEffect(() => {
        if (searchHistory.length === 0) {
            localStorage.clear();
        }
    }, [searchHistory]);//searchHistoryが空ならローカルストレージを全て削除する。

    const onClickSearch = () => {
        if (!searchName && !searchPrefecture && !searchCity) {
            return;
        } else {
            let history = [
                ...searchHistory,
                { searchName, searchPrefecture, searchCity },
            ];
            localStorage.setItem("shops", JSON.stringify(history));//historyの値をJSON形式に直して、shopsに追加
            setSearchHistory(history);//historyの値はローカルストレージに保存されているので、ステイトを更新しても値は消えない

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

    const onClickRemoveHistory = (index:number) => {
        //@ts-ignore
        const storageShops = JSON.parse(localStorage.getItem("shops"));//JSONをパースした値を持ってくる
        delete storageShops[index];//"shops"のindex番目を削除
        localStorage.setItem("shops", JSON.stringify(storageShops));//ローカルストレージにindex番目を消した値を追加する

        const history = [...searchHistory];
        history.splice(index, 1);
        setSearchHistory(history);
    };

    return (
        <div className="container">
            <h3 className="font-monospace">お店を検索</h3>
            <label htmlFor="search">店名を入力</label>
            <div className="row">
                <input
                    className=" col-4"
                    type="text"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    id="search"
                    placeholder="マクドナルド"
                />
                <input
                    className=" col-4"
                    type="text"
                    value={searchPrefecture}
                    onChange={(e) => setSearchPrefecture(e.target.value)}
                    id="search"
                    placeholder="東京都"
                ></input>
                <input
                    className=" col-4"
                    type="text"
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                    id="search"
                    placeholder="新宿"
                ></input>
            </div>
            <button className="btn btn-primary" onClick={onClickSearch}>
                検索
            </button>
            <button className="btn btn-danger" onClick={onClickCancel}>
                取消
            </button>
            <hr />
            <div className="accordion" id="accordionExample">
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
                            {searchHistory.length > 0 &&
                                searchHistory.map((history:any, index:number) => {
                                    return (
                                        <div
                                            key={history.searchName}
                                            className="row"
                                            style={{ margin: "10px" }}
                                        >
                                            <span className="col-2">
                                                {history.searchName}
                                            </span>
                                            <span className="col-2">
                                                {history.searchPrefecture}
                                            </span>
                                            <span className="col-2">
                                                {history.searchCity}
                                            </span>
                                            <button
                                                type="button"
                                                className="btn btn-warning col-3"
                                            >
                                                お気に入り
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-danger col-3"
                                                onClick={() => {
                                                    onClickRemoveHistory(index);
                                                }}
                                            >
                                                削除
                                            </button>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopsRecommend;
