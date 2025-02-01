<?php

namespace App\Enum;

enum RoutesConstants: string
{
  case LOGIN = "/login";
  case REGISTER = "/register";
  case LOGOUT = "/logout";
  case USER = "/user";
  case CREATE_POOL = "/create";
  case UPDATE_POOL = "/update";
  case LIST_POOL = "/get";
  case LIST_USERS_POOL = "/my-pool";
  case VOTE_POOL = "/vote";
}
