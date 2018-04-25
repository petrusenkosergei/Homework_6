
document.addEventListener('DOMContentLoaded', function(){
    var logo = document.getElementById('als-logoLebedev');

    function changeBackground(color) {
        logo.style.backgroundColor = color;
    }

    function getRandomColor () {
        var r=Math.floor(Math.random() * (256));
        var g=Math.floor(Math.random() * (256));
        var b=Math.floor(Math.random() * (256));
        return '#' + r.toString(16) + g.toString(16) + b.toString(16);
    }

    logo.addEventListener('mouseenter', function() {
        logo.classList.remove('logoLebedev__als-logoLebedev');
        changeBackground(getRandomColor());
        setTimeout(function(){logo.classList.add('logoLebedev__als-logoLebedev');},2000);
    });
    setInterval(function(){
        changeBackground(getRandomColor());
    }, 1500)

});