<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PortfolioController;

Route::get('/', [PortfolioController::class, 'index'])->name('home');
Route::get('/gallery', [PortfolioController::class, 'gallery'])->name('gallery');
Route::get('/projects', [PortfolioController::class, 'projects'])->name('projects');
