CSS for making Select2 fit in with Bootstrap a bit better,  
**updated for Bootstrap v3.0.0**.

http://fk.github.io/select2-bootstrap-css/

Tested with Bootstrap 3.0.0 and Select2 3.3.2, 3.4.1 and 3.4.2.

Known issues:

 * IE9/IE10, Firefox: Select2 in "Bootstrap Input Group" and .input-lg misses 1px in height (bug inherited from Bootstrap 3, @see http://getbootstrap.com/components/#input-groups-sizing)
 * IE9/IE10: Select2 in "Bootstrap Input Group with Button addon" (no height modifier, i. e. .input-sm, .input-lg) also misses 1px in height (bug _not_ inherited from Bootstrap 3)
 * focus and box-shadow for .select2-search input do not fit Bootstrap's defaults
 * Select2 dropdown could inherit look-and-feel from Bootstrap dropdowns/could honor Bootstrap height sizing classes
 * checkboxes and radio-buttons in "Bootstrap Input Groups" could be vertically aligned to the top (instead of center) if combined with a multi Select2 to address variable height of the Select2 container
 * lack of documentation for "Bootstrap Input Group" helper-classes `.select2-bootstrap-prepend` and `.select2-bootstrap-append`