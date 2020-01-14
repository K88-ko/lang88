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
    return name.match( /가/ );
  },
  a1: function() {
    var name = $(this).find('.name').text();
    return name.match( /나/ );
  },
  a2: function() {
    var name = $(this).find('.name').text();
    return name.match( /다/ );
  },
  a3: function() {
    var name = $(this).find('.name').text();
    return name.match( /라/ );
  },
  a4: function() {
    var name = $(this).find('.name').text();
    return name.match( /마/ );
  },
  a5: function() {
    var name = $(this).find('.name').text();
    return name.match( /바/ );
  },
  a6: function() {
    var name = $(this).find('.name').text();
    return name.match( /사/ );
  },
  a7: function() {
    var name = $(this).find('.name').text();
    return name.match( /아/ );
  },
  a8: function() {
    var name = $(this).find('.name').text();
    return name.match( /자/ );
  },
  a9: function() {
    var name = $(this).find('.name').text();
    return name.match( /차/ );
  },
  a10: function() {
    var name = $(this).find('.name').text();
    return name.match( /10/ );
  },
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
  },
  a21: function() {
    var name = $(this).find('.name').text();
    return name.match( /21/ );
  },
  a22: function() {
    var name = $(this).find('.name').text();
    return name.match( /22/ );
  },
  a23: function() {
    var name = $(this).find('.name').text();
    return name.match( /23/ );
  },
  a24: function() {
    var name = $(this).find('.name').text();
    return name.match( /24/ );
  },
  a25: function() {
    var name = $(this).find('.name').text();
    return name.match( /25/ );
  },
  a26: function() {
    var name = $(this).find('.name').text();
    return name.match( /26/ );
  },
  a27: function() {
    var name = $(this).find('.name').text();
    return name.match( /27/ );
  },
  a28: function() {
    var name = $(this).find('.name').text();
    return name.match( /28/ );
  },
  a29: function() {
    var name = $(this).find('.name').text();
    return name.match( /29/ );
  },
  a30: function() {
    var name = $(this).find('.name').text();
    return name.match( /30/ );
  },
  a31: function() {
    var name = $(this).find('.name').text();
    return name.match( /31/ );
  },
  a32: function() {
    var name = $(this).find('.name').text();
    return name.match( /32/ );
  },
  a33: function() {
    var name = $(this).find('.name').text();
    return name.match( /33/ );
  },
  a34: function() {
    var name = $(this).find('.name').text();
    return name.match( /34/ );
  },
  a35: function() {
    var name = $(this).find('.name').text();
    return name.match( /35/ );
  },
  a36: function() {
    var name = $(this).find('.name').text();
    return name.match( /36/ );
  },
  a37: function() {
    var name = $(this).find('.name').text();
    return name.match( /37/ );
  },
  a38: function() {
    var name = $(this).find('.name').text();
    return name.match( /38/ );
  },
  a39: function() {
    var name = $(this).find('.name').text();
    return name.match( /39/ );
  },
  a40: function() {
    var name = $(this).find('.name').text();
    return name.match( /40/ );
  },
  a41: function() {
    var name = $(this).find('.name').text();
    return name.match( /41/ );
  },
  a42: function() {
    var name = $(this).find('.name').text();
    return name.match( /42/ );
  },
  a43: function() {
    var name = $(this).find('.name').text();
    return name.match( /43/ );
  },
  a44: function() {
    var name = $(this).find('.name').text();
    return name.match( /44/ );
  },
  a45: function() {
    var name = $(this).find('.name').text();
    return name.match( /45/ );
  },
  a46: function() {
    var name = $(this).find('.name').text();
    return name.match( /46/ );
  },
  a47: function() {
    var name = $(this).find('.name').text();
    return name.match( /47/ );
  },
  a48: function() {
    var name = $(this).find('.name').text();
    return name.match( /48/ );
  },
  a49: function() {
    var name = $(this).find('.name').text();
    return name.match( /49/ );
  },
  a50: function() {
    var name = $(this).find('.name').text();
    return name.match( /50/ );
  },
  a51: function() {
    var name = $(this).find('.name').text();
    return name.match( /51/ );
  },
  a52: function() {
    var name = $(this).find('.name').text();
    return name.match( /52/ );
  },
  a53: function() {
    var name = $(this).find('.name').text();
    return name.match( /53/ );
  },
  a54: function() {
    var name = $(this).find('.name').text();
    return name.match( /54/ );
  },
  a55: function() {
    var name = $(this).find('.name').text();
    return name.match( /55/ );
  },
  a56: function() {
    var name = $(this).find('.name').text();
    return name.match( /56/ );
  },
  a57: function() {
    var name = $(this).find('.name').text();
    return name.match( /57/ );
  },
  a58: function() {
    var name = $(this).find('.name').text();
    return name.match( /58/ );
  },
  a59: function() {
    var name = $(this).find('.name').text();
    return name.match( /59/ );
  },
  a60: function() {
    var name = $(this).find('.name').text();
    return name.match( /60/ );
  },
  a61: function() {
    var name = $(this).find('.name').text();
    return name.match( /61/ );
  },
  a62: function() {
    var name = $(this).find('.name').text();
    return name.match( /62/ );
  },
  a63: function() {
    var name = $(this).find('.name').text();
    return name.match( /63/ );
  },
  a64: function() {
    var name = $(this).find('.name').text();
    return name.match( /64/ );
  },
  a65: function() {
    var name = $(this).find('.name').text();
    return name.match( /65/ );
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
