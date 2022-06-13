var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var li = $$('li');

const bgColors = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#e4e1ca"];

li.forEach((element, index) => {
    element.addEventListener('click', function(e) {
        $('.active').classList.remove('active');
        this.classList.add('active');

        $('.menu__border').style.left = this.offsetLeft - 20 + 'px';

        document.documentElement.style.setProperty('--bgColor', bgColors[index]);
    })
})
