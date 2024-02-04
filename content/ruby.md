# Ruby


:u-icon{name="i-logos-ruby" class="h-11 w-auto float-right pl-8 mb-16"}

Ruby is an interpreted, high-level, general-purpose programming language which supports multiple programming paradigms. It was designed with an emphasis on programming productivity and simplicity. In Ruby, everything is an object, including primitive data types.

```ruby
class Widget
  attr_reader :size, :weight # gives you .size and .weight

  def initialize(size, weight)
    # Only use @ in initialize
    # Don't set size and weight anywhere else.
    # If you need a different size and weight, use Widget.new(size, weight)
    # In other words, keep Widget immutable.
    @size = size
    @weight = weight
  end

  def density
    # use your own attribute readers
    weight / size
  end
end

# Or, shorthand:
class Widget < Struct.new(:size, :weight)
  def density
    weight / size
  end
end
```
