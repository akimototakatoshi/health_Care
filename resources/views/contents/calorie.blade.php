<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TodoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // 欲しいデータを抽出
        return [
            'id' => $this->id,
            'title' => $this->title,
            'updated_at' => $this->updated_at->format('Y/m/d')
        ];
    }
}

?>
