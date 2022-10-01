$(document).ready(function(){
	// navbar-ის დამალვა scroll-ზე
	var lastScrollTop; // This Varibale will store the top position

	navbar = document.getElementById('main-bar'); // Get The NavBar

	window.addEventListener('scroll',function(){
	 //on every scroll this funtion will be called
	  
	  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	  //This line will get the location on scroll
	  
	  if(scrollTop > lastScrollTop){ //if it will be greater than the previous
	    navbar.style.top='-73px';
	    //set the value to the negetive of height of navbar
	    // set the border-bottom on navbar
	    $('#navigation').css('border-bottom','1px solid #ececec');
	  }
	  
	  else{
	    navbar.style.top='73px';
	    // set the border-bottom on navbar
	    $('#navigation').css('border-bottom','none');
	  }
	  
	  lastScrollTop = scrollTop; //New Position Stored
	});
// end of navbar-ის დამალვა scroll-ზე


	// mega-menu
	$(".bigmenu-overlay").click(function(){
		$(".bigmenu-overlay").removeClass("menu-overlay-show menu-overlay-show1 menu-overlay-show2 menu-overlay-show3");
		$(".gallery-drop, .fashion-drop, .about-drop, .contact-drop").slideUp(0);
		$(".gallery-li, .about-li, .contact-li").removeClass("active");
		$(".fashion-li").removeClass("active1");
		$("html").removeClass("fixed-position fixed-position1 fixed-position2 fixed-position3");
		$(".langswitcher").removeClass("langswitcher-padding langswitcher-padding1 langswitcher-padding2 langswitcher-padding3");
	    $(".navbar-brand").removeClass("navbar-brand-padding navbar-brand-padding1 navbar-brand-padding2 navbar-brand-padding3");
	    $("#menu-main").removeClass("menu-main-padding menu-main-padding1 menu-main-padding2 menu-main-padding3");
	    $(".footer-brand-backgr").removeClass("footer-brand-backgr-padding footer-brand-backgr-padding2 footer-brand-backgr-padding3 footer-brand-backgr-padding4");
	    $(".footer-cont").removeClass("footer-cont-padding footer-cont-padding2 footer-cont-padding3 footer-cont-padding4");
	    $(".footer-line").removeClass("footer-line-padding footer-line-padding1 footer-line-padding2 footer-line-padding3");
	    $(".high-contrast").removeClass("high-contrast-padding high-contrast-padding1 high-contrast-padding2 high-contrast-padding3");
	    $(".footer-footer").removeClass("footer-footer-padding footer-footer-padding1 footer-footer-padding2 footer-footer-padding3");
	    $(".navbutton-ul").removeClass("hidden hidden1 hidden2 hidden3");
	});

	$("#mega-one").click(function(){
		$(".gallery-drop").slideToggle(0);
		$(".fashion-drop, .about-drop, .contact-drop").slideUp(0);
	    $(".gallery-li").toggleClass("active");
	    $(".about-li, .contact-li").removeClass("active");
	    $(".fashion-li").removeClass("active1");
	    $("html").toggleClass("fixed-position");
	    $("html").removeClass("fixed-position1 fixed-position2 fixed-position3");
	    $(".bigmenu-overlay").toggleClass("menu-overlay-show");
	    $(".bigmenu-overlay").removeClass("menu-overlay-show1 menu-overlay-show2 menu-overlay-show3");
	    $(".langswitcher").toggleClass("langswitcher-padding");
	    $(".navbar-brand").toggleClass("navbar-brand-padding");
	    $("#menu-main").toggleClass("menu-main-padding");
	    $(".footer-brand-backgr").toggleClass("footer-brand-backgr-padding");
	    $(".footer-cont").toggleClass("footer-cont-padding");
	    $(".footer-line").toggleClass("footer-line-padding");
	    $(".high-contrast").toggleClass("high-contrast-padding");
	    $(".footer-footer").toggleClass("footer-footer-padding");
	    $(".footer-footer").removeClass("footer-footer-padding1 footer-footer-padding2 footer-footer-padding3");
	    $(".high-contrast").removeClass("high-contrast-padding1 high-contrast-padding2 high-contrast-padding3");
	    $(".langswitcher").removeClass("langswitcher-padding1 langswitcher-padding2 langswitcher-padding3");
	    $(".navbar-brand").removeClass("navbar-brand-padding1 navbar-brand-padding2 navbar-brand-padding3");
	    $("#menu-main").removeClass("menu-main-padding1 menu-main-padding2 menu-main-padding3");
	    $(".footer-brand-backgr").removeClass("footer-brand-backgr-padding2 footer-brand-backgr-padding3 footer-brand-backgr-padding4");
	    $(".footer-cont").removeClass("footer-cont-padding2 footer-cont-padding3 footer-cont-padding4");
	    $(".footer-line").removeClass("footer-line-padding1 footer-line-padding2 footer-line-padding3");
	    $(".navbutton-ul").toggleClass("hidden");
	    $(".navbutton-ul").removeClass("hidden1 hidden2 hidden3")
	});

	$(".close-butt, .close-butt-about, .close-butt-contact").click(function(){
		$(".gallery-drop, .fashion-drop, .about-drop, .contact-drop").slideUp(0);
		$(".gallery-li, .about-li, .contact-li").removeClass("active");
		$(".fashion-li").removeClass("active1");
		$("html").removeClass("fixed-position fixed-position1 fixed-position2 fixed-position3");
		$("#menu-main").removeClass("menu-main-padding menu-main-padding1 menu-main-padding2 menu-main-padding3");
		$(".langswitcher").removeClass("langswitcher-padding langswitcher-padding1 langswitcher-padding2 langswitcher-padding3");
	    $(".navbar-brand").removeClass("navbar-brand-padding navbar-brand-padding1 navbar-brand-padding2 navbar-brand-padding3");
	    $(".footer-brand-backgr").removeClass("footer-brand-backgr-padding footer-brand-backgr-padding2 footer-brand-backgr-padding3 footer-brand-backgr-padding4");
	    $(".footer-cont").removeClass("footer-cont-padding footer-cont-padding2 footer-cont-padding3 footer-cont-padding4");
	    $(".footer-line").removeClass("footer-line-padding footer-line-padding1 footer-line-padding2 footer-line-padding3");
	    $(".bigmenu-overlay").removeClass("menu-overlay-show menu-overlay-show1 menu-overlay-show2 menu-overlay-show3");
	    $(".high-contrast").removeClass("high-contrast-padding high-contrast-padding1 high-contrast-padding2 high-contrast-padding3");
	    $(".footer-footer").removeClass("footer-footer-padding footer-footer-padding1 footer-footer-padding2 footer-footer-padding3");
	    $(".navbutton-ul").removeClass("hidden hidden1 hidden2 hidden3");
	});
	
	$("#mega-two").click(function(){
		$(".fashion-drop").slideToggle(0);
		$(".gallery-drop, .about-drop, .contact-drop").slideUp(0);
		$(".fashion-li").toggleClass("active1");
		$(".gallery-li, .about-li, .contact-li").removeClass("active");
		$("html").toggleClass("fixed-position1");
		$("html").removeClass("fixed-position fixed-position2 fixed-position3");
		$(".langswitcher").removeClass("langswitcher-padding langswitcher-padding2 langswitcher-padding3");
		$(".navbar-brand").removeClass("navbar-brand-padding navbar-brand-padding2 navbar-brand-padding3");
		$("#menu-main").removeClass("menu-main-padding menu-main-padding2 menu-main-padding3");
		$(".footer-brand-backgr").removeClass("footer-brand-backgr-padding footer-brand-backgr-padding3 footer-brand-backgr-padding4");
	    $(".footer-cont").removeClass("footer-cont-padding footer-cont-padding3 footer-cont-padding4");
	    $(".footer-line").removeClass("footer-line-padding footer-line-padding2 footer-line-padding3");
		$(".langswitcher").toggleClass("langswitcher-padding1");
	    $(".navbar-brand").toggleClass("navbar-brand-padding1");
	    $("#menu-main").toggleClass("menu-main-padding1");
	    $(".footer-brand-backgr").toggleClass("footer-brand-backgr-padding2");
	    $(".footer-cont").toggleClass("footer-cont-padding2");
	    $(".footer-line").toggleClass("footer-line-padding1");
	    $(".bigmenu-overlay").toggleClass("menu-overlay-show1");
	    $(".high-contrast").toggleClass("high-contrast-padding1");
	    $(".footer-footer").toggleClass("footer-footer-padding1");
	    $(".footer-footer").removeClass("footer-footer-padding footer-footer-padding2 footer-footer-padding3");
	    $(".high-contrast").removeClass("high-contrast-padding high-contrast-padding2 high-contrast-padding3");
	    $(".bigmenu-overlay").removeClass("menu-overlay-show menu-overlay-show2 menu-overlay-show3");
	    $(".navbutton-ul").toggleClass("hidden1");
	    $(".navbutton-ul").removeClass("hidden hidden2 hidden3");
	});

	$("#mega-three").click(function(){
		$(".about-drop").slideToggle(0);
		$(".gallery-drop, .fashion-drop, .contact-drop").slideUp(0);
		$(".about-li").toggleClass("active");
		$(".gallery-li, .contact-li").removeClass("active");
		$(".fashion-li").removeClass("active1");
		$("html").toggleClass("fixed-position2");
		$("html").removeClass("fixed-position fixed-position1 fixed-position3");
		$(".langswitcher").removeClass("langswitcher-padding langswitcher-padding1 langswitcher-padding3");
		$(".navbar-brand").removeClass("navbar-brand-padding navbar-brand-padding1 navbar-brand-padding3");
		$("#menu-main").removeClass("menu-main-padding menu-main-padding1 menu-main-padding3");
		$(".footer-brand-backgr").removeClass("footer-brand-backgr-padding footer-brand-backgr-padding2 footer-brand-backgr-padding4");
	    $(".footer-cont").removeClass("footer-cont-padding footer-cont-padding2 footer-cont-padding4");
	    $(".footer-line").removeClass("footer-line-padding footer-line-padding1 footer-line-padding3");
		$(".langswitcher").toggleClass("langswitcher-padding2");
	    $(".navbar-brand").toggleClass("navbar-brand-padding2");
	    $("#menu-main").toggleClass("menu-main-padding2");
	    $(".footer-brand-backgr").toggleClass("footer-brand-backgr-padding3");
	    $(".footer-cont").toggleClass("footer-cont-padding3");
	    $(".footer-line").toggleClass("footer-line-padding2");
	    $(".bigmenu-overlay").toggleClass("menu-overlay-show2");
	    $(".high-contrast").toggleClass("high-contrast-padding2");
	    $(".footer-footer").toggleClass("footer-footer-padding2");
	    $(".footer-footer").removeClass("footer-footer-padding1 footer-footer-padding footer-footer-padding3");
	    $(".high-contrast").removeClass("high-contrast-padding high-contrast-padding1 high-contrast-padding3");
	    $(".bigmenu-overlay").removeClass("menu-overlay-show menu-overlay-show1 menu-overlay-show3");
	    $(".navbutton-ul").toggleClass("hidden2");
	    $(".navbutton-ul").removeClass("hidden hidden1 hidden3");
	});

	$("#mega-four").click(function(){
		$(".contact-drop").slideToggle(0);
		$(".gallery-drop, .fashion-drop, .about-drop").slideUp(0);
		$(".contact-li").toggleClass("active");
		$(".about-li, .gallery-li").removeClass("active");
		$(".fashion-li").removeClass("active1");
		$("html").toggleClass("fixed-position3");
		$("html").removeClass("fixed-position fixed-position1 fixed-position2");
		$(".langswitcher").removeClass("langswitcher-padding langswitcher-padding1 langswitcher-padding2");
		$(".navbar-brand").removeClass("navbar-brand-padding navbar-brand-padding1 navbar-brand-padding2");
		$("#menu-main").removeClass("menu-main-padding menu-main-padding1 menu-main-padding2");
		$(".footer-brand-backgr").removeClass("footer-brand-backgr-padding footer-brand-backgr-padding2 footer-brand-backgr-padding3");
	    $(".footer-cont").removeClass("footer-cont-padding footer-cont-padding2 footer-cont-padding3");
	    $(".footer-line").removeClass("footer-line-padding footer-line-padding1 footer-line-padding2");
		$(".langswitcher").toggleClass("langswitcher-padding3");
	    $(".navbar-brand").toggleClass("navbar-brand-padding3");
	    $("#menu-main").toggleClass("menu-main-padding3");
	    $(".footer-brand-backgr").toggleClass("footer-brand-backgr-padding4");
	    $(".footer-cont").toggleClass("footer-cont-padding4");
	    $(".footer-line").toggleClass("footer-line-padding3");
	    $(".bigmenu-overlay").toggleClass("menu-overlay-show3");
	    $(".high-contrast").toggleClass("high-contrast-padding3");
	    $(".footer-footer").toggleClass("footer-footer-padding3");
	    $(".footer-footer").removeClass("footer-footer-padding1 footer-footer-padding footer-footer-padding2");
	    $(".high-contrast").removeClass("high-contrast-padding high-contrast-padding1 high-contrast-padding2");
	    $(".bigmenu-overlay").removeClass("menu-overlay-show menu-overlay-show1 menu-overlay-show2");
	    $(".navbutton-ul").toggleClass("hidden3");
	    $(".navbutton-ul").removeClass("hidden hidden1 hidden2");
	});

	// end of mega-menu
});

