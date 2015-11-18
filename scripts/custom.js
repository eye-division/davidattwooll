/* custom.js */

(function($) { 
	/* velocity SVG test */
	$("#rect")
    	.delay(500)
      	.velocity({ x: "+=200", y: "25%" })
    	.velocity({ fillGreen: 255, strokeWidth: 2 })
      	.velocity({ height: 50, width: 50 })
    	.velocity({ rotateZ: 90, scaleX: 0.5 })
    	.velocity("reverse", { delay: 250 });

    /* modal fullscreen props
    http://www.minimit.com/articles/solutions-tutorials/bootstrap-3-transparent-and-fullscreen-modals
    */
    $(".modal-fullscreen").on('show.bs.modal', function () {
	  setTimeout( function() {
	    $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
	  }, 0);
	});

	$(".modal-fullscreen").on('hidden.bs.modal', function () {
	  $(".modal-backdrop").addClass("modal-backdrop-fullscreen");
	});

    
})( jQuery );