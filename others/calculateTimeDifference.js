// const str = '12:30pm-12:00am';
const str = '1:23am-1:08am';

function calculateMinutes(str) {
    let timeStr01 = str.split('-')[0];
    let timeStr02 = str.split('-')[1];

    let isMorning01 = timeStr01.slice(-2) === 'am' ? true : false;
    let isMorning02 = timeStr02.slice(-2) === 'am' ? true : false;

    let time01, time02;

    if (isMorning01) {
        time01 =
            (Number(timeStr01.slice(0, -2).split(':')[0]) + 12) * 60 +
            Number(timeStr01.slice(0, -2).split(':')[1]);
    } else {
        time01 =
            Number(timeStr01.slice(0, -2).split(':')[0]) * 60 +
            Number(timeStr01.slice(0, -2).split(':')[1]);
    }

    if (isMorning02) {
        time02 =
            (Number(timeStr02.slice(0, -2).split(':')[0]) + 12) * 60 +
            Number(timeStr02.slice(0, -2).split(':')[1]);
    } else {
        time02 =
            Number(timeStr02.slice(0, -2).split(':')[0]) * 60 +
            Number(timeStr02.slice(0, -2).split(':')[1]);
    }

    if (time02 > time01) {
        return console.log(Math.abs(time01 - time02));
    } else return console.log(24 * 60 - Math.abs(time01 - time02));
}

calculateMinutes(str);
