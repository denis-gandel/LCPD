var sizeSectionInfo = 40
var scroll = document.documentElement.scrollLeft;

window.onscroll = function() {
    if (window.scrollY > 0) {
        document.getElementById('carousel').style.width = ((screen.width - window.scrollY))+'px'
        document.getElementById('carousel').style.height = ((screen.height - window.scrollY))+'px'
        document.getElementById('carousel').style.opacity = ((screen.width - window.scrollY)/screen.width *100)+'%'
    }

    var y = window.scrollY;
};