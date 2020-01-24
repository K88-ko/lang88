// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  a11: function() {
    var name = $(this).find('.name').text();
    return name.match( /11/ );
  },
  a12: function() {
    var name = $(this).find('.name').text();
    return name.match( /12/ );
  },
  a13: function() {
    var name = $(this).find('.name').text();
    return name.match( /13/ );
  },
  a14: function() {
    var name = $(this).find('.name').text();
    return name.match( /14/ );
  },
  a15: function() {
    var name = $(this).find('.name').text();
    return name.match( /15/ );
  },
  a16: function() {
    var name = $(this).find('.name').text();
    return name.match( /16/ );
  },
  a17: function() {
    var name = $(this).find('.name').text();
    return name.match( /17/ );
  },
  a18: function() {
    var name = $(this).find('.name').text();
    return name.match( /18/ );
  },
  a19: function() {
    var name = $(this).find('.name').text();
    return name.match( /19/ );
  },
  a20: function() {
    var name = $(this).find('.name').text();
    return name.match( /20/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
