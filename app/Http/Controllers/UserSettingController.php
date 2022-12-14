<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Resources\UserSettingResource;
use Illuminate\Support\Facades\Auth;


class UserSettingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function edit()
    {
        // ログインしているユーザー情報の取得
        return UserSettingResource::collection(User::where('id', '=', Auth::id())->get());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // 編集内容を更新する
        $user = User::find(Auth::id());
        $user->name = $request->name;
        $user->age = $request->age;
        $user->gender = $request->gender;
        $user->height = $request->height;
        $user->weight = $request->weight;
        $user->physical = $request->physical;
        $user->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
