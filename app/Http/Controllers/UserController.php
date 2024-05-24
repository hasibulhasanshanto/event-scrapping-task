<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Services\UserService;
use App\Http\Resources\UserResource;

class UserController extends Controller
{
    /**
     * Construct property promotion
     */
    public function __construct(protected UserService $userService)
    {
    }

    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        $users = $this->userService->paginateData();

        return Inertia::render('Users/Index', [
            'users' => UserResource::collection($users) ?? [],
            'queryParams' => request()->query() ?: null,
        ]);
    }
}
