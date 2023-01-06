import React, { useState } from "react";
import { Data } from "../types/user";

const Exercise = ({ userData }:{userData:Data}) => {
    const[reduceCalorie,setReduceCalorie] = useState<string>("100")
    const userWeight = userData.data[0].weight;

    //    消費カロリー（kcal）＝METs×体重（kg）×運動時間（h）×1.05
    //    console.log(6.8 *userdata.weight* 4 *1.05)//時間に対する消費カロリー
    //    console.log(Math.round((100/(6.8*userdata.weight*1.05))*60))//カロリーに対する必要運動時間
    const aveWeight = Math.floor((userData.data[0].height / 100) ** 2 * 22)
    const lowSycling = Math.round((Number(reduceCalorie)/ (6.8 * userWeight * 1.05)) * 60); //16.1-19.2km/時、レジャー、ゆっくり、楽な労力
    const middleSycling = Math.round((Number(reduceCalorie)/ (8.0 * userWeight * 1.05)) * 60); //19.3-22.4km/時、レジャー、ほどほどの労力
    const highSycling = Math.round((Number(reduceCalorie)/ (10.0 * userWeight * 1.05)) * 60); //22.5-25.6km/時、レース、レジャー、速い、きつい労力

    const lowRunning = Math.round((Number(reduceCalorie)/ (6 * userWeight * 1.05)) * 60); //107m／分程度：6METs
    const middleRunning = Math.round((Number(reduceCalorie)/ (11.5 * userWeight * 1.05)) * 60); //201m／分程度：11.5METs
    const highRunning = Math.round((Number(reduceCalorie)/ (16 * userWeight * 1.05)) * 60); //295m／分程度：16METs

    const normalWalking = Math.round((Number(reduceCalorie)/ (3 * userWeight * 1.05)) * 60); //70m／分程度：3METs 	普通に歩く：70m／分程度
    const fastWalking = Math.round((Number(reduceCalorie)/ (3.5 * userWeight * 1.05)) * 60); //80m／分程度：3.5METs 早歩き：80～90m／分程度

    return (
        <div>
            <h3>必要運動量</h3>
            <p>あなたの現在の体重は{userWeight}kgです。標準体重は{aveWeight}kgです。</p>
            <input type="number" value={reduceCalorie} onChange={(e)=>setReduceCalorie(e.target.value)} placeholder="100"/>
            <p>{reduceCalorie}kcalを消費するのに必要な運動量</p>
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
                            ウォーキング
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <ul>
                                <li>
                                    普通に歩く（70m/分程度）{normalWalking}分
                                </li>
                                <li>早歩き（80～90m/分程度）{fastWalking}分</li>
                            </ul>
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
                            ランニング
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <ul>
                                <li>低強度（100m/分程度）{lowRunning}分</li>
                                <li>中強度（200m/分程度）{middleRunning}分</li>
                                <li>高強度（300m/分程度）{highRunning}分</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            サイクリング
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <ul>
                                <li>
                                    低強度（16.1-19.2km/時、レジャー、ゆっくり、楽な労力）
                                    {lowSycling}分
                                </li>
                                <li>
                                    中強度（19.3-22.4km/時、レジャー、ほどほどの労力）
                                    {middleSycling}分
                                </li>
                                <li>
                                    高強度（22.5-25.6km/時、レース、レジャー、速い、きつい労力）
                                    {highSycling}分
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exercise;
