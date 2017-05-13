$(document).ready(function() {

    /* INITIAL DEFAULT TAB */
    $('#Profile').css("display", "block");

    /* INITIAL ACCORDION */
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
}
/* OPEN TABS END */