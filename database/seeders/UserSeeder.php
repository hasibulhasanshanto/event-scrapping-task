<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
        /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = [
            [
                'name'              => fake()->name(),
                'email'             => fake()->unique()->safeEmail(),
                'role'              => 'author',
                'password'          => Hash::make('12345678'),
                'last_login_at'     => now(),
                'email_verified_at' => now(),
                'remember_token'    => Str::random(10),
            ],
            [
                'name'              => fake()->name(),
                'email'             => fake()->unique()->safeEmail(),
                'role'              => 'author',
                'password'          => Hash::make('12345678'),
                'last_login_at'     => now(),
                'email_verified_at' => now(),
                'remember_token'    => Str::random(10),
            ],
            [
                'name'              => fake()->name(),
                'email'             => fake()->unique()->safeEmail(),
                'role'              => 'client',
                'password'          => Hash::make('12345678'),
                'last_login_at'     => now(),
                'email_verified_at' => now(),
                'remember_token'    => Str::random(10),
            ],
            [
                'name'              => fake()->name(),
                'email'             => fake()->unique()->safeEmail(),
                'role'              => 'client',
                'password'          => Hash::make('12345678'),
                'last_login_at'     => now(),
                'email_verified_at' => now(),
                'remember_token'    => Str::random(10),
            ],
            [
                'name'              => fake()->name(),
                'email'             => fake()->unique()->safeEmail(),
                'role'              => 'client',
                'password'          => Hash::make('12345678'),
                'last_login_at'     => now(),
                'email_verified_at' => now(),
                'remember_token'    => Str::random(10),
            ],
        ];

        User::insert($users);
    }
}
