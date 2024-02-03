<?php

class ReimplementMapTest extends PHPUnit_Framework_TestCase
{
    private function map($items, $callback)
    {
        /*
         * Your implementation goes here! Use loops, variables, whatever
         * you want, the only rule is you can't use `array_map`!
         */
    }

    public function test_double_each_number()
    {
        $doubled = $this->map([1, 2, 3, 4, 5], function ($number) {
            return $number * 2;
        });

        $this->assertEquals([2, 4, 6, 8, 10], $doubled);
    }

    public function test_get_user_emails()
    {
        $users = [
            ['name' => 'John', 'email' => 'john@example.com'],
            ['name' => 'Jane', 'email' => 'jane@example.com'],
            ['name' => 'Dana', 'email' => 'dana@example.com'],
        ];

        $emails = $this->map($users, function ($user) {
            return $user['email'];
        });

        $this->assertEquals([
            'john@example.com',
            'jane@example.com',
            'dana@example.com',
        ], $emails);
    }

    public function test_convert_dates_to_day_of_week()
    {
        $dates = [
            new DateTime('2015-04-15'),
            new DateTime('2015-07-20'),
            new DateTime('2015-09-05'),
        ];

        $days = $this->map($dates, function ($date) {
            return $date->format('l');
        });

        $this->assertEquals([
            'Wednesday',
            'Monday',
            'Saturday',
        ], $days);
    }
}
