$(document).ready(function(){
    $('#menuBtn').click(function(e){
      e.preventDefault();
        $('#menu>nav').fadeToggle();
        
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