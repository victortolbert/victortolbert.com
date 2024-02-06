<?php

Route::group(['prefix' => 'proposal-viewer'], function() {
    Route::get('/', ['as' => 'proposal-viewer.home', 'uses' => 'ProposalViewerController@index']);
    Route::any('show', ['as' => 'proposal-viewer.show', 'uses' => 'ProposalViewerController@show']);
});
