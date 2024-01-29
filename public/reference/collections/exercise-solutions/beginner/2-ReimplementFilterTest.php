<?php

class ReimplementFilterTest extends PHPUnit_Framework_TestCase
{
    private function filter($items, $callback)
    {
        $result = [];

        foreach ($items as $item) {
            if ($callback($item)) {
                $result[] = $item;
            }
        }

        return $result;
    }

    public function test_remove_odd_numbers()
    {
        $evens = $this->filter([1, 2, 3, 4, 5, 6], function ($number) {
            return $number % 2 == 0;
        });

        $this->assertEquals([2, 4, 6], $evens);
    }

    public function test_get_marketing_employees()
    {
        $employees = [
            ['name' => 'John', 'department' => 'Sales'],
            ['name' => 'Jane', 'department' => 'Marketing'],
            ['name' => 'Dave', 'department' => 'Marketing'],
            ['name' => 'Dana', 'department' => 'Engineering'],
            ['name' => 'Beth', 'department' => 'Marketing'],
            ['name' => 'Kyle', 'department' => 'Engineering'],
        ];

        $marketingEmployees = $this->filter($employees, function ($employee) {
            return $employee['department'] == 'Marketing';
        });

        $this->assertEquals([
            ['name' => 'Jane', 'department' => 'Marketing'],
            ['name' => 'Dave', 'department' => 'Marketing'],
            ['name' => 'Beth', 'department' => 'Marketing'],
        ], $marketingEmployees);
    }

    public function test_products_that_are_out_of_stock()
    {
        $products = [
            ['product' => 'Banana', 'stock_quantity' => 12],
            ['product' => 'Milk', 'stock_quantity' => 0],
            ['product' => 'Cream', 'stock_quantity' => 34],
            ['product' => 'Sugar', 'stock_quantity' => 0],
            ['product' => 'Apple', 'stock_quantity' => 22],
            ['product' => 'Bread', 'stock_quantity' => 11],
            ['product' => 'Coffee', 'stock_quantity' => 0],
        ];

        $outOfStock = $this->filter($products, function ($product) {
            return $product['stock_quantity'] == 0;
        });

        $this->assertEquals([
            ['product' => 'Milk', 'stock_quantity' => 0],
            ['product' => 'Sugar', 'stock_quantity' => 0],
            ['product' => 'Coffee', 'stock_quantity' => 0],
        ], $outOfStock);
    }
}
