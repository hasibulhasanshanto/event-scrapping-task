<?php

namespace App\Services;

use Exception;
use App\Models\User;
use Illuminate\Support\Facades\Log;

class UserService
{

    /**
     * Construct property promotion
     */
    public function __construct(protected User $model)
    {
    }

    public function paginateData()
    {
        try {
            $query = $this->model::query();
            if (request("search")) {
                $query->where("name", "like", "%" . request("search") . "%");
            }
            return $query->orderByDesc('id')->paginate(10)->onEachSide(1);
        } catch (Exception $e) {
            Log::error('Something went wrong'. $e->getMessage());
        }
    }
}
