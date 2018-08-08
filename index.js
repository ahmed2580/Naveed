$(document).ready(function(){
    $('#menuBtn').click(function(e){
      e.preventDefault();
        $('#menu>nav').fadeToggle();
  //       $('#social').fadeToggle(100);
		// $('.header-text h2').fadeToggle(100);
  //       // $('span').toggleClass('ahmed');
  //       $('.header-text h2').toggleClass('ahmed2');
  //       $('.header-text h3 , .header-text a  ').fadeToggle();
        
    });

    $('#openForm').click(function(){
    	$('.emailFormContainer').toggleClass('showEmailForm');
    });
    $('#closeForm').click(function(){
    	$('.emailFormContainer').toggleClass('showEmailForm');
    });
});
$(document).ready(function() {
    $( ".progress-bar" ).animate({
      opacity: 1,
    }, 5000 );
  });