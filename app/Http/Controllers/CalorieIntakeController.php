<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CalorieIntake;
use App\Http\Resources\CalorieIntakeResource;
use App\Http\Resources\CalorieWeekResource;
use App\Http\Resources\CalorieMonthResource;
use App\Http\Resources\CalorieYearResource;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Carbon\Carbon;

class CalorieIntakeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // 今日の日付取得
        $today = Carbon::today();
        
        // マイページのカロリーデータ取得 
        return CalorieIntakeResource::collection(CalorieIntake::whereDate('created_at', $today)
        ->where('user_id', '=', Auth::id())->get());
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function weekGraph()
    {
        //今週の月曜日の日付取得
        $monday = Carbon::today()->startOfWeek();
        //月曜日から7日後の日付取得
        $startWeek = Carbon::today()->startOfWeek();
        $addWeek = $startWeek->addDays(6);
        
        // 週毎のカロリーデータ取得 
        return CalorieWeekResource::collection(CalorieIntake::whereDate('created_at', '>=', $monday)
        ->whereDate('created_at', '<=', $addWeek)
        ->where('user_id', '=', Auth::id())->get());
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function monthGraph()
    {
        // 月初の日付
        $month_from = Carbon::today();
		$month_from->startOfMonth();

        // 月末の日付
		$month_to = Carbon::today();
		$month_to->endOfMonth();


        // 月毎のカロリーデータ取得 
        return CalorieMonthResource::collection(CalorieIntake::whereBetween('created_at', [$month_from, $month_to])
        ->where('user_id', '=', Auth::id())->get());
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function yearGraph()
    {
        // 年明け
        $year_from = Carbon::today();
		$year_from->startOfYear();

        // 年末
		$year_to = Carbon::today();
		$year_to->endOfYear();

        // 一年のカロリーデータ取得 
        return CalorieYearResource::collection(CalorieIntake::whereBetween('created_at', [$year_from, $year_to])
        ->where('user_id', '=', Auth::id())->get());

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
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
