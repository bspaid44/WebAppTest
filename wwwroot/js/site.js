var scene = document.getElementById('scene');
var x = window.innerWidth / 2;
var y = window.innerHeight / 2;

var parallaxInstance = new Parallax(scene, {
    clipRelativeInput: true,
    relativeInput: true,
});
parallaxInstance.friction(0.15, 0.15).calibrate(x, y);

