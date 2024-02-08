# Ruby


:u-icon{name="i-logos-ruby" class="h-11 w-auto float-right pl-8 mb-16"}

Ruby is an interpreted, high-level, general-purpose programming language which supports multiple programming paradigms. It was designed with an emphasis on programming productivity and simplicity. In Ruby, everything is an object, including primitive data types.

```ruby [Gemfile]
source :rubygems

gem 'compass_twitter_bootstrap'
gem 'zurb-foundation'
gem 'susy'
gem 'animate'
gem 'bourbon'
gem 'rmagick'
```

<https://github.com/vmg/redcarpet>

```ruby
# Initializes a Markdown parser
markdown = Redcarpet::Markdown.new(renderer, extensions = {})

markdown.render("This is *bongos*, indeed.")
# => "<p>This is <em>bongos</em>, indeed.</p>"
```

```ruby
require 'json'

licenses = JSON.parse(File.read('licenses.json'))
licenses['licenses'].each do |l|
  File.open("data/licenses/#{l['licenseId']}.json", 'w') do |f|
    # pretty generated so we can more easily see diffs between revisions, when
    # we update this
    pretty_json = JSON.pretty_generate(l)
    f.write(pretty_json)
  end
end
```



```ruby [widget.rb]
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

```ruby [sample.rake]
REMOTE_DIR = "/home/caged/public/website.com/public"

desc 'Upload the site'
task :deploy do
  Net::SCP.start("hostname", "caged", :port => 3000) do |scp|
    scp.upload! 'site/index.html',  REMOTE_DIR
    scp.upload! 'site/stylesheets', REMOTE_DIR, :recursive => true
    scp.upload! 'site/images',      REMOTE_DIR, :recursive => true
    scp.upload! 'site/article',     REMOTE_DIR, :recursive => true
  end
end
```

```ruby [gradient.rake]
desc "Generate the gradient background"
task :gradient do
  require 'rmagick'
  include Magick

  WIDTH = 1
  HEIGHT = 154

  gradient = GradientFill.new(0, 0, WIDTH, 0, "#84704E", "#99906E")
  image = Image.new(WIDTH, HEIGHT, gradient)
  image.write("gradient.jpg")
end
```

```ruby [upload_test.rake]
require 'net/scp'

# http://alternateidea.com/blog/articles/2008/10/8/deploying-static-websites-with-net-scp

REMOTE_DIR = "precisiongraphic.net/"

desc 'Upload the site'
task :deploy do
  Net::SCP.start("highland.dreamhost.com", "vtolbert") do |scp|
    scp.upload! 'site/index.html',  REMOTE_DIR
    # scp.upload! 'site/stylesheets', REMOTE_DIR, :recursive => true
    scp.upload! 'site/images',      REMOTE_DIR, :recursive => true
    # scp.upload! 'site/article',     REMOTE_DIR, :recursive => true
  end
end
```

```ruby [rails.rake]
desc "Checks your app and gently warns you if you are using deprecated code."
task :deprecated => :environment do
  deprecated = {
    '@params'    => 'Use params[] instead',
    '@session'   => 'Use session[] instead',
    '@flash'     => 'Use flash[] instead',
    '@request'   => 'Use request[] instead',
    '@env' => 'Use env[] instead',
    'find_all'   => 'Use find(:all) instead',
    'find_first' => 'Use find(:first) instead',
    'render_partial' => 'Use render :partial instead',
    'component'  => 'Use of components are frowned upon',
    'paginate'   => 'The default paginator is slow. Writing your own may be faster',
    'start_form_tag'   => 'Use form_for instead',
    'end_form_tag'   => 'Use form_for instead',
    ':post => true'   => 'Use :method => :post instead'
  }

  deprecated.each do |key, warning|
    puts '--> ' + key
    output = `cd '#{File.expand_path('app', RAILS_ROOT)}' && grep -n --exclude=*.svn* -r '#{key}' *`
    unless output =~ /^$/
      puts "  !! " + warning + " !!"
      puts '  ' + '.' * (warning.length + 6)
      puts output
    else
      puts "  Clean! Cheers for you!"
    end
    puts
  end
end

namespace 'views' do
  desc 'Renames all .rhtml views to .html.erb, .rjs to .js.rjs, .rxml to .xml.builder, and .haml to .html.haml'
  task 'rename' do
    Dir.glob('app/views/**/[^_]*.rhtml').each do |file|
      puts `svn mv #{file} #{file.gsub(/\.rhtml$/, '.html.erb')}`
    end

    Dir.glob('app/views/**/[^_]*.rxml').each do |file|
      puts `svn mv #{file} #{file.gsub(/\.rxml$/, '.xml.builder')}`
    end

    Dir.glob('app/views/**/[^_]*.rjs').each do |file|
      puts `svn mv #{file} #{file.gsub(/\.rjs$/, '.js.rjs')}`
    end
    Dir.glob('app/views/**/[^_]*.haml').each do |file|
      puts `svn mv #{file} #{file.gsub(/\.haml$/, '.html.haml')}`
    end
  end
end
```
