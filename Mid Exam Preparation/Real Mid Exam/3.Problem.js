function midExam(input) {

    let listOfPhones = input.shift().split(', ');

    let command = input.shift();
    while (command !== 'End') {

        let commands = command.split(' - ');

        switch (commands.shift()) {
            case 'Add': add(commands[0]);
                break;
            case 'Remove': remove(commands[0]);
                break;
            case 'Bonus phone': bonusPhone(commands[0]);
                break;
            case 'Last': last(commands[0]);
                break;
        }
        command = input.shift();
    }

    console.log(listOfPhones.join(', '));

    function add(phone) {
        if (!listOfPhones.includes(phone)) {
            listOfPhones.push(phone);
        }
    }
    function remove(phone) {
        if (listOfPhones.includes(phone)) {
            let index = listOfPhones.indexOf(phone);
            listOfPhones.splice(index, 1);
        }
    }
    function bonusPhone(param) {
        let [oldPhone, newPhone] = param.split(':')
        if (listOfPhones.includes(oldPhone)) {
            let index = listOfPhones.indexOf(oldPhone);
            listOfPhones.splice(index + 1, 0, newPhone)
        }
    }
    function last(phone) {
        if (listOfPhones.includes(phone)) {
            let index = listOfPhones.indexOf(phone);
            listOfPhones.push(listOfPhones.splice(index,1).join(' '));
        }
    }
}
midExam(["SamsungA50, MotorolaG5, HuaweiP10",
"Last - SamsungA50",
"Add - MotorolaG5",
"End"])


