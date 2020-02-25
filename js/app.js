'use strict';

(function() {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),
            new Route('first', 'first.html'),
            new Route('second', 'second.html'),
            new Route('third', 'third.html'),
            new Route('fourth', 'fourth.html')
        ]);
    }
    init();
}());