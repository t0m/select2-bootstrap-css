[select2-bootstrap-css](https://github.com/t0m/select2-bootstrap-css),  
forked for Bootstrap 3.

Demonstrations available at  
http://fk.github.io/select2-bootstrap-css/

Tested with Bootstrap v3.2.0 and Select2 v3.3.2, v3.4.1-v3.4.5, v3.5.1, master  
in latest Chrome, Safari, Firefox, Opera (Mac) and IE8-IE10.

##### Known issues

 * IE9/IE10: Select2 in "Bootstrap input group with button addon" (no height modifier, i. e. `.input-sm`, `.input-lg`) is 1px off in height
 * box-shadow for .select2-search input do not fit Bootstrap's defaults
 * the Select2 dropdown could inherit look-and-feel from Bootstrap dropdowns and/or could honor Bootstrap height sizing classes
 * checkboxes and radio-buttons in "Bootstrap input groups" could be vertically aligned to the top (instead of center) if combined with a multi Select2 to address variable height of the Select2 container

##### Changelog

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
 * `grunt jekyll:build` builds `docs`
 * `grunt jekyll:serve` builds `docs` and serves them via Jekyll's `--watch` flag on http://localhost:4000
 * `grunt watch` watches for changes in `lib/select2-bootstrap.scss` ([livereload](https://github.com/gruntjs/grunt-contrib-watch#optionslivereload) is enabled)

Develop in `lib/select2-bootstrap.scss` test your changes using `grunt watch` and `grunt jekyll:serve`. Ideally, port your changes to `lib/select2-bootstrap.less` and make sure tests are passing to verify that Less and Sass compile down to the target CSS via `npm test`.

###### Contributors

 * [Juri Strumpflohner](https://github.com/juristr) ([@juristr](https://twitter.com/juristr)) – [adding missing display:block](https://github.com/fk/select2-bootstrap-css/pull/1)
