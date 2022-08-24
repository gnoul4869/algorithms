/*
* Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
* Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.

* Example: 
*
* s = 12:01:00PM
* return 12:01:00
* s = 12:01:00AM
* return 00:01:00
*/

const s = '6:40:03AM';

function timeConversion(s) {
    const isMorning = s.slice(-2) === 'AM' ? true : false;
    const hours = parseInt(s.split(':')[0]);
    let newHours = hours < 10 ? `0${hours}` : hours;

    if (isMorning && hours === 12) {
        newHours = '00';
    } else if (!isMorning && hours !== 12) {
        newHours = 12 + hours < 10 ? `0${12 + hours}` : 12 + hours;
    }

    const [first, ...rest] = s.slice(0, -2).split(':');
    const newTime = newHours + ':' + rest.join(':');

    return newTime;
}

console.log(timeConversion(s));
