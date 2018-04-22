document.addEventListener('DOMContentLoaded', function () {

    var logoLebedev = document.getElementById('als-logoLebedev');
    var colorGeneratorConstant = 100000000;
    function randomCount() {
        return Math.floor(Math.random()*colorGeneratorConstant);
    }

    function Gradient() {
        randomColor = Math.floor(Math.random()*colorGeneratorConstant);
        logoLebedev.style.background = ('radial-gradient(at top, ' + "#" + (randomColor + randomCount()) + ', ' + "#" + (randomColor + randomCount()) + ')');}
    logoLebedev.addEventListener('mouseenter', Gradient, false);
    setInterval(function () {
        Gradient();
    }, 1500)

});


