# Nunjucks

```hbs [_layout.html]
<body class="{{ body_class }}">
  {% include "./template-parts/_header.html" %}

  {% include "./template-parts/_nav.html" %}

  {% block content %}
  {% endblock %}

  {% include "./template-parts/_footer.html" %}
</body>
```

```hbs
{% set body_class = "home" %}
{% import "template-parts/_cards.html" as card %}
{% extends "_layout.html" %}

{% block content %}
<main>
  {% include "content/about.html" %}
</main>
{% endblock %}
```

```css
body.home .nav-home a,
body.services .nav-services a {
  /* continue matching classes for all pages... */
  /* unique active state styling */
}
```

```handlebars
{% include "../icons/cloud.svg" %}

{% macro card(title, content) %}

<div class="card">
  <h2>{{ title }}</h2>
  <p>{{ content }}</p>
</div>
{% endmacro %}

{{ card('My Module', 'Lorem ipsum whatever.') }}
```
