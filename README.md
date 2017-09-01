# PostCSS Format Less Mixins [![Build Status][ci-img]][ci]

[PostCSS] plugin to format Less mixin calls where Stylefmt fails.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/frontendauteur/postcss-format-less-mixins.svg
[ci]:      https://travis-ci.org/frontendauteur/postcss-format-less-mixins

## Installation

```js
npm install postcss-format-less-mixins
```

## Example

```less
/* Input Example */
.a {

    .myMixin()
    ;
}
.b {
    background: rebeccapurple;

    .myMixin()
    ;
}
.c {
    .myOtherMixin()
    ;

    .myMixin()
    ;
}
.d {

    .myOtherMixin()
    ;

    .myMixin()
    ;
}
.e {
    background: rebeccapurple;

    .f {
        background: transparent;

        .myMixin()
        ;
    }
}
```

```less
/* Output Example */
.a {
    .myMixin();
}
.b {
    background: rebeccapurple;
    .myMixin();
}
.c {
    .myOtherMixin();
    .myMixin();
}
.d {
    .myOtherMixin();
    .myMixin();
}
.e {
    background: rebeccapurple;

    .f {
        background: transparent;
        .myMixin();
    }
}
```

## Usage

```js
postcss([
    require('postcss-format-less-mixins')
]).process(YOUR_LESS, {
    syntax: require('postcss-less')
})
```

Use Stylefmt **before** using this plugin.