<?php

class UsingReduceTest extends PHPUnit_Framework_TestCase
{
    private function reduce($items, $callback, $initial)
    {
        /*
         * Copy your implementation from Exercise 3 here!
         */
    }

    public function test_calculate_the_product_of_a_list_of_numbers()
    {
        $numbers = [1, 2, 3, 4, 5, 6];

        /*
         * Add your solution here! Remember, no loops allowed!
         *
         * $product = $this->reduce($numbers, ...)
         */

        $this->assertEquals(720, $product);
    }

    public function test_create_an_associative_array_of_names_and_emails()
    {
        $users = [
            ['name' => 'John', 'email' => 'john@example.com'],
            ['name' => 'Jane', 'email' => 'jane@example.com'],
            ['name' => 'Dana', 'email' => 'dana@example.com'],
        ];

        /*
         * Add your solution here! Remember, no loops allowed!
         *
         * $emailLookup = $this->reduce($users, ...)
         */

        $this->assertEquals([
            'John' => 'john@example.com',
            'Jane' => 'jane@example.com',
            'Dana' => 'dana@example.com',
        ], $emailLookup);
    }

    public function test_count_employees_in_each_department()
    {
        $employees = [
            ['name' => 'John', 'department' => 'Sales'],
            ['name' => 'Jane', 'department' => 'Marketing'],
            ['name' => 'Dave', 'department' => 'Marketing'],
            ['name' => 'Dana', 'department' => 'Engineering'],
            ['name' => 'Beth', 'department' => 'Marketing'],
            ['name' => 'Kyle', 'department' => 'Engineering'],
        ];

        /*
         * Add your solution here! Remember, no loops allowed!
         *
         * $departmentCounts = $this->reduce($employees, ...)
         */

        $this->assertEquals([
            'Sales' => 1,
            'Marketing' => 3,
            'Engineering' => 2,
        ], $departmentCounts);
    }
}
