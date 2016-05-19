'use strict';
const lunarMap = ['🌕','🌗','🌘','🌑','🌘','🌗','🌕','🌓','🌒','🌑','🌒','🌓'];
const c = '🌏';
const m = '🌚';
const h = '🌝';
const x = '🌞';

const clockFromIntervals = (intervals) => {
    let i = intervals.map((value, key) => {
        switch(value) {
            case 'm' : return m;
            case 'h' : return h;
            case 'x' : return x;
            default: return lunarMap[key];
        }
    });
    return translate(i);
};

const translate = i =>
`        ${i[0]}
    ${i[11]}       ${i[1]}

 ${i[10]}             ${i[2]}

${i[9]}       ${c}        ${i[3]}

 ${i[8]}             ${i[4]}

    ${i[7]}       ${i[5]}
        ${i[6]}`;

module.exports = clockFromIntervals;
