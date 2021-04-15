


function update(e) {
  var x = e.clientX || e.touches[0].clientX;
  var y = e.clientY || e.touches[0].clientY;

  document.documentElement.style.setProperty("--cursorX", x + "px");
  document.documentElement.style.setProperty("--cursorY", y + "px");
}

document.addEventListener("mousemove", update);
document.addEventListener("touchmove", update);

document.addEventListener("DOMContentLoaded", () => {
  let mousePosX = 0,
    mousePosY = 0,
    mouseCircle = document.getElementById("mouse-circle");

  document.onmousemove = e => {
    mousePosX = e.pageX;
    mousePosY = e.pageY;
  };

  let delay = 6,
    revisedMousePosX = 0,
    revisedMousePosY = 0;

  function delayMouseFollow() {
    requestAnimationFrame(delayMouseFollow);

    revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
    revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

    mouseCircle.style.top = revisedMousePosY + "px";
    mouseCircle.style.left = revisedMousePosX + "px";
  }
  delayMouseFollow();
});


 var webringSites = [
        'http://www.empty-frames.com',
        'http://www.1outof3.se',
        'http://www.microscopictrance.com',
        'http://www.amidonenow.com',
        'http://www.diplomaprinter.biz',
        'http://www.findivanshobby.com',
        'http://www.online-ikebana.garden',
        'http://www.qwertyuiopasdfghjklzxcvbnm.life',
        'http://www.findtherightdocument.com',
        'http://www.connectome.nu',
        'http://www.destiny.exposed',
        'http://www.wordsdrifting.space',
        'http://www.cyrillicintersections.com',
        'http://www.rockyis.training',
        'http://www.learnaboutmodernart.com',
        'http://www.persiancarpetstakestime.digital'
    ];

  function randomWebringSite() {
        var i = parseInt(Math.random() * webringSites.length);
        location.href = webringSites[i];
    }

  function natureWebringInfo() {
      document.getElementById("natureLogo").src = "https://cdn.glitch.com/841c3949-0d22-4645-ad1b-f135438c9dfc%2Ftheright-art-webring-hover.svg?v=1618482387215";
    }

  function natureWebringLogo() {
      document.getElementById("natureLogo").src = "https://cdn.glitch.com/841c3949-0d22-4645-ad1b-f135438c9dfc%2Ftheright-art-webring.svg?v=1618482403525";
    }