// burger responsive Slide out Menu with Sub menu 
// var fixHeight = function() {
//   $(".navbar-nav").css(
//     "max-height",
//     document.documentElement.clientHeight - 150
//     );
// };
// fixHeight();
// $(window).resize(function(){
//   fixHeight();
// });
// $(".navbar-toggler").on("click", function(){
//   fixHeight();
// });
// burger responsive Slide out Menu with Sub menu


// responsive menu
 const menu = document.querySelector(".menu");
 const menuMain = menu.querySelector(".menu-main");
 const goBack = menu.querySelector(".go-back");
 const menuTrigger = document.querySelector(".mobile-menu-trigger");
 const closeMenu = menu.querySelector(".mobile-menu-close");
 let subMenu;
 menuMain.addEventListener("click", (e) =>{
 	if(!menu.classList.contains("active")){
 		return;
 	}
   if(e.target.closest(".menu-item-has-children")){
   	 const hasChildren = e.target.closest(".menu-item-has-children");
      showSubMenu(hasChildren);
   }
 });
 goBack.addEventListener("click",() =>{
 	 hideSubMenu();
 })
 menuTrigger.addEventListener("click",() =>{
 	 toggleMenu();
 	 // for fixed background
 	 // $("html").addClass("fixed-position-mob");
 	 // $(".navbar-brand").addClass("navbar-brand-mob");
 	 // $(".langswitcher").addClass("langswitcher-mob");
 	 // $(".togglerlang").addClass("togglerlang-mob");
 	 // for fixed background
 })
 closeMenu.addEventListener("click",() =>{
 	 toggleMenu();
 	 // for fixed background
 	 // $("html").removeClass("fixed-position-mob");
 	 // $(".navbar-brand").removeClass("navbar-brand-mob");
 	 // $(".langswitcher").removeClass("langswitcher-mob");
 	 // $(".togglerlang").removeClass("togglerlang-mob");
 	 // for fixed background
 })
 document.querySelector(".menu-overlay").addEventListener("click",() =>{
 	toggleMenu();
 	// for fixed background
 	// $("html").removeClass("fixed-position-mob");
 	// $(".navbar-brand").removeClass("navbar-brand-mob");
 	// $(".langswitcher").removeClass("langswitcher-mob");
 	// $(".togglerlang").removeClass("togglerlang-mob");
 	// for fixed background
 })
 function toggleMenu(){
 	menu.classList.toggle("active");
 	document.querySelector(".menu-overlay").classList.toggle("active");
 }
 function showSubMenu(hasChildren){
    subMenu = hasChildren.querySelector(".sub-menu");
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.35s ease forwards";
    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    menu.querySelector(".current-menu-title").innerHTML=menuTitle;
    menu.querySelector(".mobile-menu-head").classList.add("active");
 }

 function  hideSubMenu(){  
    subMenu.style.animation = "slideRight 0.35s ease forwards";
    setTimeout(() =>{
       subMenu.classList.remove("active");	
    },300); 
    menu.querySelector(".current-menu-title").innerHTML="";
    menu.querySelector(".mobile-menu-head").classList.remove("active");
 }
 
 window.onresize = function(){
 	if(this.innerWidth >991){
 		if(menu.classList.contains("active")){
 			toggleMenu();
 		}

 	}
 }
 // end of responsive menu



// simpleParallax
var image3 = document.getElementsByClassName('img3');
new simpleParallax(image3, {
	scale: 1.8,
	// delay: .6,
	orientation: "down"
});
var image5 = document.getElementsByClassName('img5');
new simpleParallax(image5, {
	scale: 1.8,
	// delay: .6,
	orientation: "down"
});
var image8 = document.getElementsByClassName('img8');
new simpleParallax(image8, {
	scale: 1.8,
	// delay: .6,
	orientation: "down"
});
// end of simpleParallax

// change text
flexSwitchCheckDefault.addEventListener("click", () => {
    if (label.innerText == "Enable high contrast") {
        label.innerText = "Disable high contrast";
    } else {
        label.innerText = "Enable high contrast"
    }
})
// end of change text


// change text color
// flexSwitchCheckDefault.addEventListener("click", () => {
//     if (label.style.color == "red") {
//         label.style.color = "#fff";
//     } else {
//         label.style.color = "red"
//     }
// })
// end of change text color


// dark mode

// ეს არის, როცა referesh-ის დროს ისევ light mode-ში ბრუნდება
// flexSwitchCheckDefault.addEventListener("click", () => {
// 	document.body.classList.toggle("dark-theme");
// 	// for input search
// 	$(".forSearch").toggleClass("forSearch-dark");
// 	$(".search-item").toggleClass("search-item-dark");
// 	// for section-overlay
// 	// $(".section-overlay").toggleClass("section-overlay-show");
// })


// check for saved 'darkMode' and 'darkModeToggle' in localStorage
  let darkMode = localStorage.getItem('dark-theme');

  const darkModeToggle = document.querySelector('#flexSwitchCheckDefault');
   
  const enableDarkMode = () => {
  	// 1. Add the class to the body
	document.body.classList.add('dark-theme');
	// 2. Update darkMode in localStorage
	localStorage.setItem('dark-theme', 'enabled');
	// 3. toggle the checkbox
	darkModeToggle.setAttribute('checked', true);
	label.innerText = "Disable high contrast";

	// html type="checkbox1"
	$(".form-check-input1").addClass("checked");

	// for input search
	$(".forSearch").addClass("forSearch-dark");
    $(".search-item").addClass("search-item-dark");
  }

  const disableDarkMode = () => {
    // 1. Remove the class from the body
    document.body.classList.remove('dark-theme');
    // 2. Update darkMode and toggle in localStorage 
    localStorage.setItem('dark-theme', null);

    // html type="checkbox1"
    $(".form-check-input1").removeClass("checked");

    // for input search
    $(".forSearch").removeClass("forSearch-dark");
    $(".search-item").removeClass("search-item-dark");
  }
  
  // If the user already visited and enabled darkMode
  // start things off with it on
  if (darkMode === 'enabled') {
    enableDarkMode();
  }

  // When someone clicks the button
  darkModeToggle.addEventListener('click', () => {
    // get their darkMode setting
    darkMode = localStorage.getItem('dark-theme');
    
    // if it not current enabled, enable it
    if (darkMode !== 'enabled') {
      enableDarkMode();
    // if it has been enabled, turn it off  
    } else {  
      disableDarkMode(); 
    }
  });

// end of dark mode

    
// modal change language
var listItem = document.querySelector('#lang_open');
listItem.addEventListener('click', function(event) {
  modal_overlay.classList.toggle('show');
});
var listItem = document.querySelector('#modal_overlay');
listItem.addEventListener('click', function(event) {
  this.classList.remove('show');
});
var listItem = document.querySelector('#modal_overlay');
listItem.addEventListener('click', function(event) {
  modal_dialog1.classList.remove('open');
});


const lang_open = document.getElementById('lang_open')
const modal_overlay = document.getElementById('modal_overlay')
const lang_close = document.getElementById('lang_close')


lang_open.addEventListener('click', () => {
  modal_dialog1.classList.add('open');
});

lang_close.addEventListener('click', () => {
  modal_overlay.classList.remove('show');
});

lang_close.addEventListener('click', () => {
  modal_dialog1.classList.remove('open');
});


$(".backgr-color").click(function(event){
  event.stopPropagation();
  // Do something
});
// end of modal change language


