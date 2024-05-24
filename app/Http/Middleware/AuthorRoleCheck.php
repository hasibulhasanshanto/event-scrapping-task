<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Utils\GlobalConstant;
use Symfony\Component\HttpFoundation\Response;

class AuthorRoleCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $author = auth()->user()->role == GlobalConstant::USER_ROLE_AUTHOR;

        if (!auth()->user() || !$author) {
            return redirect()->route('dashboard');
        }

        return $next($request);
    }
}
