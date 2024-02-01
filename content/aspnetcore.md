# ASP.NET Core

:u-icon{name="i-logos-dotnet" class="h-11 w-auto float-right pl-8 mb-16"}

[ASP.NET Core][] is a cross-platform .NET framework for building modern cloud-based web applications on Windows, Mac, or Linux.

## More information

- https://learn.microsoft.com/en-us/aspnet/core
- https://github.com/dotnet/aspnetcore

[ASP.NET Core]: https://learn.microsoft.com/en-us/aspnet/core
[GitHub]: https://github.com/dotnet/aspnetcore#readme

## Razor Pages

```razor
@page

@model IndexModel

@{
  ViewData["Title"] = "Home page";
}

<div>
  <h1>Welcome</h1>

  <p>Hello, world! The time on the server is @DateTime.Now</p>
</div>
```
