var days = [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi'
];

var months = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
];

var svg = document.querySelectorAll('#timers svg');
for (var i = 0; i < svg.length; i++) {
    svg[i].addEventListener('click', function (ev) {

        for (var j = 0; j < svg.length; j++) {
            svg[j].classList.remove('selectedMode');
        }
        var target = ev.currentTarget;
        target.classList.add('selectedMode');
        switch (target.id) {
            case'chrono':
                chrono();
                break;
            case 'time':
                timer();
                break;
        }
    });
}

var startBtn = document.querySelector('#start'),
    stopBtn = document.querySelector('#stop'),
    screener = document.querySelector('#modeScreen');

startBtn.addEventListener('click', startCount);
stopBtn.addEventListener('click', stopCount);

function chrono() {

    screener.innerHTML = '00:00:00';

}

function timer() {

    screener.innerHTML = '06:00:00'
}

var hoursChrono = 0,
    minutesChrono = 0,
    secondsChrono = 0;

function startCount(ev) {

    var target = ev.currentTarget;
    mode = document.querySelector('.selectedMode').id;
    if (mode === 'chrono') {

        secondsChrono++;
        if (minutesChrono == 60) {
            minutesChrono = 0;
            hoursChrono++;
        } else if (secondsChrono == 60) {
            secondsChrono = 0;
            minutesChrono++;
        }
        hoursChrono = formatRange(hoursChrono),
            minutesChrono = formatRange(minutesChrono),
            secondsChrono = formatRange(secondsChrono);
        screener.innerHTML = hoursChrono + ':' + minutesChrono + ':' + secondsChrono;

    } else if (mode === 'time') {

    }
}

function stopCount(ev) {

    var target = ev.currentTarget;
    mode = document.querySelector('.selectedMode').id;
    if (mode === 'chrono') {
        if (screener.innerHTML === '00:00:00') {

        }
    } else if (mode === 'time') {
        if (screener.innerHTML === '00:00:00') {

        } else {

        }
    }
}


function setDate() {

    var d = new Date(),
        hours = formatRange(d.getHours()),
        minutes = formatRange(d.getMinutes()),
        seconds = formatRange(d.getSeconds()),
        time = hours + ' : ' + minutes + ' : ' + seconds;

    var day = days[parseInt(d.getDay())],
        month = months[parseInt(d.getMonth())],
        date = d.getDate(),
        dateString = day + ' ' + date + ' ' + month;

    document.querySelector('#date').innerHTML = dateString;
    document.querySelector('#screen').innerHTML = time;
}

function formatRange(value) {

    var addChar = '0' + value,
        slice = addChar.slice(-2);
    return slice;
}

setDate();

setInterval(
    function () {
        setDate();
    },
    1000
);

setInterval(function () {
        startCount();
    },
    1000
);