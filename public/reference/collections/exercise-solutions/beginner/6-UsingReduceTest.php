<?php

class UsingReduceTest extends PHPUnit_Framework_TestCase
{
    private function reduce($items, $callback, $initial)
    {
        $result = [];
        $accumulator = $initial;

        foreach ($items as $item) {
            $accumulator = $callback($accumulator, $item);
        }

        return $accumulator;
    }

    public function test_calculate_the_product_of_a_list_of_numbers()
    {
        $numbers = [1, 2, 3, 4, 5, 6];

        /*
         * Add your solution here! Remember, no loops allowed!
         *
         * $product = ...
         */
        $product = $this->reduce($numbers, function ($product, $number) {
            return $product * $number;
        }, 1);

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
         * $emailLookup = ...
         */
        $emailLookup = $this->reduce($users, function ($emailLookup, $user) {
            $emailLookup[$user['name']] = $user['email'];
            return $emailLookup;
        }, []);

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
         * $departmentCounts = ...
         */
        $departmentCounts = $this->reduce($employees, function ($departmentCounts, $employee) {
            if (! isset($departmentCounts[$employee['department']])) {
                $departmentCounts[$employee['department']] = 0;
            }

            $departmentCounts[$employee['department']] += 1;
            return $departmentCounts;
        }, []);

        $this->assertEquals([
            'Sales' => 1,
            'Marketing' => 3,
            'Engineering' => 2,
        ], $departmentCounts);
    }
}