// search bar
  	// min-width(min-width: 768px)
	let fullscreen = document.querySelector(".overlay");
	let wrapper = document.querySelector(".search-sign-a");
	wrapper.onclick=function()
	{
		fullscreen.classList.toggle("show");
		wrapper.classList.toggle("active-1");
	}

	$(".search-sign-a").click(function() {
		$(".langswitcher").toggleClass('hide');
	});

	// autofocus - კურსორის ციმციმი search bar-ის გამოჩენისთანავე
	$(".search-sign-a").click(function() {
	  	$(".search-item").focus();
	});
	// end of autofocus

	// max-width(min-width: 767px)
	$(".search-sign-a1").click(function() {
		$(".search-sign-a1").toggleClass('active-1');
		$(".overlay").toggleClass('show');
		$(".langswitcher").toggleClass('hide');
		$(".container-width").toggleClass('container-padding');
	});

	// autofocus - კურსორის ციმციმი search bar-ის გამოჩენისთანავე
	$(".search-sign-a1").click(function() {
	  	$(".search-item").focus();
	});
	// end of autofocus
	// end of search bar

	
// როდესაც ენას შევცვლი select-ით, შესაბამისად გადავდივარ შეცვლილი ენის გვერდზე და მინდა უკან გამოვბრუნდე click to go back-ით. select-ში შევცვლი ენაც მინდა დაბრუნდეს ძველზე
// $(function(){
//    document.getElementById("yourSelectComponentID").value = 0;
// });
// end of როდესაც ენას შევცვლი select-ით, შესაბამისად გადავდივარ შეცვლილი ენის გვერდზე და მინდა უკან გამოვბრუნდე click to go back-ით. select-ში შევცვლი ენაც მინდა დაბრუნდეს ძველზე





// type="checkbox" კონფლიქტში მოდის სხვა type="checkbox"-თან ამიტომ ამ შემთხვევაში type="checkbox1"-ად გადაკეთდება და დაჭირდება ჯავაც
// $("#flexSwitchCheckDefault").click(function() {
//   $(".form-check-input1").toggleClass("checked");
// });
// end of type="checkbox" კონფლიქტში მოდის სხვა type="checkbox"-თან ამიტომ ამ შემთხვევაში type="checkbox1"-ად გადაკეთდება და დაჭირდება ჯავაც



// scroll of indicators
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 1490) {
        $(".navbutton-ul").addClass("hide");
    } else {
        $(".navbutton-ul").removeClass("hide");
    }
});
// end of scroll of indicators


// const sections = document.querySelectorAll('#section');
// const windowHeight = window.innerHeight;
// const navigation = document.querySelector('.navigation-pr');
// console.log(windowHeight);

// function reset(){
// 	for (var i = 0; i < navigation.children.length; i++){
// 		navigation.children[i].classList.remove('selected');
// 	}
// }

// window.addEventListener('scroll', function(){
// 	const scrollTop = window.scrollY;
// 	sections.forEach(function(section, i){
// 		if (section.offsetTop < scrollTop + windowHeight/2 && scrollTop < section.offsetTop + windowHeight/2){
// 			reset();
// 			navigation.children[i].classList.add('selected');
// 		}
// 	});
// });


// document.querySelectorAll('.navigation-pr li').forEach(function(item, i){
// 	item.addEventListener('click', function(){
// 		window.scrollTo({
// 		top: i * windowHeight,
// 		behavior: 'smooth'
// 		})
// 	})
// });


	// smooth scroll
	$('#menu-main1').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 500,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing'
	});

// const links = document.querySelectorAll('.navlink');

// links.forEach((item)=>{
// 	item.addEventListener('click',()=>
// 	{
// 		let el = document.getElementById(item.getAttribute('href'));
// 		el.scrollIntoView({behavior:'smooth',block:'start'});
// 	})
// })




//  //Resize window
// function resize() {
//   if ($(window).width() < 576) {
//     $('.prd-forChange').removeClass('product-details').addClass('product-details-1');
//   }
// }


// $(window).on('resize', function() {
//   resize()
// });




// 3 shades available
$(".shade-img").click(function() {
  	$(".overlay-sun").addClass("open");
  	$(".sun-light").addClass("active");
  	$(".img-medium, .img-deep, .img-merry-rose, .img-intense-brown, .img-light-brown, .img-shocking-pink, .img-daring-red, .img-passionate-red, .img-bright-raspberry, .img-timeless-beige, .img-light-rose, .img-burning-red, .img-soft-coral, .img-ever-red, .img-intense-caramel, .img-soft-rose, .img-intense-blueberry").removeClass("show");
  	$(".img-light").removeClass("hide");
  	$(".sun-medium, .sun-deep, .sun-merry-rose, .sun-intense-brown, .sun-light-brown, .sun-shocking-pink, .sun-daring-red, .sun-passionate-red, .sun-bright-raspberry, .sun-timeless-beige, .sun-light-rose, .sun-burning-red, .sun-soft-coral, .sun-ever-red, .sun-intense-caramel, .sun-soft-rose, .sun-intense-blueberry").removeClass("active");
});

$(".shade-img-medium").click(function() {
  	$(".overlay-sun").addClass("open");
  	$(".sun-medium").addClass("active");
  	$(".img-medium").addClass("show");
  	$(".img-deep, .img-merry-rose, .img-intense-brown, .img-light-brown, .img-shocking-pink, .img-daring-red, .img-passionate-red, .img-bright-raspberry, .img-timeless-beige, .img-light-rose, .img-burning-red, .img-soft-coral, .img-ever-red, .img-intense-caramel, .img-soft-rose, .img-intense-blueberry").removeClass("show");
  	$(".img-light").addClass("hide");
  	$(".sun-light, .sun-deep, .sun-merry-rose, .sun-intense-brown, .sun-light-brown, .sun-shocking-pink, .sun-daring-red, .sun-passionate-red, .sun-bright-raspberry, .sun-timeless-beige, .sun-light-rose, .sun-burning-red, .sun-soft-coral, .sun-ever-red, .sun-intense-caramel, .sun-soft-rose, .sun-intense-blueberry").removeClass("active");
});

$(".shade-img-deep").click(function() {
  	$(".overlay-sun").addClass("open");
  	$(".sun-deep").addClass("active");
  	$(".img-medium, .img-merry-rose, .img-intense-brown, .img-light-brown, .img-shocking-pink, .img-daring-red, .img-passionate-red, .img-bright-raspberry, .img-timeless-beige, .img-light-rose, .img-burning-red, .img-soft-coral, .img-ever-red, .img-intense-caramel, .img-soft-rose, .img-intense-blueberry").removeClass("show");
  	$(".img-deep").addClass("show");
  	$(".img-light").addClass("hide");
  	$(".sun-light, .sun-medium, .sun-merry-rose, .sun-intense-brown, .sun-light-brown, .sun-shocking-pink, .sun-daring-red, .sun-passionate-red, .sun-bright-raspberry, .sun-timeless-beige, .sun-light-rose, .sun-burning-red, .sun-soft-coral, .sun-ever-red, .sun-intense-caramel, .sun-soft-rose, .sun-intense-blueberry").removeClass("active");
});

$(".shade-img-merry-rose").click(function() {
  	$(".overlay-sun").addClass("open");
  	$(".sun-merry-rose").addClass("active");
  	$(".img-medium, .img-deep, .img-intense-brown, .img-light-brown, .img-shocking-pink, .img-daring-red, .img-passionate-red, .img-bright-raspberry, .img-timeless-beige, .img-light-roses, .img-burning-red, .img-soft-coral, .img-ever-red, .img-intense-caramel, .img-soft-rose, .img-intense-blueberry").removeClass("show");
  	$(".img-merry-rose").addClass("show");
  	$(".img-light").addClass("hide");
  	$(".sun-light, .sun-medium, .img-deep, .sun-deep, .sun-intense-brown, .sun-light-brown, .sun-shocking-pink, .sun-daring-red, .sun-passionate-red, .sun-bright-raspberry, .sun-timeless-beige, .sun-light-rose, .sun-burning-red, .sun-soft-coral, .sun-ever-red, .sun-intense-caramel, .sun-soft-rose, .sun-intense-blueberry").removeClass("active");
});

$(".shade-img-intense-brown").click(function() {
  	$(".overlay-sun").addClass("open");
  	$(".sun-intense-brown").addClass("active");
  	$(".img-medium, .img-deep, .img-merry-rose, .img-light-brown, .img-shocking-pink, .img-daring-red, .img-passionate-red, .img-bright-raspberry, .img-timeless-beige, .img-light-rose, .img-burning-red, .img-soft-coral, .img-ever-red, .img-intense-caramel, .img-soft-rose, .img-intense-blueberry").removeClass("show");
  	$(".img-intense-brown").addClass("show");
  	$(".img-light").addClass("hide");
  	$(".sun-light, .sun-medium, .img-deep, .sun-deep, .sun-merry-rose, .sun-light-brown, .sun-shocking-pink, .sun-daring-red, .sun-passionate-red, .sun-bright-raspberry, .sun-timeless-beige, .sun-light-rose, .sun-burning-red, .sun-soft-coral, .sun-ever-red, .sun-intense-caramel, .sun-soft-rose, .sun-intense-blueberry").removeClass("active");
});

$(".shade-img-light-brown").click(function() {
  	$(".overlay-sun").addClass("open");
  	$(".sun-light-brown").addClass("active");
  	$(".img-medium, .img-deep, .img-merry-rose, .img-intense-brown, .img-shocking-pink, .img-daring-red, .img-passionate-red, .img-bright-raspberry, .img-timeless-beige, .img-light-rose, .img-burning-red, .img-soft-coral, .img-ever-red, .img-intense-caramel, .img-soft-rose, .img-intense-blueberry").removeClass("show");
  	$(".img-light-brown").addClass("show");
  	$(".img-light").addClass("hide");
  	$(".sun-light, .sun-medium, .img-deep, .sun-deep, .sun-merry-rose, .sun-intense-brown, .sun-shocking-pink, .sun-daring-red, .sun-passionate-red, .sun-bright-raspberry, .sun-timeless-beige, .sun-light-rose, .sun-burning-red, .sun-soft-coral, .sun-ever-red, .sun-intense-caramel, .sun-soft-rose, .sun-intense-blueberry").removeClass("active");
});

