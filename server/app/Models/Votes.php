<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Votes extends Model
{
  use HasFactory;

  protected $fillable = [
    'user_id',
    'pool_id',
    'option',
    'attempts_left',
  ];

  public function user()
  {
    return $this->belongsTo(User::class);
  }
  public function votes()
  {
    return $this->belongsTo(Pools::class);
  }
}
