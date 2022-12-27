<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HealthContentController;
use App\Http\Controllers\CalorieIntakeController;
use App\Http\Controllers\UserSettingController;
use App\Http\Controllers\FavoriteStoreController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home');
});

Auth::routes();

Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

// Route::prefix('contents')->middleware(['auth']) // 認証
// ->name('contents.') // ルート名
// ->controller(HealthContentController::class)
// ->group(function(){ // グループ化
//     Route::get('/calorie', 'index')->name('calorie'); // 名前つきルート 
// });


Route::controller(CalorieIntakeController::class)->middleware(['api'])
->group(function(){ // グループ化
    Route::get('/calorieIntake', 'index')->name('calorieIntake'); // 名前つきルート マイページ
    Route::get('/calorieWeek', 'weekGraph')->name('calorieWeek'); // 曜日毎のグラフ
    Route::get('/calorieMonth', 'monthGraph')->name('calorieMonth'); // 月毎のグラフ
    Route::get('/calorieYear', 'yearGraph')->name('calorieYear'); // 一年分のグラフ
    Route::post('/calorieSearch', 'collation')->name('calorieSearch'); // カロリー検索
});

Route::controller(UserSettingController::class)->middleware(['api'])
->group(function(){ 
    Route::get('/userSetting', 'edit')->name('userSetting'); // ログイン中のユーザー情報取得
    Route::post('/userUpdate', 'update')->name('userUpdate');
});

Route::controller(FavoriteStoreController::class)->middleware(['api'])
->group(function(){ 
    Route::get('/FavoriteStore', 'index')->name('FavoriteStore'); 
    Route::post('/FavoriteAdd', 'store')->name('FavoriteAdd');
    Route::post('/FavoriteDelete', 'destroy')->name('FavoriteDelete');
});