$(".shade-img-shocking-pink").click(function() {
  	$(".overlay-sun").addClass("open");
  	$(".sun-shocking-pink").addClass("active");
  	$(".img-medium, .img-deep, .img-merry-rose, .img-intense-brown, .img-light-brown, .img-daring-red, .img-passionate-red, .img-bright-raspberry, .img-timeless-beige, .img-light-rose, .img-burning-red, .img-soft-coral, .img-ever-red, .img-intense-caramel, .img-soft-rose, .img-intense-blueberry").removeClass("show");
  	$(".img-shocking-pink").addClass("show");
  	$(".img-light").addClass("hide");
  	$(".sun-light, .sun-medium, .img-deep, .sun-deep, .sun-merry-rose, .sun-intense-brown, .sun-light-brown, .sun-daring-red, .sun-passionate-red, .sun-bright-raspberry, .sun-timeless-beige, .sun-light-rose, .sun-burning-red, .sun-soft-coral, .sun-ever-red, .sun-intense-caramel, .sun-soft-rose, .sun-intense-blueberry").removeClass("active");
});

$(".shade-img-daring-red").click(function() {
  	$(".img-light").addClass("hide");
  	$(".overlay-sun").addClass("open");
  	$(".sun-daring-red").addClass("active");
  	$(".img-daring-red").addClass("show");
  	$(".img-medium, .img-deep, .img-merry-rose, .img-intense-brown, .img-light-brown, .img-shocking-pink, .img-passionate-red, .img-bright-raspberry, .img-timeless-beige, .img-light-rose, .img-burning-red, .img-soft-coral, .img-ever-red, .img-intense-caramel, .img-soft-rose, .img-intense-blueberry").removeClass("show");
  	$(".sun-light, .sun-medium, .img-deep, .sun-deep, .sun-merry-rose, .sun-intense-brown, .sun-light-brown, .sun-shocking-pink, .sun-passionate-red, .sun-bright-raspberry, .sun-timeless-beige, .sun-light-rose, .sun-burning-red, .sun-soft-coral, .sun-ever-red, .sun-intense-caramel, .sun-soft-rose, .sun-intense-blueberry").removeClass("active");
});

$(".shade-img-passionate-red").click(function() {
  	$(".img-light").addClass("hide");
  	$(".overlay-sun").addClass("open");
  	$(".sun-passionate-red").addClass("active");
  	$(".img-passionate-red").addClass("show");
  	$(".img-medium, .img-deep, .img-merry-rose, .img-intense-brown, .img-light-brown, .img-shocking-pink, .img-daring-red, .img-bright-raspberry, .img-timeless-beige, .img-light-rose, .img-burning-red, .img-soft-coral, .img-ever-red, .img-intense-caramel, .img-soft-rose, .img-intense-blueberry").removeClass("show");
  	$(".sun-light, .sun-medium, .img-deep, .sun-deep, .sun-merry-rose, .sun-intense-brown, .sun-light-brown, .sun-shocking-pink, .sun-daring-red, .sun-bright-raspberry, .sun-timeless-beige, .sun-light-rose, .sun-burning-red, .sun-soft-coral, .sun-ever-red, .sun-intense-caramel, .sun-soft-rose, .sun-intense-blueberry").removeClass("active");
});

$(".shade-img-bright-raspberry").click(function() {
  	$(".img-light").addClass("hide");
  	$(".overlay-sun").addClass("open");
  	$(".sun-bright-raspberry").addClass("active");
  	$(".img-bright-raspberry").addClass("show");
  	$(".img-medium, .img-deep, .img-merry-rose, .img-intense-brown, .img-light-brown, .img-shocking-pink, .img-daring-red, .img-passionate-red, .img-timeless-beige, .img-light-roses, .img-burning-red, .img-soft-coral, .img-ever-red, .img-intense-caramel, .img-soft-rose, .img-intense-blueberry").removeClass("show");
  	$(".sun-light, .sun-medium, .img-deep, .sun-deep, .sun-merry-rose, .sun-intense-brown, .sun-light-brown, .sun-shocking-pink, .sun-daring-red, .sun-passionate-red, .sun-timeless-beige, .sun-light-rose, .sun-burning-red, .sun-soft-coral, .sun-ever-red, .sun-intense-caramel, .sun-soft-rose, .sun-intense-blueberry").removeClass("active");
});

$(".shade-img-timeless-beige").click(function() {
  	$(".img-light").addClass("hide");
  	$(".overlay-sun").addClass("open");
  	$(".sun-timeless-beige").addClass("active");
  	$(".img-timeless-beige").addClass("show");
  	$(".img-medium, .img-deep, .img-merry-rose, .img-intense-brown, .img-light-brown, .img-shocking-pink, .img-daring-red, .img-passionate-red, .img-bright-raspberry, .img-light-rose, .img-burning-red, .img-soft-coral, .img-ever-red, .img-intense-caramel, .img-soft-rose, .img-intense-blueberry").removeClass("show");
  	$(".sun-light, .sun-medium, .img-deep, .sun-deep, .sun-merry-rose, .sun-intense-brown, .sun-light-brown, .sun-shocking-pink, .sun-daring-red, .sun-passionate-red, .sun-bright-raspberry, .sun-light-rose, .sun-burning-red, .sun-soft-coral, .sun-ever-red, .sun-intense-caramel, .sun-soft-rose, .sun-intense-blueberry").removeClass("active");
});

$(".shade-img-light-rose").click(function() {
  	$(".img-light").addClass("hide");
  	$(".overlay-sun").addClass("open");
  	$(".sun-light-rose").addClass("active");
  	$(".img-light-rose").addClass("show");
  	$(".img-medium, .img-deep, .img-merry-rose, .img-intense-brown, .img-light-brown, .img-shocking-pink, .img-daring-red, .img-passionate-red, .img-bright-raspberry, .img-timeless-beige, .img-burning-red, .img-soft-coral, .img-ever-red, .img-intense-caramel, .img-soft-rose, .img-intense-blueberry").removeClass("show");
  	$(".sun-light, .sun-medium, .img-deep, .sun-deep, .sun-merry-rose, .sun-intense-brown, .sun-light-brown, .sun-shocking-pink, .sun-daring-red, .sun-passionate-red, .sun-bright-raspberry, .sun-timeless-beige, .sun-burning-red, .sun-soft-coral, .sun-ever-red, .sun-intense-caramel, .sun-soft-rose, .sun-intense-blueberry").removeClass("active");
});

$(".shade-img-burning-red").click(function() {
  	$(".img-light").addClass("hide");
  	$(".overlay-sun").addClass("open");
  	$(".sun-burning-red").addClass("active");
  	$(".img-burning-red").addClass("show");
  	$(".img-medium, .img-deep, .img-merry-rose, .img-intense-brown, .img-light-brown, .img-shocking-pink, .img-daring-red, .img-passionate-red, .img-bright-raspberry, .img-timeless-beige, .img-light-rose, .img-soft-coral, .img-ever-red, .img-intense-caramel, .img-soft-rose, .img-intense-blueberry").removeClass("show");
  	$(".sun-light, .sun-medium, .img-deep, .sun-deep, .sun-merry-rose, .sun-intense-brown, .sun-light-brown, .sun-shocking-pink, .sun-daring-red, .sun-passionate-red, .sun-bright-raspberry, .sun-timeless-beige, .sun-light-rose, .sun-soft-coral, .sun-ever-red, .sun-intense-caramel, .sun-soft-rose, .sun-intense-blueberry").removeClass("active");
});

$(".shade-img-soft-coral").click(function() {
  	$(".img-light").addClass("hide");
  	$(".overlay-sun").addClass("open");
  	$(".sun-soft-coral").addClass("active");
  	$(".img-soft-coral").addClass("show");
  	$(".img-medium, .img-deep, .img-merry-rose, .img-intense-brown, .img-light-brown, .img-shocking-pink, .img-daring-red, .img-passionate-red, .img-bright-raspberry, .img-timeless-beige, .img-light-rose, .img-burning-red, .img-ever-red, .img-intense-caramel, .img-soft-rose, .img-intense-blueberry").removeClass("show");
  	$(".sun-light, .sun-medium, .img-deep, .sun-deep, .sun-merry-rose, .sun-intense-brown, .sun-light-brown, .sun-shocking-pink, .sun-daring-red, .sun-passionate-red, .sun-bright-raspberry, .sun-timeless-beige, .sun-light-rose, .sun-burning-red, .sun-ever-red, .sun-intense-caramel, .sun-soft-rose, .sun-intense-blueberry").removeClass("active");
});

$(".shade-img-ever-red").click(function() {
  	$(".img-light").addClass("hide");
  	$(".overlay-sun").addClass("open");
  	$(".sun-ever-red").addClass("active");
  	$(".img-ever-red").addClass("show");
  	$(".img-medium, .img-deep, .img-merry-rose, .img-intense-brown, .img-light-brown, .img-shocking-pink, .img-daring-red, .img-passionate-red, .img-bright-raspberry, .img-timeless-beige, .img-light-rose, .img-burning-red, .img-soft-coral, .img-intense-caramel, .img-soft-rose, .img-intense-blueberry").removeClass("show");
  	$(".sun-light, .sun-medium, .img-deep, .sun-deep, .sun-merry-rose, .sun-intense-brown, .sun-light-brown, .sun-shocking-pink, .sun-daring-red, .sun-passionate-red, .sun-bright-raspberry, .sun-timeless-beige, .sun-light-rose, .sun-burning-red, .sun-soft-coral, .sun-intense-caramel, .sun-soft-rose, .sun-intense-blueberry").removeClass("active");
});

$(".shade-img-intense-caramel").click(function() {
  	$(".img-light").addClass("hide");
  	$(".overlay-sun").addClass("open");
  	$(".sun-intense-caramel").addClass("active");
  	$(".img-intense-caramel").addClass("show");
  	$(".img-medium, .img-deep, .img-merry-rose, .img-intense-brown, .img-light-brown, .img-shocking-pink, .img-daring-red, .img-passionate-red, .img-bright-raspberry, .img-timeless-beige, .img-light-rose, .img-burning-red, .img-soft-coral, .img-ever-red, .img-soft-rose, .img-intense-blueberry").removeClass("show");
  	$(".sun-light, .sun-medium, .img-deep, .sun-deep, .sun-merry-rose, .sun-intense-brown, .sun-light-brown, .sun-shocking-pink, .sun-daring-red, .sun-passionate-red, .sun-bright-raspberry, .sun-timeless-beige, .sun-light-rose, .sun-burning-red, .sun-soft-coral, .sun-ever-red, .sun-soft-rose, .sun-intense-blueberry").removeClass("active");
});

