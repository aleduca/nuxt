<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

class SearchController extends Controller
{
  public function search()
  {
    $search = request('s');

    $results = [
      'users' => User::search($search)->get(),
      'posts' => Post::search($search)->get(),
    ];

    return $results;
  }
}
