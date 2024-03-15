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
      'users' => User::where('name', 'like', "%$search%")->get(),
      'posts' => Post::where('title', 'like', "%$search%")->get(),
    ];

    return $results;
  }
}
