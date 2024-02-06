<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', ['as' => 'proposal.home', 'uses' => 'ProposalController@index']);
Route::any('show', ['as' => 'proposal.show', 'uses' => 'ProposalController@show']);