$(".shade-img-soft-rose").click(function() {
  	$(".img-light").addClass("hide");
  	$(".overlay-sun").addClass("open");
  	$(".sun-soft-rose").addClass("active");
  	$(".img-soft-rose").addClass("show");
  	$(".img-medium, .img-deep, .img-merry-rose, .img-intense-brown, .img-light-brown, .img-shocking-pink, .img-daring-red, .img-passionate-red, .img-bright-raspberry, .img-timeless-beige, .img-light-rose, .img-burning-red, .img-soft-coral, .img-ever-red, .img-intense-caramel, .img-intense-blueberry").removeClass("show");
  	$(".sun-light, .sun-medium, .img-deep, .sun-deep, .sun-merry-rose, .sun-intense-brown, .sun-light-brown, .sun-shocking-pink, .sun-daring-red, .sun-passionate-red, .sun-bright-raspberry, .sun-timeless-beige, .sun-light-rose, .sun-burning-red, .sun-soft-coral, .sun-ever-red, .sun-intense-caramel, .sun-intense-blueberry").removeClass("active");
});

$(".shade-img-intense-blueberry").click(function() {
  	$(".img-light").addClass("hide");
  	$(".overlay-sun").addClass("open");
  	$(".sun-intense-blueberry").addClass("active");
  	$(".img-intense-blueberry").addClass("show");
  	$(".img-medium, .img-deep, .img-merry-rose, .img-intense-brown, .img-light-brown, .img-shocking-pink, .img-daring-red, .img-passionate-red, .img-bright-raspberry, .img-timeless-beige, .img-light-rose, .img-burning-red, .img-soft-coral, .img-ever-red, .img-intense-caramel, .img-soft-rose").removeClass("show");
  	$(".sun-light, .sun-medium, .img-deep, .sun-deep, .sun-merry-rose, .sun-intense-brown, .sun-light-brown, .sun-shocking-pink, .sun-daring-red, .sun-passionate-red, .sun-bright-raspberry, .sun-timeless-beige, .sun-light-rose, .sun-burning-red, .sun-soft-coral, .sun-ever-red, .sun-intense-caramel, .sun-soft-rose").removeClass("active");
});

$(".close-button").click(function() {
  	$(".overlay-sun").removeClass("open");
});


$(".sun-light").click(function() {
	$(".shade-img").removeClass("hide");
  	$(".shade-img-medium, .shade-img-deep, .shade-img-merry-rose, .shade-img-intense-brown, .shade-img-light-brown, .shade-img-shocking-pink, .shade-img-daring-red, .shade-img-passionate-red, .shade-img-bright-raspberry, .shade-img-timeless-beige, .shade-img-light-rose, .shade-img-burning-red, .shade-img-soft-coral, .shade-img-ever-red, .shade-img-intense-caramel, .shade-img-soft-rose, .shade-img-intense-blueberry").removeClass("show");
  	$(".overlay-sun").removeClass("open");
  	$(".slide1-light, .slide2-light, .slide3-light").removeClass("hide");
  	$(".slide1-medium, .slide2-medium, .slide3-medium, .slide1-deep, .slide2-deep, .slide3-deep, .slide1-merry-rose, .slide2-merry-rose, .slide3-merry-rose, .slide1-intense-brown, .slide2-intense-brown, .slide3-intense-brown, .slide1-light-brown, .slide2-light-brown, .slide3-light-brown, .slide1-shocking-pink, .slide2-shocking-pink, .slide3-shocking-pink, .slide1-daring-red, .slide2-daring-red, .slide3-daring-red, .slide1-passionate-red, .slide2-passionate-red, .slide3-passionate-red, .slide1-bright-raspberry, .slide2-bright-raspberry, .slide3-bright-raspberry, .slide1-timeless-beige, .slide2-timeless-beige, .slide3-timeless-beige, .slide1-light-rose, .slide2-light-rose, .slide3-light-rose, .slide1-burning-red, .slide2-burning-red, .slide3-burning-red, .slide1-soft-coral, .slide2-soft-coral, .slide3-soft-coral, .slide1-ever-red, .slide2-ever-red, .slide3-ever-red, .slide1-intense-caramel, .slide2-intense-caramel, .slide3-intense-caramel, .slide1-soft-rose, .slide2-soft-rose, .slide3-soft-rose, .slide1-intense-blueberry, .slide2-intense-blueberry, .slide3-intense-blueberry").removeClass("show");
});

$(".sun-medium").click(function() {
  	$(".shade-img").addClass("hide");
  	$(".shade-img-medium").addClass("show");
  	$(".shade-img-deep, .shade-img-merry-rose, .shade-img-intense-brown, .shade-img-light-brown, .shade-img-shocking-pink, .shade-img-daring-red, .shade-img-passionate-red, .shade-img-bright-raspberry, .shade-img-timeless-beige, .shade-img-light-rose, .shade-img-burning-red, .shade-img-soft-coral, .shade-img-ever-red, .shade-img-intense-caramel, .shade-img-soft-rose, .shade-img-intense-blueberry").removeClass("show");
  	$(".overlay-sun").removeClass("open");
	$(".slide1-light, .slide2-light, .slide3-light").addClass("hide");
  	$(".slide1-medium, .slide2-medium, .slide3-medium").addClass("show");
  	$(".slide1-deep, .slide2-deep, .slide3-deep, .slide1-merry-rose, .slide2-merry-rose, .slide3-merry-rose, .slide1-intense-brown, .slide2-intense-brown, .slide3-intense-brown, .slide1-light-brown, .slide2-light-brown, .slide3-light-brown, .slide1-shocking-pink, .slide2-shocking-pink, .slide3-shocking-pink, .slide1-daring-red, .slide2-daring-red, .slide3-daring-red, .slide1-passionate-red, .slide2-passionate-red, .slide3-passionate-red, .slide1-bright-raspberry, .slide2-bright-raspberry, .slide3-bright-raspberry, .slide1-timeless-beige, .slide2-timeless-beige, .slide3-timeless-beige, .slide1-light-rose, .slide2-light-rose, .slide3-light-rose, .slide1-burning-red, .slide2-burning-red, .slide3-burning-red, .slide1-soft-coral, .slide2-soft-coral, .slide3-soft-coral, .slide1-ever-red, .slide2-ever-red, .slide3-ever-red, .slide1-intense-caramel, .slide2-intense-caramel, .slide3-intense-caramel, .slide1-soft-rose, .slide2-soft-rose, .slide3-soft-rose, .slide1-intense-blueberry, .slide2-intense-blueberry, .slide3-intense-blueberry").removeClass("show");
});

$(".sun-deep").click(function() {
  	$(".shade-img").addClass("hide");
  	$(".shade-img-medium, .shade-img-merry-rose, .shade-img-intense-brown, .shade-img-light-brown, .shade-img-shocking-pink, .shade-img-daring-red, .shade-img-passionate-red, .shade-img-bright-raspberry, .shade-img-timeless-beige, .shade-img-light-rose, .shade-img-burning-red, .shade-img-soft-coral, .shade-img-ever-red, .shade-img-intense-caramel, .shade-img-soft-rose, .shade-img-intense-blueberry").removeClass("show");
  	$(".shade-img-deep").addClass("show");
  	$(".overlay-sun").removeClass("open");
	$(".slide1-light, .slide2-light, .slide3-light").addClass("hide");
  	$(".slide1-deep, .slide2-deep, .slide3-deep").addClass("show");
  	$(".slide1-medium, .slide2-medium, .slide3-medium, .slide1-merry-rose, .slide2-merry-rose, .slide3-merry-rose, .slide1-intense-brown, .slide2-intense-brown, .slide3-intense-brown, .slide1-light-brown, .slide2-light-brown, .slide3-light-brown, .slide1-shocking-pink, .slide2-shocking-pink, .slide3-shocking-pink, .slide1-daring-red, .slide2-daring-red, .slide3-daring-red, .slide1-passionate-red, .slide2-passionate-red, .slide3-passionate-red, .slide1-bright-raspberry, .slide2-bright-raspberry, .slide3-bright-raspberry, .slide1-timeless-beige, .slide2-timeless-beige, .slide3-timeless-beige, .slide1-light-rose, .slide2-light-rose, .slide3-light-rose, .slide1-burning-red, .slide2-burning-red, .slide3-burning-red, .slide1-soft-coral, .slide2-soft-coral, .slide3-soft-coral, .slide1-ever-red, .slide2-ever-red, .slide3-ever-red, .slide1-intense-caramel, .slide2-intense-caramel, .slide3-intense-caramel, .slide1-soft-rose, .slide2-soft-rose, .slide3-soft-rose, .slide1-intense-blueberry, .slide2-intense-blueberry, .slide3-intense-blueberry").removeClass("show");
});

$(".sun-merry-rose").click(function() {
  	$(".shade-img").addClass("hide");
  	$(".shade-img-medium, .shade-img-deep, .shade-img-intense-brown, .shade-img-light-brown, .shade-img-shocking-pink, .shade-img-daring-red, .shade-img-passionate-red, .shade-img-bright-raspberry, .shade-img-timeless-beige, .shade-img-light-rose, .shade-img-burning-red, .shade-img-soft-coral, .shade-img-ever-red, .shade-img-intense-caramel, .shade-img-soft-rose, .shade-img-intense-blueberry").removeClass("show");
  	$(".shade-img-merry-rose").addClass("show");
  	$(".overlay-sun").removeClass("open");
	$(".slide1-light, .slide2-light, .slide3-light").addClass("hide");
  	$(".slide1-merry-rose, .slide2-merry-rose, .slide3-merry-rose").addClass("show");
  	$(".slide1-medium, .slide2-medium, .slide3-medium, .slide1-deep, .slide2-deep, .slide3-deep, .slide1-intense-brown, .slide2-intense-brown, .slide3-intense-brown, .slide1-light-brown, .slide2-light-brown, .slide3-light-brown, .slide1-shocking-pink, .slide2-shocking-pink, .slide3-shocking-pink, .slide1-daring-red, .slide2-daring-red, .slide3-daring-red, .slide1-passionate-red, .slide2-passionate-red, .slide3-passionate-red, .slide1-bright-raspberry, .slide2-bright-raspberry, .slide3-bright-raspberry, .slide1-timeless-beige, .slide2-timeless-beige, .slide3-timeless-beige, .slide1-light-rose, .slide2-light-rose, .slide3-light-rose, .slide1-burning-red, .slide2-burning-red, .slide3-burning-red, .slide1-soft-coral, .slide2-soft-coral, .slide3-soft-coral, .slide1-ever-red, .slide2-ever-red, .slide3-ever-red, .slide1-intense-caramel, .slide2-intense-caramel, .slide3-intense-caramel, .slide1-soft-rose, .slide2-soft-rose, .slide3-soft-rose, .slide1-intense-blueberry, .slide2-intense-blueberry, .slide3-intense-blueberry").removeClass("show");
});

