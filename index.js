var challange = 1;

// CHALLANGE 1
console.log(`CHALLANGE ${challange++}`);
function palindrome(kata) {
    // you can only write your code here!
    if(kata === undefined) return "Error undefined";

    let reversedKata = "";
    for (let index = kata.length - 1; index >= 0; index--) {
        const element = kata[index];
        reversedKata += element;
    }
    return reversedKata === kata;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false

// CHALLANGE 2
console.log(`\n\nCHALLANGE ${challange++}`);
function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    if(kalimat === undefined) return "Error undefined";

    let spaceCount = 0;
    for (let index = 0; index < kalimat.length; index++) {
        const element = kalimat[index];
        if (element === " " && kalimat[index + 1] != " " && index + 1 != kalimat.length) {
            spaceCount++;
        }
    }
    return spaceCount + 1;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5

// CHALLANGE 3
console.log(`\n\nCHALLANGE ${challange++}`);
function changeVocals(str) {
    //code di sini
    let changed = "";
    const vocalChars = "aiueoAIUEO";
    for (let index = 0; index < str.length; index++) {
        let isVocalChar = false;
        const char = str[index];
        for (let index = 0; index < vocalChars.length; index++) {
            const vocalChar = vocalChars[index];
            if (char == vocalChar) {
                isVocalChar = true;
                break;
            }
        }

        if (isVocalChar) {
            changed += String.fromCharCode(str.charCodeAt(index) + 1);
        } else {
            changed += char;
        }
    }
    return changed;
}

function reverseWord(str) {
    //code di sini
    let reversedKata = "";
    for (let index = str.length - 1; index >= 0; index--) {
        const element = str[index];
        reversedKata += element;
    }
    return reversedKata;
}

function setLowerUpperCase(str) {
    //code di sini
    let lowerUpperCase = "";
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if (element.charCodeAt(0) > 96) {
            lowerUpperCase += String.fromCharCode(element.charCodeAt(0) - 32);
        } else {
            lowerUpperCase += String.fromCharCode(element.charCodeAt(0) + 32);
        }
    }
    return lowerUpperCase;
}

function removeSpaces(str) {
    //code di sini
    let removed = "";
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if (element === " ") {
            continue;
        }
        removed += element;
    }
    return removed;
}

function passwordGenerator(name) {
    //code di sini
    if(name === undefined) return "Error undefined";

    if (name.length < 5) {
        return "Minimal karakter yang diinputkan adalah 5 karakter";
    }
    return setLowerUpperCase(removeSpaces(reverseWord(changeVocals(name))));
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'


// CHALLANGE 4
console.log(`\n\nCHALLANGE ${challange++}`);
function meleeRangedGrouping(str) {
    //your code here
    if(str === undefined) return "Error undefined";

    let melee = [];
    let range = [];

    let hero = "";
    let temp = "";

    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if (element === "-") {
            hero = temp;
            temp = "";
            continue;
        } else if (element === ",") {
            if (temp === "Ranged") {
                range = [...range, hero];
            } else if (temp === "Melee") {
                melee = [...melee, hero];
            }
            hero = "";
            temp = "";
            continue;
        }
        temp += element;
    }

    if (hero != "" && temp != "") {
        if (temp === "Ranged") {
            range = [...range, hero];
        } else if (temp === "Melee") {
            melee = [...melee, hero];
        }
        hero = "";
        temp = "";
    }

    return range.length > 0 || melee.length > 0 ? [range, melee] : []
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []


// CHALLANGE 5
console.log(`\n\nCHALLANGE ${challange++}`);
function stringToArray(string) {
    // write your code here
    if(string === undefined) return "Error undefined";

    let words = [];
    let temp = [];

    for (let index = 0; index < string.length; index++) {
        const element = string[index];
        if(element === ",") {
            // words = [...words, temp];
            if(temp.length > 0) {
                words[words.length] = temp;
            }
            temp = [];
            continue;
        }
        // temp = [...temp, element];
        temp[temp.length] = element;
    }

    if(temp.length > 0) {
        // words = [...words, temp];
        words[words.length] = temp;
        temp = [];
    }

    return words;
}

console.log(stringToArray('aqrst,ukaei,ffooo'))

// result
// [
//   [ 'a', 'q', 'r', 's', 't' ],
//   [ 'u', 'k', 'a', 'e', 'i' ],
//   [ 'f', 'f', 'o', 'o', 'o' ]
// ]

console.log(stringToArray('qwer,tyui,asdf,ghjk'))

// result
// [
//   [ 'q', 'w', 'e', 'r' ],
//   [ 't', 'y', 'u', 'i' ],
//   [ 'a', 's', 'd', 'f' ],
//   [ 'g', 'h', 'j', 'k' ]
// ]