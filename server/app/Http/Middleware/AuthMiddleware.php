<?php

namespace App\Http\Middleware;

use App\Utils\ErrorClass;
use Closure;
use Exception;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        try {
            if (!$request->hasHeader('Authorization') || strpos($request->header('Authorization'), 'Bearer ') !== 0) {
                throw new ErrorClass('Authorization token not found', 400);
            }

            $user = JWTAuth::parseToken()->authenticate();
            $request->session()->put('user', $user);
            $request->session()->save();
        } catch (ErrorClass $e) {
            return $e->sendJsonResponse();
        } catch (JWTException $e) {
            return (new ErrorClass('Unauthorized', 401))->sendJsonResponse();
        } catch (Exception $e) {
            return (new ErrorClass($e->getMessage(), 500))->sendJsonResponse();
        }

        return $next($request);
    }
}