$(".sun-intense-brown").click(function() {
  	$(".shade-img").addClass("hide");
  	$(".shade-img-medium, .shade-img-deep, .shade-img-merry-rose, .shade-img-light-brown, .shade-img-shocking-pink, .shade-img-daring-red, .shade-img-passionate-red, .shade-img-bright-raspberry, .shade-img-timeless-beige, .shade-img-light-rose, .shade-img-burning-red, .shade-img-soft-coral, .shade-img-ever-red, .shade-img-intense-caramel, .shade-img-soft-rose, .shade-img-intense-blueberry").removeClass("show");
  	$(".shade-img-intense-brown").addClass("show");
  	$(".overlay-sun").removeClass("open");
	$(".slide1-light, .slide2-light, .slide3-light").addClass("hide");
  	$(".slide1-intense-brown, .slide2-intense-brown, .slide3-intense-brown").addClass("show");
  	$(".slide1-medium, .slide2-medium, .slide3-medium, .slide1-deep, .slide2-deep, .slide3-deep, .slide1-merry-rose, .slide2-merry-rose, .slide3-merry-rose, .slide1-light-brown, .slide2-light-brown, .slide3-light-brown, .slide1-shocking-pink, .slide2-shocking-pink, .slide3-shocking-pink, .slide1-daring-red, .slide2-daring-red, .slide3-daring-red, .slide1-passionate-red, .slide2-passionate-red, .slide3-passionate-red, .slide1-bright-raspberry, .slide2-bright-raspberry, .slide3-bright-raspberry, .slide1-timeless-beige, .slide2-timeless-beige, .slide3-timeless-beige, .slide1-light-rose, .slide2-light-rose, .slide3-light-rose, .slide1-burning-red, .slide2-burning-red, .slide3-burning-red, .slide1-soft-coral, .slide2-soft-coral, .slide3-soft-coral, .slide1-ever-red, .slide2-ever-red, .slide3-ever-red, .slide1-intense-caramel, .slide2-intense-caramel, .slide3-intense-caramel, .slide1-soft-rose, .slide2-soft-rose, .slide3-soft-rose, .slide1-intense-blueberry, .slide2-intense-blueberry, .slide3-intense-blueberry").removeClass("show");
});

$(".sun-light-brown").click(function() {
  	$(".shade-img").addClass("hide");
  	$(".shade-img-light-brown").addClass("show");
  	$(".shade-img-medium, .shade-img-deep, .shade-img-merry-rose, .shade-img-intense-brown, .shade-img-shocking-pink, .shade-img-daring-red, .shade-img-passionate-red, .shade-img-bright-raspberry, .shade-img-timeless-beige, .shade-img-light-rose, .shade-img-burning-red, .shade-img-soft-coral, .shade-img-ever-red, .shade-img-intense-caramel, .shade-img-soft-rose, .shade-img-intense-blueberry").removeClass("show");
  	$(".overlay-sun").removeClass("open");
  	$(".slide1-light-brown, .slide2-light-brown, .slide3-light-brown").addClass("show");
	$(".slide1-light, .slide2-light, .slide3-light").addClass("hide");
  	$(".slide1-medium, .slide2-medium, .slide3-medium, .slide1-deep, .slide2-deep, .slide3-deep, .slide1-merry-rose, .slide2-merry-rose, .slide3-merry-rose, .slide1-intense-brown, .slide2-intense-brown, .slide3-intense-brown, .slide1-shocking-pink, .slide2-shocking-pink, .slide3-shocking-pink, .slide1-daring-red, .slide2-daring-red, .slide3-daring-red, .slide1-passionate-red, .slide2-passionate-red, .slide3-passionate-red, .slide1-bright-raspberry, .slide2-bright-raspberry, .slide3-bright-raspberry, .slide1-timeless-beige, .slide2-timeless-beige, .slide3-timeless-beige, .slide1-light-rose, .slide2-light-rose, .slide3-light-rose, .slide1-burning-red, .slide2-burning-red, .slide3-burning-red, .slide1-soft-coral, .slide2-soft-coral, .slide3-soft-coral, .slide1-ever-red, .slide2-ever-red, .slide3-ever-red, .slide1-intense-caramel, .slide2-intense-caramel, .slide3-intense-caramel, .slide1-soft-rose, .slide2-soft-rose, .slide3-soft-rose, .slide1-intense-blueberry, .slide2-intense-blueberry, .slide3-intense-blueberry").removeClass("show");
});

$(".sun-shocking-pink").click(function() {
  	$(".shade-img").addClass("hide");
  	$(".shade-img-medium, .shade-img-deep, .shade-img-merry-rose, .shade-img-intense-brown, .shade-img-light-brown, .shade-img-daring-red, .shade-img-passionate-red, .shade-img-bright-raspberry, .shade-img-timeless-beige, .shade-img-light-rose, .shade-img-burning-red, .shade-img-soft-coral, .shade-img-ever-red, .shade-img-intense-caramel, .shade-img-soft-rose, .shade-img-intense-blueberry").removeClass("show");
  	$(".shade-img-shocking-pink").addClass("show");
  	$(".overlay-sun").removeClass("open");
	$(".slide1-light, .slide2-light, .slide3-light").addClass("hide");
  	$(".slide1-shocking-pink, .slide2-shocking-pink, .slide3-shocking-pink").addClass("show");
  	$(".slide1-medium, .slide2-medium, .slide3-medium, .slide1-deep, .slide2-deep, .slide3-deep, .slide1-merry-rose, .slide2-merry-rose, .slide3-merry-rose, .slide1-intense-brown, .slide2-intense-brown, .slide3-intense-brown, .slide1-light-brown, .slide2-light-brown, .slide3-light-brown, .slide1-daring-red, .slide2-daring-red, .slide3-daring-red, .slide1-passionate-red, .slide2-passionate-red, .slide3-passionate-red, .slide1-bright-raspberry, .slide2-bright-raspberry, .slide3-bright-raspberry, .slide1-timeless-beige, .slide2-timeless-beige, .slide3-timeless-beige, .slide1-light-rose, .slide2-light-rose, .slide3-light-rose, .slide1-burning-red, .slide2-burning-red, .slide3-burning-red, .slide1-soft-coral, .slide2-soft-coral, .slide3-soft-coral, .slide1-ever-red, .slide2-ever-red, .slide3-ever-red, .slide1-intense-caramel, .slide2-intense-caramel, .slide3-intense-caramel, .slide1-soft-rose, .slide2-soft-rose, .slide3-soft-rose, .slide1-intense-blueberry, .slide2-intense-blueberry, .slide3-intense-blueberry").removeClass("show");
});

$(".sun-daring-red").click(function() {
  	$(".shade-img").addClass("hide");
  	$(".shade-img-medium, .shade-img-deep, .shade-img-merry-rose, .shade-img-intense-brown, .shade-img-light-brown, .shade-img-shocking-pink, .shade-img-passionate-red, .shade-img-bright-raspberry, .shade-img-timeless-beige, .shade-img-light-rose, .shade-img-burning-red, .shade-img-soft-coral, .shade-img-ever-red, .shade-img-intense-caramel, .shade-img-soft-rose, .shade-img-intense-blueberry").removeClass("show");
  	$(".shade-img-daring-red").addClass("show");
  	$(".overlay-sun").removeClass("open");
	$(".slide1-light, .slide2-light, .slide3-light").addClass("hide");
  	$(".slide1-daring-red, .slide2-daring-red, .slide3-daring-red").addClass("show");
  	$(".slide1-medium, .slide2-medium, .slide3-medium, .slide1-deep, .slide2-deep, .slide3-deep, .slide1-merry-rose, .slide2-merry-rose, .slide3-merry-rose, .slide1-intense-brown, .slide2-intense-brown, .slide3-intense-brown, .slide1-light-brown, .slide2-light-brown, .slide3-light-brown, .slide1-shocking-pink, .slide2-shocking-pink, .slide3-shocking-pink, .slide1-passionate-red, .slide2-passionate-red, .slide3-passionate-red, .slide1-bright-raspberry, .slide2-bright-raspberry, .slide3-bright-raspberry, .slide1-timeless-beige, .slide2-timeless-beige, .slide3-timeless-beige, .slide1-light-rose, .slide2-light-rose, .slide3-light-rose, .slide1-burning-red, .slide2-burning-red, .slide3-burning-red, .slide1-soft-coral, .slide2-soft-coral, .slide3-soft-coral, .slide1-ever-red, .slide2-ever-red, .slide3-ever-red, .slide1-intense-caramel, .slide2-intense-caramel, .slide3-intense-caramel, .slide1-soft-rose, .slide2-soft-rose, .slide3-soft-rose, .slide1-intense-blueberry, .slide2-intense-blueberry, .slide3-intense-blueberry").removeClass("show");
});

