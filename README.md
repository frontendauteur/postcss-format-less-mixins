# PostCSS Format Less Mixins [![Build Status][ci-img]][ci]

[PostCSS] plugin to format Less mixin calls where Stylefmt fails.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/frontendauteur/postcss-format-less-mixins.svg
[ci]:      https://travis-ci.org/frontendauteur/postcss-format-less-mixins

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-format-less-mixins') ])
```

See [PostCSS] docs for examples for your environment.
