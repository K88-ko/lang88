// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  a0: function() {
    var name = $(this).find('.name').text();
    return name.match( /주인공/ );
  },
  a1: function() {
    var name = $(this).find('.name').text();
    return name.match( /빛/ );
  },
  a2: function() {
    var name = $(this).find('.name').text();
    return name.match( /제국/ );
  },
  a3: function() {
    var name = $(this).find('.name').text();
    return name.match( /기원/ );
  },
  a4: function() {
    var name = $(this).find('.name').text();
    return name.match( /암흑/ );
  },
  a5: function() {
    var name = $(this).find('.name').text();
    return name.match( /공주/ );
  },
  a6: function() {
    var name = $(this).find('.name').text();
    return name.match( /전략/ );
  },
  a7: function() {
    var name = $(this).find('.name').text();
    return name.match( /전설/ );
  },
  a8: function() {
    var name = $(this).find('.name').text();
    return name.match( /유성/ );
  },
  a9: function() {
    var name = $(this).find('.name').text();
    return name.match( /시공/ );
  },
  a10: function() {
    var name = $(this).find('.name').text();
    return name.match( /초월/ );
  },
  a11: function() {
    var name = $(this).find('.name').text();
    return name.match( /전생/ );
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
