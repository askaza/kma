$(document).ready(function() {    
 

          $('#slides .slides_container').carouFredSel({
            auto: true,
            width: 816,
            height: 322,
            items: 1,
                scroll: {
                    items: 1
                }, 
            prev    : {
	        button  : "#foo2_prev",
	        key     : "left"
	    },
	    next    : {
	        button  : "#foo2_next",
	        key     : "right"
	    },
          });
      
    
	$( "#tabs" ).tabs();

	if ($.browser.msie && $.browser.version < 9) {
		$('.articles-list_top .block_article:nth-child(even)').addClass('block_article_even');
		$('.articles-list_bottom .block_article:nth-child(odd)').addClass('block_article_odd');
	}

	$('input, textarea').placeholder();

	$('.ico_collapsed').click(function(){
		$(this).parents('.comment-single').next().slideToggle(500);
		$(this).toggleClass('ico_expanded');
	});

	$('.jqtransform').jqTransform();

  


});

