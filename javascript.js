/* // When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByClassName("top_header").style.fontSize = "2rem";
  } else {
    document.getElementsByClassName("top_header").style.fontSize = "6rem";
  }
}
 */
