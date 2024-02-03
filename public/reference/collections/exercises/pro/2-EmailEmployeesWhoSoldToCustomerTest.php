<?php

class EmailEmployeesWhoSoldToCustomerTest extends PHPUnit_Framework_TestCase
{
    private function emailTo($employees, $customer)
    {
        /*
         * Write a collection pipeline that can find all of the employees
         * who made sales to a given customer, and generate a "To" line
         * that could be used to email those employees.
         *
         * Do not use any loops, if statements, or ternary operators.
         *
         * Good luck!
         *
         * return $employees->...
         */
    }

    public function test()
    {
        $employees = collect([
            [
                'name' => 'John',
                'email' => 'john3@example.com',
                'sales' => [
                    ['customer' => 'The Blue Rabbit Company', 'order_total' => 7444],
                    ['customer' => 'Black Melon', 'order_total' => 1445],
                    ['customer' => 'Yellow Cake', 'order_total' => 700],
                ],
            ],
            [
                'name' => 'Jane',
                'email' => 'jane8@example.com',
                'sales' => [
                    ['customer' => 'The Grey Apple Company', 'order_total' => 203],
                    ['customer' => 'Yellow Cake', 'order_total' => 8730],
                    ['customer' => 'The Blue Rabbit Company', 'order_total' => 3337],
                    ['customer' => 'Green Mobile', 'order_total' => 5310],
                ],
            ],
            [
                'name' => 'Dave',
                'email' => 'dave1@example.com',
                'sales' => [
                    ['customer' => 'The Acute Toaster Company', 'order_total' => 1091],
                    ['customer' => 'Green Mobile', 'order_total' => 2370],
                ],
            ],
            [
                'name' => 'Dana',
                'email' => 'dana2@example.com',
                'sales' => [
                    ['customer' => 'Green Mobile', 'order_total' => 203],
                    ['customer' => 'Yellow Cake', 'order_total' => 8730],
                    ['customer' => 'The Piping Bull Company', 'order_total' => 3337],
                    ['customer' => 'The Cloudy Dog Company', 'order_total' => 5310],
                ],
            ],
            [
                'name' => 'Beth',
                'email' => 'beth9@example.com',
                'sales' => [
                    ['customer' => 'The Grey Apple Company', 'order_total' => 1091],
                    ['customer' => 'Green Mobile', 'order_total' => 2370],
                ],
            ],
        ]);

        $this->assertEquals(
            'john3@example.com,jane8@example.com',
            $this->emailTo($employees, 'The Blue Rabbit Company')
        );

        $this->assertEquals(
            'john3@example.com',
            $this->emailTo($employees, 'Black Melon')
        );

        $this->assertEquals(
            'john3@example.com,jane8@example.com,dana2@example.com',
            $this->emailTo($employees, 'Yellow Cake')
        );

        $this->assertEquals(
            'jane8@example.com,beth9@example.com',
            $this->emailTo($employees, 'The Grey Apple Company')
        );

        $this->assertEquals(
            'jane8@example.com,dave1@example.com,dana2@example.com,beth9@example.com',
            $this->emailTo($employees, 'Green Mobile')
        );

        $this->assertEquals(
            'dave1@example.com',
            $this->emailTo($employees, 'The Acute Toaster Company')
        );

        $this->assertEquals(
            'dana2@example.com',
            $this->emailTo($employees, 'The Piping Bull Company')
        );

        $this->assertEquals(
            'dana2@example.com',
            $this->emailTo($employees, 'The Cloudy Dog Company')
        );
    }
}
