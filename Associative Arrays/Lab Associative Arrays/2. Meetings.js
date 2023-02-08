function meetings(input) {
    let meetings = {}
    for (let el of input) {
        let [day , name] = el.split(` `)

        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        }
        else{
            console.log(`Scheduled for ${day}`);
            meetings[day] = name
        }
    }
    Object.entries(meetings).forEach(element => {
        console.log(`${element[0]} -> ${element[1]}`);
    });
}
meetings(['Friday Bob',

'Saturday Ted',

'Monday Bill',

'Monday John',

'Wednesday George'])