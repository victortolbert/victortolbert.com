<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     $items = collect(['one', 'two', 'three', 'four', 'five']);
//     ray()->clearScreen();
//     ray($items->join(', ', ' and '));

//     return view('index');
// });

Route::resource('post', App\Http\Controllers\PostController::class)->only('index', 'store');

Route::get('/{any?}', function () {
    return view('index');
})->where('any', '^(?!api).*$');