$(".sun-passionate-red").click(function() {
  	$(".shade-img").addClass("hide");
  	$(".shade-img-passionate-red").addClass("show");
  	$(".shade-img-medium, .shade-img-deep, .shade-img-merry-rose, .shade-img-intense-brown, .shade-img-light-brown, .shade-img-shocking-pink, .shade-img-daring-red, .shade-img-bright-raspberry, .shade-img-timeless-beige, .shade-img-light-rose, .shade-img-burning-red, .shade-img-soft-coral, .shade-img-ever-red, .shade-img-intense-caramel, .shade-img-soft-rose, .shade-img-intense-blueberry").removeClass("show");
  	$(".overlay-sun").removeClass("open");
	$(".slide1-light, .slide2-light, .slide3-light").addClass("hide");
  	$(".slide1-passionate-red, .slide2-passionate-red, .slide3-passionate-red").addClass("show");
  	$(".slide1-medium, .slide2-medium, .slide3-medium, .slide1-deep, .slide2-deep, .slide3-deep, .slide1-merry-rose, .slide2-merry-rose, .slide3-merry-rose, .slide1-intense-brown, .slide2-intense-brown, .slide3-intense-brown, .slide1-light-brown, .slide2-light-brown, .slide3-light-brown, .slide1-shocking-pink, .slide2-shocking-pink, .slide3-shocking-pink, .slide1-daring-red, .slide2-daring-red, .slide3-daring-red, .slide1-bright-raspberry, .slide2-bright-raspberry, .slide3-bright-raspberry, .slide1-timeless-beige, .slide2-timeless-beige, .slide3-timeless-beige, .slide1-light-rose, .slide2-light-rose, .slide3-light-rose, .slide1-burning-red, .slide2-burning-red, .slide3-burning-red, .slide1-soft-coral, .slide2-soft-coral, .slide3-soft-coral, .slide1-ever-red, .slide2-ever-red, .slide3-ever-red, .slide1-intense-caramel, .slide2-intense-caramel, .slide3-intense-caramel, .slide1-soft-rose, .slide2-soft-rose, .slide3-soft-rose, .slide1-intense-blueberry, .slide2-intense-blueberry, .slide3-intense-blueberry").removeClass("show");
});

$(".sun-bright-raspberry").click(function() {
  	$(".shade-img").addClass("hide");
  	$(".shade-img-bright-raspberry").addClass("show");
  	$(".shade-img-medium, .shade-img-deep, .shade-img-merry-rose, .shade-img-intense-brown, .shade-img-light-brown, .shade-img-shocking-pink, .shade-img-daring-red, .shade-img-passionate-red, .shade-img-timeless-beige, .shade-img-light-rose, .shade-img-burning-red, .shade-img-soft-coral, .shade-img-ever-red, .shade-img-intense-caramel, .shade-img-soft-rose, .shade-img-intense-blueberry").removeClass("show");
  	$(".overlay-sun").removeClass("open");
  	$(".slide1-bright-raspberry, .slide2-bright-raspberry, .slide3-bright-raspberry").addClass("show");
	$(".slide1-light, .slide2-light, .slide3-light").addClass("hide");
  	$(".slide1-medium, .slide2-medium, .slide3-medium, .slide1-deep, .slide2-deep, .slide3-deep, .slide1-merry-rose, .slide2-merry-rose, .slide3-merry-rose, .slide1-intense-brown, .slide2-intense-brown, .slide3-intense-brown, .slide1-light-brown, .slide2-light-brown, .slide3-light-brown, .slide1-shocking-pink, .slide2-shocking-pink, .slide3-shocking-pink, .slide1-daring-red, .slide2-daring-red, .slide3-daring-red, .slide1-passionate-red, .slide2-passionate-red, .slide3-passionate-red, .slide1-timeless-beige, .slide2-timeless-beige, .slide3-timeless-beige, .slide1-light-rose, .slide2-light-rose, .slide3-light-rose, .slide1-burning-red, .slide2-burning-red, .slide3-burning-red, .slide1-soft-coral, .slide2-soft-coral, .slide3-soft-coral, .slide1-ever-red, .slide2-ever-red, .slide3-ever-red, .slide1-intense-caramel, .slide2-intense-caramel, .slide3-intense-caramel, .slide1-soft-rose, .slide2-soft-rose, .slide3-soft-rose, .slide1-intense-blueberry, .slide2-intense-blueberry, .slide3-intense-blueberry").removeClass("show");
});

$(".sun-timeless-beige").click(function() {
  	$(".shade-img").addClass("hide");
  	$(".shade-img-timeless-beige").addClass("show");
  	$(".shade-img-medium, .shade-img-deep, .shade-img-merry-rose, .shade-img-intense-brown, .shade-img-light-brown, .shade-img-shocking-pink, .shade-img-daring-red, .shade-img-passionate-red, .shade-img-bright-raspberry, .shade-img-light-rose, .shade-img-burning-red, .shade-img-soft-coral, .shade-img-ever-red, .shade-img-intense-caramel, .shade-img-soft-rose, .shade-img-intense-blueberry").removeClass("show");
  	$(".overlay-sun").removeClass("open");
	$(".slide1-light, .slide2-light, .slide3-light").addClass("hide");
  	$(".slide1-timeless-beige, .slide2-timeless-beige, .slide3-timeless-beige").addClass("show");
  	$(".slide1-medium, .slide2-medium, .slide3-medium, .slide1-deep, .slide2-deep, .slide3-deep, .slide1-merry-rose, .slide2-merry-rose, .slide3-merry-rose, .slide1-intense-brown, .slide2-intense-brown, .slide3-intense-brown, .slide1-light-brown, .slide2-light-brown, .slide3-light-brown, .slide1-shocking-pink, .slide2-shocking-pink, .slide3-shocking-pink, .slide1-daring-red, .slide2-daring-red, .slide3-daring-red, .slide1-passionate-red, .slide2-passionate-red, .slide3-passionate-red, .slide1-bright-raspberry, .slide2-bright-raspberry, .slide3-bright-raspberry, .slide1-light-rose, .slide2-light-rose, .slide3-light-rose, .slide1-burning-red, .slide2-burning-red, .slide3-burning-red, .slide1-soft-coral, .slide2-soft-coral, .slide3-soft-coral, .slide1-ever-red, .slide2-ever-red, .slide3-ever-red, .slide1-intense-caramel, .slide2-intense-caramel, .slide3-intense-caramel, .slide1-soft-rose, .slide2-soft-rose, .slide3-soft-rose, .slide1-intense-blueberry, .slide2-intense-blueberry, .slide3-intense-blueberry").removeClass("show");
});

$(".sun-light-rose").click(function() {
  	$(".shade-img").addClass("hide");
  	$(".shade-img-light-rose").addClass("show");
  	$(".shade-img-medium, .shade-img-deep, .shade-img-merry-rose, .shade-img-intense-brown, .shade-img-light-brown, .shade-img-shocking-pink, .shade-img-daring-red, .shade-img-passionate-red, .shade-img-bright-raspberry, .shade-img-timeless-beige, .shade-img-burning-red, .shade-img-soft-coral, .shade-img-ever-red, .shade-img-intense-caramel, .shade-img-soft-rose, .shade-img-intense-blueberry").removeClass("show");
  	$(".overlay-sun").removeClass("open");
	$(".slide1-light, .slide2-light, .slide3-light").addClass("hide");
  	$(".slide1-light-rose, .slide2-light-rose, .slide3-light-rose").addClass("show");
  	$(".slide1-medium, .slide2-medium, .slide3-medium, .slide1-deep, .slide2-deep, .slide3-deep, .slide1-merry-rose, .slide2-merry-rose, .slide3-merry-rose, .slide1-intense-brown, .slide2-intense-brown, .slide3-intense-brown, .slide1-light-brown, .slide2-light-brown, .slide3-light-brown, .slide1-shocking-pink, .slide2-shocking-pink, .slide3-shocking-pink, .slide1-daring-red, .slide2-daring-red, .slide3-daring-red, .slide1-passionate-red, .slide2-passionate-red, .slide3-passionate-red, .slide1-bright-raspberry, .slide2-bright-raspberry, .slide3-bright-raspberry, .slide1-timeless-beige, .slide2-timeless-beige, .slide3-timeless-beige, .slide1-burning-red, .slide2-burning-red, .slide3-burning-red, .slide1-soft-coral, .slide2-soft-coral, .slide3-soft-coral, .slide1-ever-red, .slide2-ever-red, .slide3-ever-red, .slide1-intense-caramel, .slide2-intense-caramel, .slide3-intense-caramel, .slide1-soft-rose, .slide2-soft-rose, .slide3-soft-rose, .slide1-intense-blueberry, .slide2-intense-blueberry, .slide3-intense-blueberry").removeClass("show");
});

$(".sun-burning-red").click(function() {
  	$(".shade-img").addClass("hide");
  	$(".shade-img-burning-red").addClass("show");
  	$(".shade-img-medium, .shade-img-deep, .shade-img-merry-rose, .shade-img-intense-brown, .shade-img-light-brown, .shade-img-shocking-pink, .shade-img-daring-red, .shade-img-passionate-red, .shade-img-bright-raspberry, .shade-img-timeless-beige, .shade-img-light-rose, .shade-img-soft-coral, .shade-img-ever-red, .shade-img-intense-caramel, .shade-img-soft-rose, .shade-img-intense-blueberry").removeClass("show");
  	$(".overlay-sun").removeClass("open");
	$(".slide1-light, .slide2-light, .slide3-light").addClass("hide");
  	$(".slide1-burning-red, .slide2-burning-red, .slide3-burning-red").addClass("show");
  	$(".slide1-medium, .slide2-medium, .slide3-medium, .slide1-deep, .slide2-deep, .slide3-deep, .slide1-merry-rose, .slide2-merry-rose, .slide3-merry-rose, .slide1-intense-brown, .slide2-intense-brown, .slide3-intense-brown, .slide1-light-brown, .slide2-light-brown, .slide3-light-brown, .slide1-shocking-pink, .slide2-shocking-pink, .slide3-shocking-pink, .slide1-daring-red, .slide2-daring-red, .slide3-daring-red, .slide1-passionate-red, .slide2-passionate-red, .slide3-passionate-red, .slide1-bright-raspberry, .slide2-bright-raspberry, .slide3-bright-raspberry, .slide1-timeless-beige, .slide2-timeless-beige, .slide3-timeless-beige, .slide1-light-rose, .slide2-light-rose, .slide3-light-rose, .slide1-soft-coral, .slide2-soft-coral, .slide3-soft-coral, .slide1-ever-red, .slide2-ever-red, .slide3-ever-red, .slide1-intense-caramel, .slide2-intense-caramel, .slide3-intense-caramel, .slide1-soft-rose, .slide2-soft-rose, .slide3-soft-rose, .slide1-intense-blueberry, .slide2-intense-blueberry, .slide3-intense-blueberry").removeClass("show");
});

