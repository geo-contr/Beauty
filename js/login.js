// Focus-in and Focus-out 'active' class add/remove behavior
var inptxt = $('.forPassword');
$(inptxt).on('focusin', 
   function(){
     $('#togglePassword').addClass('active');
   }).on('focusout', function(){
     $('#togglePassword').removeClass('active');

  });

var inptxt = $('.forPassword1');
$(inptxt).on('focusin', 
   function(){
     $('#togglePassword1').addClass('active');
   }).on('focusout', function(){
     $('#togglePassword1').removeClass('active');

  });


$(".forPassword1").focus(function(){
    $(".focus-text").addClass("show");
});
// end of Focus-in and Focus-out 'active' class add/remove behavior


$(".sign-a").click(function(){
	$(".registr-div").removeClass("show");
	$(".sign-div").addClass("show");
	$(".register").removeClass("show");
	$(".sign-in").addClass("show");
});

$(".register-a").click(function(){
	$(".registr-div").addClass("show");
	$(".sign-div").removeClass("show");
	$(".sign-in").removeClass("show");
	$(".register").addClass("show");
});



