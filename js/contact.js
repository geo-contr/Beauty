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
	// close with escape key
	document.addEventListener("keydown", function (e){
	  console.log(e);
	  if (e.key == "Escape"){
		$(".fashion-drop, .about-drop, .contact-drop, .gallery-drop").slideUp(0);
	    $(".about-li, .fashion-li, .gallery-li").removeClass("active");
	    $(".contact-li").removeClass("active1");
	    $("html").removeClass("fixed-position fixed-position1 fixed-position2 fixed-position3");
	    $(".bigmenu-overlay").removeClass("menu-overlay-show menu-overlay-show1 menu-overlay-show2 menu-overlay-show3");
	    $(".footer-footer").removeClass("footer-footer-padding footer-footer-padding1 footer-footer-padding2 footer-footer-padding3");
	    $(".high-contrast").removeClass("high-contrast-padding high-contrast-padding1 high-contrast-padding2 high-contrast-padding3");
	    $(".langswitcher").removeClass("langswitcher-padding langswitcher-padding1 langswitcher-padding2 langswitcher-padding3");
	    $(".navbar-brand").removeClass("navbar-brand-padding navbar-brand-padding1 navbar-brand-padding2 navbar-brand-padding3");
	    $("#menu-main").removeClass("menu-main-padding menu-main-padding1 menu-main-padding2 menu-main-padding3");
	    $(".footer-brand-backgr").removeClass("footer-brand-backgr-padding footer-brand-backgr-padding2 footer-brand-backgr-padding3 footer-brand-backgr-padding4");
	    $(".footer-cont").removeClass("footer-cont-padding footer-cont-padding2 footer-cont-padding3 footer-cont-padding4");
	    $(".footer-line").removeClass("footer-line-padding footer-line-padding1 footer-line-padding2 footer-line-padding3");
	    $(".navbutton-ul").removeClass("hidden hidden1 hidden2 hidden3");

	    $('.chatButton-div, .chat-overlay').removeClass('zIndex zIndex1 zIndex2 zIndex3')
	  }
	});
	// end of close with escape key


	$(".bigmenu-overlay").click(function(){
		$(".bigmenu-overlay").removeClass("menu-overlay-show menu-overlay-show1 menu-overlay-show2 menu-overlay-show3");
		$(".gallery-drop, .fashion-drop, .about-drop, .contact-drop").slideUp(0);
		$(".gallery-li, .about-li, .fashion-li").removeClass("active");
		$(".contact-li").removeClass("active1");
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

	    $('.chatButton-div, .chat-overlay').removeClass('zIndex zIndex1 zIndex2 zIndex3')
	});

	$("#mega-one").click(function(){
		$(".gallery-drop").slideToggle(0);
		$(".fashion-drop, .about-drop, .contact-drop").slideUp(0);
	    $(".gallery-li").toggleClass("active");
	    $(".about-li, .fashion-li").removeClass("active");
	    $(".contact-li").removeClass("active1");
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
	    $(".navbutton-ul").removeClass("hidden1 hidden2 hidden3");

	    $('.chatButton-div, .chat-overlay').toggleClass('zIndex');
	    $('.chatButton-div, .chat-overlay').removeClass('zIndex1 zIndex2 zIndex3')
	});

	$(".close-butt, .close-butt-about, .close-butt-contact").click(function(){
		$(".gallery-drop, .fashion-drop, .about-drop, .contact-drop").slideUp(0);
		$(".gallery-li, .about-li, .fashion-li").removeClass("active");
		$(".contact-li").removeClass("active1");
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

	    $('.chatButton-div, .chat-overlay').removeClass('zIndex zIndex1 zIndex2 zIndex3')
	});
	
	$("#mega-two").click(function(){
		$(".fashion-drop").slideToggle(0);
		$(".gallery-drop, .about-drop, .contact-drop").slideUp(0);
		$(".fashion-li").toggleClass("active");
		$(".gallery-li, .about-li").removeClass("active");
		$(".contact-li").removeClass("active1");
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

	    $('.chatButton-div, .chat-overlay').toggleClass('zIndex1');
	    $('.chatButton-div, .chat-overlay').removeClass('zIndex zIndex2 zIndex3')
	});

	$("#mega-three").click(function(){
		$(".about-drop").slideToggle(0);
		$(".gallery-drop, .fashion-drop, .contact-drop").slideUp(0);
		$(".about-li").toggleClass("active");
		$(".gallery-li, .fashion-li").removeClass("active");
		$(".contact-li").removeClass("active1");
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

	    $('.chatButton-div, .chat-overlay').toggleClass('zIndex2');
	    $('.chatButton-div, .chat-overlay').removeClass('zIndex zIndex1 zIndex3')
	});

	$("#mega-four").click(function(){
		$(".contact-drop").slideToggle(0);
		$(".gallery-drop, .fashion-drop, .about-drop").slideUp(0);
		$(".contact-li").toggleClass("active1");
		$(".about-li, .gallery-li, .fashion-li").removeClass("active");
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

	    $('.chatButton-div, .chat-overlay').toggleClass('zIndex3');
	    $('.chatButton-div, .chat-overlay').removeClass('zIndex zIndex1 zIndex2')
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
	// close with escape key
	document.addEventListener("keydown", function (e){
	  console.log(e);
	  if (e.key == "Escape"){
	    menu.classList.remove("active");
	    $(".menu-overlay").removeClass("active");
	  }
	});
	// end of close with escape key


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

	// for input search
	$(".forSearch").addClass("forSearch-dark");
    $(".search-item").addClass("search-item-dark");
  }

  const disableDarkMode = () => {
    // 1. Remove the class from the body
    document.body.classList.remove('dark-theme');
    // 2. Update darkMode and toggle in localStorage 
    localStorage.setItem('dark-theme', null);

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

// close with escape key
document.addEventListener("keydown", function (e){
  console.log(e);
  if (e.key == "Escape"){
     modal_overlay.classList.remove("show");
    $("#modal_dialog1").removeClass("open");
  }
});
// end of close with escape key

$(".backgr-color").click(function(event){
  event.stopPropagation();
  // Do something
});
// end of modal change language



// search bar
// close with escape key
document.addEventListener("keydown", function (e){
  console.log(e);
  if (e.key == "Escape"){
    wrapper.classList.remove('active-1');
    fullscreen.classList.remove('show');
    $(".langswitcher ").removeClass('hide');
    $(".search-sign-a1").removeClass('active-1');
  }
});
// end of close with escape key

	// min-width(min-width: 768px)
let fullscreen = document.querySelector(".overlay");
let wrapper = document.querySelector(".search-sign-a");
wrapper.onclick=function()
{
	fullscreen.classList.toggle("show");
	wrapper.classList.toggle("active-1");
}

$(".search-sign-a").click(function() {
	$(".langswitcher ").toggleClass('hide');
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


	// Toggle Password Visibility
		const togglePassword = document.querySelector("#togglePassword");
        const password = document.querySelector("#password");

        togglePassword.addEventListener("click", function () {
            // toggle the type attribute
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
            
            // toggle the icon
            this.classList.toggle("bi-eye");
        });

        // prevent form submit
        // const form = document.querySelector("form");
        // form.addEventListener('submit', function (e) {
        //     e.preventDefault();
        // });


        const togglePassword1 = document.querySelector("#togglePassword1");
        const password1 = document.querySelector("#password1");

        togglePassword1.addEventListener("click", function () {
            // toggle the type attribute
            const type = password1.getAttribute("type") === "password" ? "text" : "password";
            password1.setAttribute("type", type);
            
            // toggle the icon
            this.classList.toggle("bi-eye");
        });
     // end of Toggle Password Visibility


// როდესაც ენას შევცვლი select-ით, შესაბამისად გადავდივარ შეცვლილი ენის გვერდზე და მინდა უკან გამოვბრუნდე click to go back-ით. select-ში შევცვლი ენაც მინდა დაბრუნდეს ძველზე
// $(function(){
//    document.getElementById("yourSelectComponentID").value = 0;
// });
// end of როდესაც ენას შევცვლი select-ით, შესაბამისად გადავდივარ შეცვლილი ენის გვერდზე და მინდა უკან გამოვბრუნდე click to go back-ით. select-ში შევცვლი ენაც მინდა დაბრუნდეს ძველზე

