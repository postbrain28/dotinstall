(() => {
    'use strict';

    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const result = document.getElementById('result');
    let startTime;
    let isStarted = false;

    start.addEventListener('click', () => {
        if (isStarted === true) {
            return;
        }
        isStarted = true;
        startTime = Date.now();
        start.className = 'pushed';
        stop.className = '';
        result.textContent = '0.000';
        result.className = 'standby';
    })

    stop.addEventListener('click', () => {
        let elapsedTime;
        let diff;
        if (isStarted === false) {
            return;
        }
        isStarted = false;
        elapsedTime = (Date.now() - startTime) / 1000;
        // elapsedTime = 4;
        // result.textContent = elapsedTime;
        result.textContent = elapsedTime.toFixed(3);
        stop.className = 'pushed';
        start.className = '';
        result.className = '';
        diff = elapsedTime -5.0;
        // if (diff > -1.0 && diff < 1.0)
        if (Math.abs(diff) < 1.0) {
            result.className = 'perfect';
        }
    })
})();