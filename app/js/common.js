$(document).ready(function() {

    /* INITIAL DEFAULT TAB */
    $('#Profile').css("display", "block");

});

/* OPEN TABS START */
function openTab(evt, tabName) {
    // Declare all variables
    var i, slider, tabBtn;

    // Get all elements with class="tab-content__item" and hide them
    tabContentItem = document.getElementsByClassName("tab-content__item");
    for (i = 0; i < tabContentItem.length; i++) {
        console.log(tabContentItem[i]);
        tabContentItem[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tabBtn = document.getElementsByClassName("tabs__btn");
    for (i = 0; i < tabBtn.length; i++) {
        tabBtn[i].className = tabBtn[i].className.replace(" tabs__btn--active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " tabs__btn--active";
}
/* OPEN TABS END */