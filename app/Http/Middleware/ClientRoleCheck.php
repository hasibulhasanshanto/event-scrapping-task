<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Utils\GlobalConstant;
use Symfony\Component\HttpFoundation\Response;

class ClientRoleCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $client = auth()->user()->role == GlobalConstant::USER_ROLE_CLIENT;
        $author = auth()->user()->role == GlobalConstant::USER_ROLE_AUTHOR;

        if (auth()->user() || $author ||  $client) {
            return $next($request);
        } else{
            return redirect()->route('dashboard');
        }
    }
}
