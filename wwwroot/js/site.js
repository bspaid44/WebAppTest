var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
    clipRelativeInput: true,
    relativeInput: true,
});
parallaxInstance.friction(0.15, 0.15).calibrate(x, y);
