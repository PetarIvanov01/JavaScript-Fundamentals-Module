function Class(bandName, albumName, songName) {
    let durationInSec = ((albumName.length * bandName.length) * songName.length / 2) / 2.5;
    console.log( `The plate was rotated ${Math.ceil(durationInSec)} times.`);
}
Class('Black Sabbath', 'Paranoid',

    'War Pigs')