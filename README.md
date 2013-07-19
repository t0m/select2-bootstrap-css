# Select2 Bootstrap CSS

This is a bare bones stylesheet for making select2 fit in with bootstrap a bit better.

The LESS file is located at lib/select2-bootstrap.less, and the SCSS file is located at lib/select2-bootstrap.scss.

Tests are included to verify that LESS and SCSS compile down to the target CSS. To run the tests, you'll need to install [node.js](http://nodejs.org/), [Less](http://lesscss.org/), and [SASS](http://sass-lang.com/). Then you can run:

    npm install && bower install
    npm test

## Notable Changes

Versions prior to 1.2.0 included a default width for select2 containers. Applying the class "input-default" to you select will line the select2 container up with a default bootstrap text input.

## Demos

http://t0m.github.io/select2-bootstrap-css/
