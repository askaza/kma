$(document).ready(function() {


    $('#flUpload1').customFileInput();
    $('#flUpload2').customFileInput();
    $('#flUpload3').customFileInput();
    $('#flUpload4').customFileInput();
	$('#flUpload5').customFileInput();
    $('#flUpload6').customFileInput();
	$('#flUpload7').customFileInput();


	$('.task-filter').jqTransform();
	$('.field_chbox_box, .field_select_box').jqTransform();

	$( ".field_type_text_spinner" ).spinner();
	$('.inline-list__item:nth-child(2)').addClass('inline-list__item-second_child');


	/*
	 * Placeholder
	 */

	jQuery.support.placeholder = false;
	test = document.createElement('input');
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

   $('.project-name').hover(function() {
       $(this).parents('.projects-list__item').addClass('projects-list__item_active');
   });

   $('.projects-list__item .ico_del').click(function(){
      $(this).parents('.projects-list__item').removeClass('projects-list__item_active');
   });
    });

