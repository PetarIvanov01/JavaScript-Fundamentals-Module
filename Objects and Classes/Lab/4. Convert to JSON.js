function convertJson (firstName,lastName,hairColor) {
    let obj = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,
    }
    console.log(JSON.stringify(obj));
}
convertJson('George', 'Jones',
'Brown')