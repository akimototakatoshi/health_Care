<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FavoriteStore;
use App\Http\Resources\FavoriteStoreResource;
use Illuminate\Support\Facades\Auth;

class FavoriteStoreController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //お気に入り店舗データ取得
        return FavoriteStoreResource::collection(FavoriteStore::where('user_id', '=', Auth::id())->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //　DBに店舗追加
        FavoriteStore::create([
            'user_id' => Auth::id(),
            'name' => $request->name,
            'prefecture' => $request->prefecture,
            'city' => $request->city,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        // DBのdata削除
        $FavotiteDelete = FavoriteStore::where('id', $request->id);
        
        $FavotiteDelete->delete();
    }
}
