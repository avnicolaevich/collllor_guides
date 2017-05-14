var slideIndex = 1;

$(document).ready(function() {

    /* INITIAL DEFAULT TAB */
    $('#Profile').css("display", "block");
    /* INITIAL SLIDERSHOW */
    showSlides(1, "Profile");

});

$(window).resize(function(){
    tabContentItem = document.getElementsByClassName("tab-content__item");
    for (i = 0; i < tabContentItem.length; i++) {
        tabContentItem[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tabBtn = document.getElementsByClassName("tabs__btn");
    for (i = 0; i < tabBtn.length; i++) {
        tabBtn[i].className = tabBtn[i].className.replace(" tabs__btn--active", "");
    }
    $('#Profile').css("display", "block");
});


/* OPEN TABS START */
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabContentItem, tabBtn;
    // Get all elements with class="tab-content__item" and hide them
    if (screen.width >= 991 && $(window).width() >= 991) {
        tabContentItem = document.getElementsByClassName("tab-content__item");
        for (i = 0; i < tabContentItem.length; i++) {
            tabContentItem[i].style.display = "none";
        }
        // Get all elements with class="tablinks" and remove the class "active"
        tabBtn = document.getElementsByClassName("tabs__btn");
        for (i = 0; i < tabBtn.length; i++) {
            tabBtn[i].className = tabBtn[i].className.replace(" tabs__btn--active", "");
        }
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    if (document.getElementById(tabName).style.display == "block"){
        document.getElementById(tabName).style.display = "none";
        evt.currentTarget.className = "tabs__btn hidden-md hidden-lg";
    } else {
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " tabs__btn--active";
    }
    /* Set slide number */
    slideIndex = 1;
    showSlides(1, tabName);
}
/* OPEN TABS END */

/* SLIDERSHOW START */
function plusSlides(n, tabName) {
    showSlides(slideIndex += n, tabName);
}

function currentSlide(n, tabName) {
    showSlides(slideIndex = n, tabName);
}

function showSlides(n, tabName) {
    var i;
    var tab = document.getElementById(tabName);
    var slides = tab.getElementsByClassName("slider");
    var dots = tab.getElementsByClassName("slider__dots-btn");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slider__dots-btn--active", "");
        dots[i].getElementsByClassName("slider__dots-number")[0].className = dots[i].getElementsByClassName("slider__dots-number")[0].className.replace(" slider__dots-number--active", "");
    }
    checkDisplay(slideIndex, tab);
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " slider__dots-btn--active";
    dots[slideIndex-1].getElementsByClassName("slider__dots-number")[0].className += " slider__dots-number--active"
}

function checkDisplay(slideIndex, tab) {

    var dislplayPrev = tab.getElementsByClassName("slider__prev");
    var dislplayNext = tab.getElementsByClassName("slider__next");
    var coutSlider = tab.getElementsByClassName("slider").length;

    if (slideIndex == 1) {
        dislplayPrev[0].style.display = "none";
        dislplayNext[0].style.display = "block"
    } else if (slideIndex == coutSlider) {
        dislplayPrev[0].style.display = "block";
        dislplayNext[0].style.display = "none"
    } else {
        dislplayPrev[0].style.display = "block";
        dislplayNext[0].style.display = "block"
    }
}
/* SLIDERSHOW END */