<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class CalorieYearResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'calorie' => $this->row,
            // 'user_id' => $this->user_id,
            // 'food_name' => $this->food_name,
            // 'calorie' => $this->calorie,
            // 'week' => $this->week,
            // 'created_at' => $this->created_at->format("Y-m-d")
        ];
    }
}
