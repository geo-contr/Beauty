// $(".nails-plus").on("click", function () {
//     dataLayer.push({
//       eventCategory: "nails 2023_cta",
//       eventAction: "see more",
//       eventLabel: "LE VERNIS",
//       event: "uaevent",
//     })
//   })

 $(".is-flex-grid-element.is-1-col > img").on("click touch", function () {
    $(this).prev(".nails-plus").click()
  })

  $(".nails-plus").on("click touch", function () {
        var clickedPlus = $(this)
        var clickedPlusSvg = $(this).find("svg")

        if (!clickedPlus.hasClass("disabled-plus")) {
          clickedPlus.addClass("disabled-plus")
          clickedPlus.attr("aria-expanded", "true")
          if (!clickedPlusSvg.hasClass("is-close-plus")) {
            clickedPlusSvg.toggleClass("is-close-plus")
            clickedPlus
              .parent()
              .find(".product-container")
              .addClass("visible-product-container")
              .fadeIn(500, function () {
                clickedPlus.removeClass("disabled-plus")
                clickedPlus.nextAll("div.product-container").children().children().children("img").focus()
              })
          } else {
            clickedPlus.attr("aria-expanded", "false")
            clickedPlusSvg.toggleClass("is-close-plus")
            clickedPlus
              .parent()
              .find(".product-container")
              .removeClass("visible-product-container")
              .fadeOut(500, function () {
                clickedPlus.removeClass("disabled-plus")
              })
          }
        }
      })