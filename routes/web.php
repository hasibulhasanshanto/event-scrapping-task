<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CrawlController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware('auth')->group(function () {
    # Dashboard controller routes
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard')->middleware(['verified']);

    # Profile controller routes
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    # User controller routes
    Route::get('/users', UserController::class)->name('users.index')->middleware(['author']);

    # Event controller routes
    // Route::post('/update-enabled/{id}', [EventController::class, 'updateEnabled'])->name('events.update-enabled');
    // Route::resource('/events', EventController::class);
    Route::controller(EventController::class)->group(function () {
        Route::post('/update-enabled/{id}', 'updateEnabled')->name('events.update-enabled')->middleware('author');
        Route::get('/events', 'index')->name('events.index');
        Route::get('/events/create', 'create')->name('events.create')->middleware('author');
        Route::post('/events', 'store')->name('events.store')->middleware('author');
        Route::get('/events/{event}/edit', 'edit')->name('events.edit')->middleware('author');
        Route::put('/events/{event}', 'update')->name('events.update')->middleware('author');
        Route::delete('/events/{event}', 'destroy')->name('events.destroy')->middleware('author');
    });

    Route::get('/check-validate/{eventId}', [CrawlController::class, 'checkSelector'])->name('check.validator')->middleware('author');
    Route::get('/observe-batch/{batchId}', [CrawlController::class, 'observeBatch'])->middleware('author');
});

require __DIR__.'/auth.php';
