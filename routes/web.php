<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HealthContentController;
use App\Http\Controllers\CalorieIntakeController;

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

Route::get('/home', function () {
    return view('welcome');
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
    Route::get('/calorieIntake', 'index')->name('calorieIntake'); // 名前つきルート 
});
