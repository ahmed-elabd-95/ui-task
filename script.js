$(document).ready(function () {
    $("#alert-switch").change(function () {
      if ($(this).is(":checked")) {
        alert("Job alert activated!");
      } else {
        alert("Job alert deactivated!");
      }
    });

    $(".sort-btn").click(function () {
      $(".sort-options").toggle();
    });
    $(".profile-btn").click(function () {
      $(".full-profile").toggle();
    });

    $(".sort-option").click(function () {
      var selectedText = $(this).text();
      $(".selected-option").text(selectedText);
      $(".sort-options").hide(); 
    });

    $(document).click(function (e) {
      if (!$(e.target).closest(".sort-dropdown").length) {
        $(".sort-options").hide();
      }
    });

    document.querySelectorAll(".has-dropdown").forEach((item) => {
      item.addEventListener("click", function () {
        let submenu = this.querySelector(".submenu");
        let icon = this.querySelector(".dropdown-icon");

        if (submenu.style.display === "block") {
          submenu.style.display = "none";
          icon.classList.remove("rotate");
        } else {
          submenu.style.display = "block";
          icon.classList.add("rotate");
        }
      });
    });

    $(".navbar-toggler").on("click", function () {
      $(".full-screen-menu").fadeToggle(); 
    });

    $(".filter-menu").click(function () {
      $(".mobile-sidebar").fadeIn(500); 
    });

    $(".back-menu").click(function () {
      $(".mobile-sidebar").fadeOut(500); 
    });
  });