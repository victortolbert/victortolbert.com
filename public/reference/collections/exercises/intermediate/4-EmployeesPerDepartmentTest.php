<?php

class EmployeesPerDepartmentTest extends PHPUnit_Framework_TestCase
{
    public function test()
    {
        $employees = collect([
            ['name' => 'John',  'department' => 'Sales',        'email' => 'john3@example.com'],
            ['name' => 'Jane',  'department' => 'Marketing',    'email' => 'jane8@example.com'],
            ['name' => 'Dave',  'department' => 'Marketing',    'email' => 'dave1@example.com'],
            ['name' => 'Dana',  'department' => 'Engineering',  'email' => 'dana8@example.com'],
            ['name' => 'Beth',  'department' => 'Marketing',    'email' => 'beth4@example.com'],
            ['name' => 'Kyle',  'department' => 'Engineering',  'email' => 'kyle8@example.com'],
            ['name' => 'Steve', 'department' => 'Sales',        'email' => 'steve7@example.com'],
            ['name' => 'Liz',   'department' => 'Engineering',  'email' => 'liz6@example.com'],
            ['name' => 'Joe',   'department' => 'Marketing',    'email' => 'joe5@example.com'],
        ]);

        /*
         * Write a collection pipeline that returns an associative array that
         * shows how many employees are in each department.
         *
         * Do not use any loops, if statements, or ternary operators.
         *
         * Good luck!
         *
         * $departmentCounts = $employees->...
         */

        $this->assertEquals([
            'Sales' => 2,
            'Marketing' => 4,
            'Engineering' => 3,
        ], $departmentCounts->all());
    }
}
