// Hackernoon test. the alphabet set in in circular structure. Find the least amount of steps for each letter in 'str' to go through each of its letters

const allLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const NUM_LETTERS = 26;

let getTime = (str) => {
    const arrStr = str.toUpperCase().split('');
    let totalMinTime = 0;
    let previousIndex = null;
    let diff = 0;

    arrStr.forEach((letter, index) => {
      diff = index === 0 ? allLetters.indexOf(letter) : Math.abs(previousIndex - allLetters.indexOf(letter));
      previousIndex = allLetters.indexOf(letter);
      totalMinTime += diff <= 12 ? diff : NUM_LETTERS - diff;
    })

    console.log(`${str}, ${totalMinTime}`)

}

getTime('XTP');
getTime('AXE');
getTime('BBR');
getTime('AB');
getTime('PPQ');

