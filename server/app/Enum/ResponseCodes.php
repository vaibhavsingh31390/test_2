<?php

namespace App\Enum;

enum ResponseCodes: int
{
  case OK = 200;
  case CREATED = 201;
  case NO_CONTENT = 204;
  case BAD_REQUEST = 400;
  case UNAUTHORIZED = 401;
  case FORBIDDEN = 403;
  case NOT_FOUND = 404;
  case INTERNAL_SERVER_ERROR = 500;
  case BAD_GATEWAY = 502;
  case SERVICE_UNAVAILABLE = 503;

  public function getMessage(): string
  {
    return match ($this) {
      self::OK => "OK",
      self::CREATED => "Created",
      self::NO_CONTENT => "No Content",
      self::BAD_REQUEST => "Bad Request",
      self::UNAUTHORIZED => "Unauthorized",
      self::FORBIDDEN => "Forbidden",
      self::NOT_FOUND => "Not Found",
      self::INTERNAL_SERVER_ERROR => "Internal Server Error",
      self::BAD_GATEWAY => "Bad Gateway",
      self::SERVICE_UNAVAILABLE => "Service Unavailable",
    };
  }
}