$(".sun-soft-coral").click(function() {
  	$(".shade-img").addClass("hide");
  	$(".shade-img-soft-coral").addClass("show");
  	$(".shade-img-medium, .shade-img-deep, .shade-img-merry-rose, .shade-img-intense-brown, .shade-img-light-brown, .shade-img-shocking-pink, .shade-img-daring-red, .shade-img-passionate-red, .shade-img-bright-raspberry, .shade-img-timeless-beige, .shade-img-light-rose, .shade-img-burning-red, .shade-img-ever-red, .shade-img-intense-caramel, .shade-img-soft-rose, .shade-img-intense-blueberry").removeClass("show");
  	$(".overlay-sun").removeClass("open");
	$(".slide1-light, .slide2-light, .slide3-light").addClass("hide");
  	$(".slide1-soft-coral, .slide2-soft-coral, .slide3-soft-coral").addClass("show");
  	$(".slide1-medium, .slide2-medium, .slide3-medium, .slide1-deep, .slide2-deep, .slide3-deep, .slide1-merry-rose, .slide2-merry-rose, .slide3-merry-rose, .slide1-intense-brown, .slide2-intense-brown, .slide3-intense-brown, .slide1-light-brown, .slide2-light-brown, .slide3-light-brown, .slide1-shocking-pink, .slide2-shocking-pink, .slide3-shocking-pink, .slide1-daring-red, .slide2-daring-red, .slide3-daring-red, .slide1-passionate-red, .slide2-passionate-red, .slide3-passionate-red, .slide1-bright-raspberry, .slide2-bright-raspberry, .slide3-bright-raspberry, .slide1-timeless-beige, .slide2-timeless-beige, .slide3-timeless-beige, .slide1-light-rose, .slide2-light-rose, .slide3-light-rose, .slide1-burning-red, .slide2-burning-red, .slide3-burning-red, .slide1-ever-red, .slide2-ever-red, .slide3-ever-red, .slide1-intense-caramel, .slide2-intense-caramel, .slide3-intense-caramel, .slide1-soft-rose, .slide2-soft-rose, .slide3-soft-rose, .slide1-intense-blueberry, .slide2-intense-blueberry, .slide3-intense-blueberry").removeClass("show");
});

$(".sun-ever-red").click(function() {
  	$(".shade-img").addClass("hide");
  	$(".shade-img-ever-red").addClass("show");
  	$(".shade-img-medium, .shade-img-deep, .shade-img-merry-rose, .shade-img-intense-brown, .shade-img-light-brown, .shade-img-shocking-pink, .shade-img-daring-red, .shade-img-passionate-red, .shade-img-bright-raspberry, .shade-img-timeless-beige, .shade-img-light-rose, .shade-img-burning-red, .shade-img-soft-coral, .shade-img-intense-caramel, .shade-img-soft-rose, .shade-img-intense-blueberry").removeClass("show");
  	$(".overlay-sun").removeClass("open");
	$(".slide1-light, .slide2-light, .slide3-light").addClass("hide");
  	$(".slide1-ever-red, .slide2-ever-red, .slide3-ever-red").addClass("show");
  	$(".slide1-medium, .slide2-medium, .slide3-medium, .slide1-deep, .slide2-deep, .slide3-deep, .slide1-merry-rose, .slide2-merry-rose, .slide3-merry-rose, .slide1-intense-brown, .slide2-intense-brown, .slide3-intense-brown, .slide1-light-brown, .slide2-light-brown, .slide3-light-brown, .slide1-shocking-pink, .slide2-shocking-pink, .slide3-shocking-pink, .slide1-daring-red, .slide2-daring-red, .slide3-daring-red, .slide1-passionate-red, .slide2-passionate-red, .slide3-passionate-red, .slide1-bright-raspberry, .slide2-bright-raspberry, .slide3-bright-raspberry, .slide1-timeless-beige, .slide2-timeless-beige, .slide3-timeless-beige, .slide1-light-rose, .slide2-light-rose, .slide3-light-rose, .slide1-burning-red, .slide2-burning-red, .slide3-burning-red, .slide1-soft-coral, .slide2-soft-coral, .slide3-soft-coral, .slide1-intense-caramel, .slide2-intense-caramel, .slide3-intense-caramel, .slide1-soft-rose, .slide2-soft-rose, .slide3-soft-rose, .slide1-intense-blueberry, .slide2-intense-blueberry, .slide3-intense-blueberry").removeClass("show");
});

$(".sun-intense-caramel").click(function() {
  	$(".shade-img").addClass("hide");
  	$(".shade-img-intense-caramel").addClass("show");
  	$(".shade-img-medium, .shade-img-deep, .shade-img-merry-rose, .shade-img-intense-brown, .shade-img-light-brown, .shade-img-shocking-pink, .shade-img-daring-red, .shade-img-passionate-red, .shade-img-bright-raspberry, .shade-img-timeless-beige, .shade-img-light-rose, .shade-img-burning-red, .shade-img-soft-coral, .shade-img-ever-red, .shade-img-soft-rose, .shade-img-intense-blueberry").removeClass("show");
  	$(".overlay-sun").removeClass("open");
	$(".slide1-light, .slide2-light, .slide3-light").addClass("hide");
  	$(".slide1-intense-caramel, .slide2-intense-caramel, .slide3-intense-caramel").addClass("show");
  	$(".slide1-medium, .slide2-medium, .slide3-medium, .slide1-deep, .slide2-deep, .slide3-deep, .slide1-merry-rose, .slide2-merry-rose, .slide3-merry-rose, .slide1-intense-brown, .slide2-intense-brown, .slide3-intense-brown, .slide1-light-brown, .slide2-light-brown, .slide3-light-brown, .slide1-shocking-pink, .slide2-shocking-pink, .slide3-shocking-pink, .slide1-daring-red, .slide2-daring-red, .slide3-daring-red, .slide1-passionate-red, .slide2-passionate-red, .slide3-passionate-red, .slide1-bright-raspberry, .slide2-bright-raspberry, .slide3-bright-raspberry, .slide1-timeless-beige, .slide2-timeless-beige, .slide3-timeless-beige, .slide1-light-rose, .slide2-light-rose, .slide3-light-rose, .slide1-burning-red, .slide2-burning-red, .slide3-burning-red, .slide1-soft-coral, .slide2-soft-coral, .slide3-soft-coral, .slide1-ever-red, .slide2-ever-red, .slide3-ever-red, .slide1-soft-rose, .slide2-soft-rose, .slide3-soft-rose, .slide1-intense-blueberry, .slide2-intense-blueberry, .slide3-intense-blueberry").removeClass("show");
});

$(".sun-soft-rose").click(function() {
  	$(".shade-img").addClass("hide");
  	$(".shade-img-soft-rose").addClass("show");
  	$(".shade-img-medium, .shade-img-deep, .shade-img-merry-rose, .shade-img-intense-brown, .shade-img-light-brown, .shade-img-shocking-pink, .shade-img-daring-red, .shade-img-passionate-red, .shade-img-bright-raspberry, .shade-img-timeless-beige, .shade-img-light-rose, .shade-img-burning-red, .shade-img-soft-coral, .shade-img-ever-red, .shade-img-intense-caramel, .shade-img-intense-blueberry").removeClass("show");
  	$(".overlay-sun").removeClass("open");
	$(".slide1-light, .slide2-light, .slide3-light").addClass("hide");
  	$(".slide1-soft-rose, .slide2-soft-rose, .slide3-soft-rose").addClass("show");
  	$(".slide1-medium, .slide2-medium, .slide3-medium, .slide1-deep, .slide2-deep, .slide3-deep, .slide1-merry-rose, .slide2-merry-rose, .slide3-merry-rose, .slide1-intense-brown, .slide2-intense-brown, .slide3-intense-brown, .slide1-light-brown, .slide2-light-brown, .slide3-light-brown, .slide1-shocking-pink, .slide2-shocking-pink, .slide3-shocking-pink, .slide1-daring-red, .slide2-daring-red, .slide3-daring-red, .slide1-passionate-red, .slide2-passionate-red, .slide3-passionate-red, .slide1-bright-raspberry, .slide2-bright-raspberry, .slide3-bright-raspberry, .slide1-timeless-beige, .slide2-timeless-beige, .slide3-timeless-beige, .slide1-light-rose, .slide2-light-rose, .slide3-light-rose, .slide1-burning-red, .slide2-burning-red, .slide3-burning-red, .slide1-soft-coral, .slide2-soft-coral, .slide3-soft-coral, .slide1-ever-red, .slide2-ever-red, .slide3-ever-red, .slide1-intense-caramel, .slide2-intense-caramel, .slide3-intense-caramel, .slide1-intense-blueberry, .slide2-intense-blueberry, .slide3-intense-blueberry").removeClass("show");
});

$(".sun-intense-blueberry").click(function() {
  	$(".shade-img").addClass("hide");
  	$(".shade-img-intense-blueberry").addClass("show");
  	$(".shade-img-medium, .shade-img-deep, .shade-img-merry-rose, .shade-img-intense-brown, .shade-img-light-brown, .shade-img-shocking-pink, .shade-img-daring-red, .shade-img-passionate-red, .shade-img-bright-raspberry, .shade-img-timeless-beige, .shade-img-light-rose, .shade-img-burning-red, .shade-img-soft-coral, .shade-img-ever-red, .shade-img-intense-caramel, .shade-img-soft-rose").removeClass("show");
  	$(".overlay-sun").removeClass("open");
	$(".slide1-light, .slide2-light, .slide3-light").addClass("hide");
  	$(".slide1-intense-blueberry, .slide2-intense-blueberry, .slide3-intense-blueberry").addClass("show");
  	$(".slide1-medium, .slide2-medium, .slide3-medium, .slide1-deep, .slide2-deep, .slide3-deep, .slide1-merry-rose, .slide2-merry-rose, .slide3-merry-rose, .slide1-intense-brown, .slide2-intense-brown, .slide3-intense-brown, .slide1-light-brown, .slide2-light-brown, .slide3-light-brown, .slide1-shocking-pink, .slide2-shocking-pink, .slide3-shocking-pink, .slide1-daring-red, .slide2-daring-red, .slide3-daring-red, .slide1-passionate-red, .slide2-passionate-red, .slide3-passionate-red, .slide1-bright-raspberry, .slide2-bright-raspberry, .slide3-bright-raspberry, .slide1-timeless-beige, .slide2-timeless-beige, .slide3-timeless-beige, .slide1-light-rose, .slide2-light-rose, .slide3-light-rose, .slide1-burning-red, .slide2-burning-red, .slide3-burning-red, .slide1-soft-coral, .slide2-soft-coral, .slide3-soft-coral, .slide1-ever-red, .slide2-ever-red, .slide3-ever-red, .slide1-intense-caramel, .slide2-intense-caramel, .slide3-intense-caramel, .slide1-soft-rose, .slide2-soft-rose, .slide3-soft-rose").removeClass("show");
});
// end of 3 shades available