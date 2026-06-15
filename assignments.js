//write a function that will convert fahrenheit to degree celcius and from degree celcius back to fahrenhiet

function fahtocel(fah) {
    return (fah - 32) * 5 / 9;
}

function celtofah(cel) {
    return (cel * 9 / 5) + 32;
}

console.log(fahtocel(54));
console.log(celtofah(100));

function checkEntry(age, isVIP){
    if (age >= 18 || isVIP) {
        return "You can enter the club";
    }

    if (age < 18 && !isVIP){
        return "You cannot enter the club";
    }
}

console.log(checkEntry(20, false));
console.log(checkEntry(17, false));

