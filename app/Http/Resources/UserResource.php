<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
      /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "id"            => $this->id,
            "avatar"        => $this->avatar,
            "name"          => $this->name,
            "email"         => $this->email,
            "role"          => $this->role,
            "status"        => $this->status,
            "last_login_at" => Carbon::parse($this->last_login_at)->format('d-m-Y h:i A'),
        ];
    }
}
