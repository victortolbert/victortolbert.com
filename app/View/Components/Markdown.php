<?php

namespace App\View\Components;

use Illuminate\View\Component;
use Illuminate\Mail\Markdown as MarkdownParser;

class Markdown extends Component
{
    public function parseMarkdown($markdown)
    {
        return MarkdownParser::parse($markdown);
    }

    public function render()
    {
        return view('components.markdown');
    }
}
