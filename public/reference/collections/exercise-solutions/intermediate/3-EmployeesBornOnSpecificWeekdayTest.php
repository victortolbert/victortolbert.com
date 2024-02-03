<?php

class EmployeesBornOnSpecificWeekdayTest extends PHPUnit_Framework_TestCase
{
    private function employeesBornOn($employees, $day)
    {
        return $employees->filter(function ($employee) use ($day) {
            return (new DateTime($employee['date_of_birth']))->format('l') == $day;
        })->values();
    }

    public function test()
    {
        $employees = collect([
            ['name' => 'John',  'department' => 'Sales',        'date_of_birth' => '1988-07-11'], // Monday
            ['name' => 'Jane',  'department' => 'Marketing',    'date_of_birth' => '1981-09-06'], // Sunday
            ['name' => 'Dave',  'department' => 'Marketing',    'date_of_birth' => '1986-05-08'], // Thursday
            ['name' => 'Dana',  'department' => 'Engineering',  'date_of_birth' => '1976-09-26'], // Sunday
            ['name' => 'Beth',  'department' => 'Marketing',    'date_of_birth' => '1977-03-09'], // Wednesday
            ['name' => 'Kyle',  'department' => 'Engineering',  'date_of_birth' => '1990-02-28'], // Wednesday
            ['name' => 'Steve', 'department' => 'Sales',        'date_of_birth' => '1980-12-01'], // Monday
            ['name' => 'Liz',   'department' => 'Engineering',  'date_of_birth' => '1976-07-06'], // Tuesday
            ['name' => 'Joe',   'department' => 'Marketing',    'date_of_birth' => '1978-06-13'], // Tuesday
        ]);

        $this->assertEquals([
            ['name' => 'Jane',  'department' => 'Marketing',    'date_of_birth' => '1981-09-06'], // Sunday
            ['name' => 'Dana',  'department' => 'Engineering',  'date_of_birth' => '1976-09-26'], // Sunday
        ], $this->employeesBornOn($employees, 'Sunday')->all());

        $this->assertEquals([
            ['name' => 'John',  'department' => 'Sales',        'date_of_birth' => '1988-07-11'], // Monday
            ['name' => 'Steve', 'department' => 'Sales',        'date_of_birth' => '1980-12-01'], // Monday
        ], $this->employeesBornOn($employees, 'Monday')->all());

        $this->assertEquals([
            ['name' => 'Liz',   'department' => 'Engineering',  'date_of_birth' => '1976-07-06'], // Tuesday
            ['name' => 'Joe',   'department' => 'Marketing',    'date_of_birth' => '1978-06-13'], // Tuesday
        ], $this->employeesBornOn($employees, 'Tuesday')->all());

        $this->assertEquals([
            ['name' => 'Beth',  'department' => 'Marketing',    'date_of_birth' => '1977-03-09'], // Wednesday
            ['name' => 'Kyle',  'department' => 'Engineering',  'date_of_birth' => '1990-02-28'], // Wednesday
        ], $this->employeesBornOn($employees, 'Wednesday')->all());

        $this->assertEquals([
            ['name' => 'Dave',  'department' => 'Marketing',    'date_of_birth' => '1986-05-08'], // Thursday
        ], $this->employeesBornOn($employees, 'Thursday')->all());

        $this->assertEquals([], $this->employeesBornOn($employees, 'Friday')->all());
        $this->assertEquals([], $this->employeesBornOn($employees, 'Saturday')->all());
    }
}
