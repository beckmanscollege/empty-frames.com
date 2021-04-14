window.onload = function() {
  // get background element
  const background = document.querySelector("#background");
  const container = document.querySelector(".container3");

  // get the width of the background element
  const width = background.offsetWidth;
  const top =
    // when the mouse moves…
    document.body.addEventListener("mousemove", function(e) {
      // create variables to store the mouse position
      let posX = e.pageX - width /10;

      let posY = e.pageY - container.offsetTop;

      // update the mask position
      background.style["-webkit-mask-position-x"] = posX + "px";
      background.style["-webkit-mask-position-y"] = posY + "px";
    });
};
