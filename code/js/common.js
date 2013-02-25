$(document).ready(function() {
	$('#slides').slides({
		preload: true,
		generateNextPrev: true,
		generatePagination:false
	});
	$( "#tabs" ).tabs();

	if ($.browser.msie && $.browser.version < 9) {
		$('.articles-list_top .block_article:nth-child(even)').addClass('block_article_even');
		$('.articles-list_bottom .block_article:nth-child(odd)').addClass('block_article_odd');
	}
	
	
	/*
	 * Placeholder
	 */
	
	jQuery.support.placeholder = false;
	test = document.createElement('input, textarea');
	if('placeholder' in test) jQuery.support.placeholder = true;
	
	
	if(!$.support.placeholder) { 
		var active = document.activeElement;
		$(':text').focus(function () {
			if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
				$(this).val('').removeClass('hasPlaceholder');
			}
		}).blur(function () {
			if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
				$(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
			}
		});
		$(':text').blur();
		$(active).focus();
		$('form:eq(0)').submit(function () {
			$(':text.hasPlaceholder').val('');
		});
	}
	
});

