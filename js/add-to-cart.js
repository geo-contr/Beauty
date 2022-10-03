function closeCart() {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling')
}


const openShopCart = document.querySelector('.shoppingCartButton, .shoppingCartButton1');
openShopCart.addEventListener('click', () => {
	const cart = document.querySelector('.producstOnCart');
	cart.classList.toggle('hide');
	overlay1.classList.toggle('open');
	document.querySelector('body').classList.toggle('stopScrolling');
});

const closeShopCart = document.querySelector('#closeButton');
closeShopCart.addEventListener('click', () => {
	overlay1.classList.remove('open');
});


const overlay1 = document.querySelector('.overlay1');
overlay1.addEventListener('click', () => {
	overlay1.classList.remove('open');
});

closeShopCart.addEventListener('click', closeCart);
overlay1.addEventListener('click', closeCart);



$(".shoppingCartButton1").click(function() {
	$(".producstOnCart").removeClass("hide");
	$(".overlay1").toggleClass("open");
});



function closeFilter() {
	const filter = document.querySelector('.productOnfilter');
	filter.classList.toggle('hide');
	document.querySelector('body').classList.toggle('stopScrolling1')
}


const openShopfilter = document.querySelector('.shoppingfilterButton');
openShopfilter.addEventListener('click', () => {
	const filter = document.querySelector('.productOnfilter');
	filter.classList.toggle('hide');
	overlay2.classList.toggle('open');
	document.querySelector('body').classList.toggle('stopScrolling1');
});

const closeShopfilter = document.querySelector('#closeButton1');
closeShopfilter.addEventListener('click', () => {
	overlay2.classList.remove('open');
});


const overlay2 = document.querySelector('.overlay2');
overlay2.addEventListener('click', () => {
	overlay2.classList.remove('open');
});

closeShopfilter.addEventListener('click', closeFilter);
overlay2.addEventListener('click', closeFilter);


$(".productOnfilter").click(function(event){
  event.stopPropagation();
  // Do something
});




$(".texture-text").click(function() {
	$(".texture-text").toggleClass("rotate");
	$(".texture").toggleClass("active");
});

$(".overlay2, #closeButton1").click(function() {
	$(".texture-text, .finish-text").removeClass("rotate");
	$(".texture").removeClass("active");
});

$(".finish-text").click(function() {
	$(".finish-text").toggleClass("rotate");
});



// checkbox selection
var $filterCheckboxes = $('input[type="checkbox"]');

$filterCheckboxes.on('change', function() {

  var selectedFilters = {};

  $filterCheckboxes.filter(':checked').each(function() {

    if (!selectedFilters.hasOwnProperty(this.name)) {
      selectedFilters[this.name] = [];
    }

    selectedFilters[this.name].push(this.value);

  });

  // create a collection containing all of the filterable elements
  var $filteredResults = $('.flower');

  // loop over the selected filter name -> (array) values pairs
  $.each(selectedFilters, function(name, filterValues) {

    // filter each .flower element
    $filteredResults = $filteredResults.filter(function() {

      var matched = false,
        currentFilterValues = $(this).data('category').split(' ');

      // loop over each category value in the current .flower's data-category
      $.each(currentFilterValues, function(_, currentFilterValue) {

        // if the current category exists in the selected filters array
        // set matched to true, and stop looping. as we're ORing in each
        // set of filters, we only need to match once

        if ($.inArray(currentFilterValue, filterValues) != -1) {
          matched = true;
          return false;
        }
      });

      // if matched is true the current .flower element is returned
      return matched;

    });
  });

  $('.flower').hide().filter($filteredResults).show();

});
// end of checkbox selection



// How to calculate numbers (total) based on the checked checkboxes
// function calc() {
//   var tots = 3;
//   $(".checks:checked").each(function() {
//     var price = $(this).attr("data-price");
//     tots += parseFloat(price);
//   });
//   $('#tots').text(tots);
// }
// $(function() {
//   $(document).on("change", ".checks", calc);
//   calc();
// });


var totalPrice = 0;
var totalPrice1 = 4;
$("#tots").html(4);
$('.checks').change(function () {
  if ($(this).is(":checked")) {
    totalPrice += parseFloat($(this).attr('data-price'));
    $("#tots").html(totalPrice);
  } else {
    totalPrice -= parseFloat($(this).attr('data-price'));
    $("#tots").html(totalPrice);
  }
});



$(".overlay2, #closeButton1").click(function() {
  if ($('.checks').is(':checked')){
    $("#tots").html(totalPrice);
  } else if ($('.checks').is(':not(:checked)')){
    $("#tots").html(totalPrice1);
  }
});



// let addonCheckboxes = document.querySelectorAll(".checks")
// // let priceSection = document.getElementById("priceSection")
// let customProductPricing = document.getElementById("tots")
// var sum = 0
// for (let i = 0; i < addonCheckboxes.length; i++) {
//   addonCheckboxes[i].addEventListener("change", function(e) {

//     console.log(e.target.dataset.price)
    
//     if (addonCheckboxes[i].checked != false) {
      
//       sum = sum +Number(e.target.dataset.price) 
//     } else {
//       sum =  sum -Number(e.target.dataset.price) 
//     }
    
//     customProductPricing.innerHTML = sum
    
//   })

// }

// end of How to calculate numbers (total) based on the checked checkboxes

