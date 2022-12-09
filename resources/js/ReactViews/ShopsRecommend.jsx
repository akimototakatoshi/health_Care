import React, { useState } from 'react'
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
  const [search,setSearch]=useState("");
  const onClickSearch=()=>{
    if(!search){
    return
    }else{
      window.open(`https://www.google.co.jp/maps/search/${search}`)//新しいウィンドウで開く
setSearch("")
    }
  }
  const onClickCancel =()=>{
    setSearch("")
  }
  return (
    <div className='container'>
      <h2>お店を検索</h2>
      <label htmlFor="search">店名を入力</label>
      <input class="form-control mb-3" type="text" value={search} onChange={(e)=>setSearch(e.target.value)} id="search" placeholder='マクドナルド'/>
      <button className='btn btn-primary' onClick={onClickSearch}>検索</button>
      <button className='btn btn-danger' onClick={onClickCancel}>取消</button>
    </div>
  )
}

export default ShopsRecommend
