# BEM

:u-icon{name="i-logos-bem" class="h-11 w-auto float-right pl-8 mb-16"}

BEM — Block Element Modifier is a methodology, that helps you to achieve reusable components and code sharing in the front-end.

## Block

A block represents the main component name. If you were building a house component, the class name would be `.house.` All of the properties you want included for all houses would be included in the base `.house` class.

## Element

An element represents a part of a component and is separated by two underscores. The door of the house would be represented by the class `.house__door`. A window would be `.house__window`.

Be careful to look for smaller component possibilities within a larger component. Especially if it’s a pattern that might be repeated in an unrelated component. Avoid using a class like `.house__stair__step`. Instead, either use `.house__stair-step` (a single dash does not indicate anything in BEM and can simply be used for compound naming). Or if the stair portion of the component might be used inside another component, make the `.stair` a smaller component within the larger component and use `.stair__step` as an element of it.

## Modifier

A modifier is a component or element variation and is separated by a single underscore. The variation can apply to the overall component or it can be applied to an element within the component.

Since the properties that should apply to every house are placed on the main `.house` class, all houses receive the `.house` class as the base. If there is a variation of a house — perhaps it is gray — the `.house_gray` class would be added to the component in addition to the `.house` class.

If the house has a pink door, a variation can be placed on the door element itself — `.house__door_pink`.

- https://getbem.com/
