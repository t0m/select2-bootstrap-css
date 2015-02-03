[select2-bootstrap-css](https://github.com/t0m/select2-bootstrap-css),  
forked for Bootstrap 3.

Demonstrations available at  
http://fk.github.io/select2-bootstrap-css/

Tested with Bootstrap v3.3.2 and Select2 v3.3.2, v3.4.1-v3.4.5, v3.5.1, v3.5.2, master  
in latest Chrome, Safari, Firefox, Opera (Mac) and IE8-IE10.

##### Install

 * [Bower](http://bower.io/): `bower install select2-bootstrap-css`
 * [npm](http://npmjs.org/): `npm install select2-bootstrap-css`

##### Known issues

 * box-shadow for .select2-search input do not fit Bootstrap's defaults
 * the Select2 dropdown could inherit look-and-feel from Bootstrap dropdowns and/or could honor Bootstrap height sizing classes
 * checkboxes and radio-buttons in "Bootstrap input groups" could be vertically aligned to the top (instead of center) if combined with a multi Select2 to address variable height of the Select2 container

##### Changelog

###### v1.4.6

 * Fix wrong version number in distribution sources.

###### v1.4.5

 * Built on Bootstrap 3 v3.3.2 and corresponding bootstrap-sass.

###### v1.4.4

 * Don't hardcode :focus box-shadow colour ([#58](https://github.com/t0m/select2-bootstrap-css/issues/58)).

###### v1.4.3

 * Removed gradient for `.select2-dropdown-open.select2-drop-above [class^="select2-choice"]` in IE <= 9; really fixes [#35](https://github.com/t0m/select2-bootstrap-css/issues/35).

###### v1.4.2

 * Removed box-shadow for `.select2-container.form-control` (inherited from Bootstrap's `.form-control`).
 * Fixed [#35](https://github.com/t0m/select2-bootstrap-css/issues/35).
 * Removed border-left for `.select2-arrow` ([#36](https://github.com/t0m/select2-bootstrap-css/issues/36)).
 * Built on Bootstrap 3 v3.3.1 and corresponding bootstrap-sass.
 * Bower components now live in the default "bower_components" folder; ditched grunt-jekyll in favor of grunt-shell.
 * Updated grunt plugins.

###### v1.4.1

 * Fixed border-radii for `.select2-dropdown-open.select2-drop-above` (as reported by @rzschech in https://github.com/t0m/select2-bootstrap-css/issues/24#issuecomment-37683695, https://github.com/t0m/select2-bootstrap-css/issues/24#issuecomment-37688176) and `.select2-dropdown in "Bootstrap input groups with addons".
 * Fixed an issue where using Select2 pre v3.4.2 in combination with Bootstrap v3.2.0 and when using Select2 in a "Bootstrap Input Group with Addons" context would result in the original `<select>` element not being hidden.
 * Removed trailing comma in bower.json.

###### v1.4.0

 * First version built on Twitter Bootstrap v3.2.0.
 * [Fixes](https://github.com/t0m/select2-bootstrap-css/compare/v1.3.1...v1.4.0#diff-c3edd22c1ff48e2129219a4de833349dL87) a bug inherited from Twitter Bootstrap by using its variables which in IE8-IE10 and Firefox caused Select2 widgets in "Bootstrap input groups with radio/checkbox addon" and `.input-lg` size modifier to be 1px off in height (Bootstrap 3's "input group sizing"-demo at http://getbootstrap.com/components/#input-groups-sizing behaved the same for Bootstrap v3.0.0).
 * Updates UI [component colors](https://github.com/t0m/select2-bootstrap-css/compare/v1.3.1...v1.4.0#diff-c3edd22c1ff48e2129219a4de833349dL224).

###### v1.3.1

 * Added `main` and `dependencies` section to bower.json.

###### v1.3.0

 * First tagged version of the bootstrap3 branch (as requested in https://github.com/t0m/select2-bootstrap-css/issues/30).

##### Credits

 Original [select2-bootstrap-css](https://github.com/t0m/select2-bootstrap-css) for Bootstrap 2 by [Tom Terrace](https://github.com/t0m) ([@tterrace](https://twitter.com/tterrace)).

##### Contributing

The project offers [Less](http://lesscss.org/) and [Sass](http://sass-lang.com/) sources for building `select2-bootstrap.css`; both make use of variables from either [Bootstrap](https://github.com/twbs/bootstrap) (Less) or [Bootstrap for Sass](https://github.com/twbs/bootstrap-sass). The demo pages are built using [Jekyll](http://jekyllrb.com/) and there are a bunch of [Grunt](http://gruntjs.com/) tasks to ease development.

With [Ruby](https://www.ruby-lang.org/en/downloads/) and [RubyGems](http://rubygems.org/pages/download), [Jekyll](http://jekyllrb.com/), [Bower](http://bower.io/), [node.js](http://nodejs.org/), [Less](http://lesscss.org/) and [Sass](http://sass-lang.com/) installed, run

    npm install && bower install

to install all necessary development dependencies.

 * `grunt copy` copies assets from `components` to `_jekyll` – use this in case a new version of Twitter Bootstrap or Select2 are out and need to be tested
 * `grunt build` builds `docs`
 * `grunt serve` builds `docs` and serves them via Jekyll's `--watch` flag on http://localhost:4000
 * `grunt watch` watches for changes in `lib/select2-bootstrap.scss` ([livereload](https://github.com/gruntjs/grunt-contrib-watch#optionslivereload) is enabled)

Develop in `lib/select2-bootstrap.scss` test your changes using `grunt watch` and `grunt serve`. Ideally, port your changes to `lib/select2-bootstrap.less` and make sure tests are passing to verify that Less and Sass compile down to the target CSS via `npm test`.

###### Contributors

 * [Juri Strumpflohner](https://github.com/juristr) ([@juristr](https://twitter.com/juristr)) – [adding missing display:block](https://github.com/fk/select2-bootstrap-css/pull/1)
