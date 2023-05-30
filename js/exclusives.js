$(document).ready(function(){
	// navbar-ის დამალვა scroll-ზე
	var lastScrollTop; // This Varibale will store the top position

	navbar1 = document.getElementById('main-bar1'); // Get The NavBar

	window.addEventListener('scroll',function(){
	 //on every scroll this funtion will be called
	  
	  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	  //This line will get the location on scroll
	  
	  if(scrollTop > lastScrollTop){ //if it will be greater than the previous
	    navbar1.style.top='-125px';
	    //set the value to the negetive of height of navbar
	    // set the border-bottom on navbar
	    $('#navigation').css('border-bottom','none');
	  }
	  
	  else{
	    navbar1.style.top='0px';
	    // set the border-bottom on navbar
	    $('#navigation').css('border-bottom','none');
	  }
	  
	  lastScrollTop = scrollTop; //New Position Stored
	});
// end of navbar-ის დამალვა scroll-ზე
});