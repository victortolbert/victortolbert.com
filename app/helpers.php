<?php

use Illuminate\Http\Client\ConnectionException;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\HtmlString;

function vite_assets(): HtmlString
{

    $devServerIsRunning = false;
    if (app()->environment('local')) {
        try {
            Http::get("http://localhost:3000");
            $devServerIsRunning = true;
        }
        catch (ConnectionException $e) {
        }
    }

    if ($devServerIsRunning) {
        return new HtmlString(<<<HTML
            <script type="module" src="http://localhost:3000/@vite/client"></script>
            <script type="module" src="http://localhost:3000/resources/client/main.ts"></script>
        HTML);
    }

    $manifest = json_decode(file_get_contents(
        public_path('build/manifest.json')
    ), true);

    $script = $manifest['resources/client/main.ts']['file'];
    $style = $manifest['resources/client/main.ts']['css'][0];

    return new HtmlString(<<<HTML
        <script type="module" src="/build/$script"></script>
        <link rel="stylesheet" href="/build/$style">
    HTML);
}
