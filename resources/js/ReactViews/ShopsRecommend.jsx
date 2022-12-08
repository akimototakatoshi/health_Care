import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

const ShopsRecommend = () => {
  var options = {
    enableHighAccuracy: true,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);//緯度
    console.log(`Longitude: ${crd.longitude}`);//軽度
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);

  // const navigate=useNavigate()
  const [search,setSearch]=useState("");
  const onClickSearch=()=>{
    if(!search){
      alert("調べたいお店を入力してください")
    }else{
      window.location.href=`https://www.google.co.jp/maps/search/${search}`

    }
  }
  return (
    <div>
      おすすめのお店
      {/* <a href={`https://www.google.co.jp/maps/search/${search}`}>a</a> */}
      <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
      <button onClick={onClickSearch}>検索</button>
    </div>
  )
}

export default ShopsRecommend
