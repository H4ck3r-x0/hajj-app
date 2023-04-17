<?php

use App\Http\Controllers\CampaignController;
use App\Http\Controllers\ProfileController;
use App\Models\Campaign;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect('login');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth'])->name('dashboard');

Route::get('showDetials/{campaign}', [CampaignController::class, 'show'])->name('showDetails');

Route::post('import/campaigns', [CampaignController::class, 'store'])
    ->name('compaigns.store');

Route::get('compaigns', [CampaignController::class, 'index'])
    ->name('compaigns.index');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
