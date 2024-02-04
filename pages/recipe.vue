<template>
  <article class="h-recipe">
    <!--

      https://microformats.org/wiki/h-recipe

      h-recipe properties, inside an element with class h-recipe:

p-name - the name of the recipe
p-ingredient - describes one or more ingredients used in the recipe.
p-yield - Specifies the quantity produced by the recipe, like how many persons it satisfies
e-instructions - the method of the recipe.
dt-duration - the time it takes to prepare the meal described by the recipe.
u-photo - an accompanying image
Experimental properties with wide adoption
p-summary - provides a short summary or introduction
p-author - person who wrote the recipe, optionally embedded with h-card
Main article: h-card
dt-published - the date the recipe was published
p-nutrition - nutritional information like calories, fat, dietary fiber etc.
p-category - recipe categories/tags
     -->
    <h1 class="p-name">
      Bagels
    </h1>

    <ul>
      <li class="p-ingredient">
        Flour
      </li>
      <li class="p-ingredient">
        Sugar
      </li>
      <li class="p-ingredient">
        Yeast
      </li>
    </ul>

    <p>
      Takes <time class="dt-duration" datetime="1H">1 hour</time>,
      serves <data class="p-yield" value="4">four people</data>.
    </p>

    <div class="e-instructions">
      <ol>
        <li>Start by mixing all the ingredients together.</li>
      </ol>
    </div>
  </article>
</template>
