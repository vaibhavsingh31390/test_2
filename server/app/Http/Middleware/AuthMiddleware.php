<?php

namespace App\Http\Middleware;

use App\Utils\ErrorClass;
use Closure;
use Exception;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthMiddleware
{

    public function handle(Request $request, Closure $next): Response
    {
        try {
            if (!$request->hasHeader('Authorization') || strpos($request->header('Authorization'), 'Bearer ') !== 0) {
                throw new ErrorClass('Authorization token not found', 400);
            }
            $user = JWTAuth::parseToken()->authenticate();
        } catch (ErrorClass $e) {
            return $e->sendJsonResponse();
        }
        return $next($request);
    }
}
