<?php

namespace Tests;

use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    // protected function login(Closure $callback) {
    //   $factory = User::factory();

    //   if ($callback) {
    //     $callback($factory);
    //   }

    //   $user = $factory->create();

    //   $this->actingAs($user);

    //   return $user;
    // }
}
