<?php

namespace App\Enum;

enum RoutesConstants: string
{
  case LOGIN = "/login";
  case REGISTER = "/register";
  case LOGOUT = "/logout";
  case USER = "/get-user";
  case CREATE_POOL = "/create";
  case UPDATE_POOL = "/update";
  case LIST_POOL = "/get-pool";
  case LIST_USERS_POOL = "/my-pool";
  case VOTE_POOL = "/vote";
  case FETCH_CONFIG = "/get-config";
  case ADD_CONFIG = "/create-config";
  case UPDATE_CONFIG = "/update-config";
}
