<?php

class CommentsByUserTest extends PHPUnit_Framework_TestCase
{
    private function countCommentsFor($posts, $user)
    {
        /*
         * Write a collection pipeline that can find the total number of
         * comments posted by a given user on a collection of posts.
         *
         * Do not use any loops, if statements, or ternary operators.
         *
         * Good luck!
         *
         * return $posts->...
         */
    }

    public function test()
    {
        $posts = collect([
            [
                'title' => "Tips for Testing Emails in Laravel",
                'comments' => [
                    ['user' => 'Jane Smith', 'message' => "Very helpful!"],
                    ['user' => 'Bob Jones', 'message' => "Great post!"],
                    ['user' => 'Bob Jones', 'message' => "By the way, any tips for testing ElasticSearch?"],
                ],
            ],
            [
                'title' => "Testing ElasticSearch Queries",
                'comments' => [
                    ['user' => 'Bob Jones', 'message' => "Perfect, just what I needed!"],
                    ['user' => 'Kyle Johnson', 'message' => "You are seriously running ElasticSearch on your Mac and not a VM?"],
                    ['user' => 'Dana Smith', 'message' => "Would this work with Algolia?"],
                ],
            ],
            [
                'title' => "New Features in PHPUnit 5",
                'comments' => [
                    ['user' => 'Kyle Johnson', 'message' => "You should be using PHPSpec, you don't know what you're doing."],
                ],
            ],
            [
                'title' => "Using Factories to Clean up Your Tests",
                'comments' => [
                    ['user' => 'Dana Smith', 'message' => "When do you use factories instead of fixtures?"],
                    ['user' => 'Kyle Johnson', 'message' => "Your tests should never hit the database to begin with."],
                ],
            ],
            [
                'title' => "Refactoring Your Test Suite",
                'comments' => [
                    ['user' => 'Bob Jones', 'message' => "I had never thought to create my own assertions, awesome!"],
                    ['user' => 'Dana Smith', 'message' => "Never used spies before, very cool!"],
                ],
            ]
        ]);

        $this->assertEquals(1, $this->countCommentsFor($posts, 'Jane Smith'));
        $this->assertEquals(4, $this->countCommentsFor($posts, 'Bob Jones'));
        $this->assertEquals(3, $this->countCommentsFor($posts, 'Kyle Johnson'));
        $this->assertEquals(3, $this->countCommentsFor($posts, 'Dana Smith'));
    }
}
