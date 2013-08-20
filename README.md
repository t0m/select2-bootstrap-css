CSS for making Select2 fit in with Bootstrap a bit better,  
**updated for Bootstrap v3.0.0**.

http://fk.github.io/select2-bootstrap-css/ – no LESS for now.

Tested with Bootstrap 3.0.0 and Select2 3.4.1, 3.4.2.

Known issues:

 * there is no .select2-chosen in Select2 v.3.3.2, thus no padding and line-height for the current Select2-choice
 * IE9/IE10: Select2 in "Bootstrap Input Group" and .input-lg misses 1px in height (bug inherited from Bootstrap 3, @see http://getbootstrap.com/components/#input-groups-sizing)
 * IE9/IE10: Select2 in "Bootstrap Input Group with Button addon" (no height modifier, i. e. .input-sm, .input-lg) also misses 1px in height (bug _not_ inherited from Bootstrap 3)
 * focus and box-shadow for .select2-search input do not fit Bootstrap's defaults
 * Select2 dropdown could inherit look-and-feel from Bootstrap dropdowns
 * checkboxes and radio-buttons in "Bootstrap Input Groups" could be vertically aligned to the top (instead of center) if combined with a multi Select2 to address variable height of the Select2 container
