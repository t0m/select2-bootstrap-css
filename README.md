[select2-bootstrap-css](https://github.com/t0m/select2-bootstrap-css),  
forked for Bootstrap 3.

Demonstrations available at  
http://fk.github.io/select2-bootstrap-css/

Tested with Bootstrap v3.2.0 and Select2 v3.3.2, v3.4.1-v3.4.5, master  
in latest Chrome, Safari, Firefox, Opera (Mac) and IE8-IE10.

##### Known issues

 * IE9/IE10: Select2 in "Bootstrap input group with button addon" (no height modifier, i. e. `.input-sm`, `.input-lg`) also is 1px off in height (bug _not_ inherited from Bootstrap 3)
 * box-shadow for .select2-search input do not fit Bootstrap's defaults
 * the Select2 dropdown could inherit look-and-feel from Bootstrap dropdowns and/or could honor Bootstrap height sizing classes
 * border-radii for opened Select2 dropdowns could consistently be set to be … round ;-)
 * checkboxes and radio-buttons in "Bootstrap input groups" could be vertically aligned to the top (instead of center) if combined with a multi Select2 to address variable height of the Select2 container

##### Credits

 Original [select2-bootstrap-css](https://github.com/t0m/select2-bootstrap-css) for Bootstrap 2 by [Tom Terrace](https://github.com/t0m) ([@tterrace](https://twitter.com/tterrace)).

###### Contributors

 * [Juri Strumpflohner](https://github.com/juristr) ([@juristr](https://twitter.com/juristr)) – [adding missing display:block](https://github.com/fk/select2-bootstrap-css/pull/1)
