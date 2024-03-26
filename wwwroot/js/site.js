var scene = document.getElementById('scene');
var scene1 = document.getElementById('scene1');
var x = window.innerWidth / 2;
var y = window.innerHeight / 2;

var parallaxInstance = new Parallax(scene, {
    clipRelativeInput: true,
    relativeInput: true,
});
parallaxInstance.friction(0.15, 0.15);

var parallaxInstance1 = new Parallax(scene1, {
    clipRelativeInput: true,
    relativeInput: true,
});
parallaxInstance1.friction(0.15, 0.15);

