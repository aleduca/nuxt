<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
  /**
   * Define the model's default state.
   *
   * @return array<string, mixed>
   */
  public function definition(): array
  {
    $title =  $this->faker->sentence(3);
    return [
      'title' => $title,
      'slug' => Str::slug($title),
      'user_id' => User::pluck('id')->random(),
      'content' => $this->faker->paragraph(),
      'thumb' => 'https://images.pexels.com/photos/2444403/pexels-photo-2444403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    ];
  }
}
