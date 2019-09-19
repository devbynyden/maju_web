function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("content-tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " is-active";
}

var scroll = new SmoothScroll('a[href*="#"]');

let scrollPos = 0;
const nav = document.querySelector('.back-to-top-button');

function checkPosition() {
  let windowY = window.scrollY;
  if (windowY < scrollPos) {
    // Scrolling UP - Hide
    nav.classList.add('is-hidden');
    nav.classList.remove('is-visible');
  } else {
    // Scrolling DOWN - Show
    nav.classList.add('is-visible');
    nav.classList.remove('is-hidden');
  }
  scrollPos = windowY;
}

function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

window.addEventListener('scroll', debounce(checkPosition));
