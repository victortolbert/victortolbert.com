---
title: til
description: A collection of notes, tips, tricks, and stuff I learn from day to day working with computers and technology as a software engineer
ex:
  - https://til.hashrocket.com/
  - https://github.com/jbranchaud/til?tab=readme-ov-file#til
  - https://github.com/jwworth/til?tab=readme-ov-file#til-today-i-learned
---

## Example

### EditorConfig for Markdown

I am using the basic **EditorConfig** configuration for **Markdown** files.

```ini
[*.{md,mkdn}]
trim_trailing_whitespace = true
indent_style = space
```

I trim trailing whitespace to adhere to [Markdownlint] recommendations for “Trailing spaces” ([MD009]). Do note that this conflicts with the [Markdown specification] for inserting a line break, by ending a line with two consecutive spaces, so of you need this particular Markdown feature, you should disable: `trim_trailing_whitespace`:

```ini
[*.{md,mkdn}]
trim_trailing_whitespace = false
```

Currently I do this in my global file (`$HOME/.editorconfig`) so I do not have any surprises, when just editing Markdown and then on a project or repository basis I enable it where the Markdownlint rules makes more sense.

I use indentation style based on spaces, to adhere to [Markdownlint] recommendations for “Unordered list indentation” ([MD007]).

#### References

- [EditorConfig.org]
- [Markdownlint]
- [Markdownlint Rules]
- [Markdown Specification]

[Markdown specification]: https://daringfireball.net/projects/markdown/syntax#block
[Markdownlint]: https://github.com/markdownlint/markdownlint
[MD007]: https://github.com/markdownlint/markdownlint/blob/master/docs/RULES.md#md007---unordered-list-indentation
[MD009]: https://github.com/markdownlint/markdownlint/blob/master/docs/RULES.md#md009---trailing-spaces
[EditorConfig.org]: https://editorconfig.org/
[Markdownlint Rules]: https://github.com/markdownlint/markdownlint/blob/master/docs/RULES.md
