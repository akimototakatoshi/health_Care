<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class EatedSelectAddResource extends JsonResource
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
            'food_name' => $this->food_name,
            'calorie' => $this->calorie,
            'week' => $this->week
        ];
    }
}
