<?php

class UsingFilterTest extends PHPUnit_Framework_TestCase
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

    public function test_get_part_time_employees()
    {
        $employees = [
            ['name' => 'John', 'department' => 'Sales', 'employment' => 'Part Time'],
            ['name' => 'Jane', 'department' => 'Marketing', 'employment' => 'Part Time'],
            ['name' => 'Dave', 'department' => 'Marketing', 'employment' => 'Salary'],
            ['name' => 'Dana', 'department' => 'Engineering', 'employment' => 'Full Time'],
            ['name' => 'Beth', 'department' => 'Marketing', 'employment' => 'Part Time'],
            ['name' => 'Kyle', 'department' => 'Engineering', 'employment' => 'Full Time'],
        ];

        /*
         * Add your solution here! Remember, no loops allowed!
         *
         * $partTimers = ...
         */
        $partTimers = $this->filter($employees, function ($employee) {
            return $employee['employment'] == 'Part Time';
        });

        $this->assertEquals([
            ['name' => 'John', 'department' => 'Sales', 'employment' => 'Part Time'],
            ['name' => 'Jane', 'department' => 'Marketing', 'employment' => 'Part Time'],
            ['name' => 'Beth', 'department' => 'Marketing', 'employment' => 'Part Time'],
        ], $partTimers);
    }

    public function test_get_products_in_stock()
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

        /*
         * Add your solution here! Remember, no loops allowed!
         *
         * $inStock = ...
         */
        $inStock = $this->filter($products, function ($product) {
            return $product['stock_quantity'] > 0;
        });

        $this->assertEquals([
            ['product' => 'Banana', 'stock_quantity' => 12],
            ['product' => 'Cream', 'stock_quantity' => 34],
            ['product' => 'Apple', 'stock_quantity' => 22],
            ['product' => 'Bread', 'stock_quantity' => 11],
        ], $inStock);
    }

    public function test_get_cities_with_more_than_120_000_people()
    {
        $cities = [
            ['name' => 'Kitchener', 'population' => 204688],
            ['name' => 'London', 'population' => 366150],
            ['name' => 'Woodstock', 'population' => 37754],
            ['name' => 'Cambridge', 'population' => 120375],
            ['name' => 'Milton', 'population' => 84362],
            ['name' => 'Guelph', 'population' => 114940],
        ];

        /*
         * Add your solution here! Remember, no loops allowed!
         *
         * $bigCities = ...
         */
        $bigCities = $this->filter($cities, function ($city) {
            return $city['population'] > 120000;
        });

        $this->assertEquals([
            ['name' => 'Kitchener', 'population' => 204688],
            ['name' => 'London', 'population' => 366150],
            ['name' => 'Cambridge', 'population' => 120375],
        ], $bigCities);
    }
}
