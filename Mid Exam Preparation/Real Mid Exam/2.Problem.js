function midExam(input) {

    let listOfFriend = input.shift().split(', ')
    let blackListed = [];
    let lostNames = [];

    let command = input.shift();

    while (command !== 'Report') {

        let commands = command.split(' ')

        switch (commands.shift()) {
            case 'Blacklist': blackList(commands[0]);
                break;
            case 'Error': error(Number(commands[0]));
                break;
            case 'Change': change(Number(commands[0]), commands[1]);
                break;
        }

        command = input.shift();
    }

    console.log(`Blacklisted names: ${blackListed.length}`);
    console.log(`Lost names: ${lostNames.length}`);
    console.log(listOfFriend.join(' '));

    function blackList(name) {
        if (listOfFriend.includes(name)) {
            let index = listOfFriend.indexOf(name);
            let blackListedName = listOfFriend.splice(index,1,'Blacklisted');
            console.log(`${blackListedName.join(' ')} was blacklisted.`);
            blackListed.push(blackListedName.join(' '));
        }
        else {
            console.log(`${name} was not found.`);
        }
    }
    function error(index) {
        if (index >= 0 && index < listOfFriend.length && listOfFriend[index] !== 'Blacklisted' && listOfFriend[index] !== 'Lost') {
            
            let lostName = listOfFriend.splice(index,1,'Lost');
            console.log(`${lostName.join(' ')} was lost due to an error.`);
            lostNames.push(lostName.join(' '));

        }

    }
    function change(index, newName) {
        if (index >= 0 && index < listOfFriend.length) {
         let oldName = listOfFriend.splice(index,1,newName)
            console.log(`${oldName.join(' ')} changed his username to ${newName}.`);
        }
    }


}
midExam(["Mike, John, Eddie, William",
"Error 3",
"Error 3",
"Change 0 Mike123",
"Report"])


