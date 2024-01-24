let res = sumDigits(1234);
console.log(`sum digits = ${res}`); // 10
res = luckyNumber(123871); // 1 + 3 + 7 === 2 + 8 + 1
console.log(res ? 'Lucky' : 'Unlucky'); // Lucky


function sumDigits(a) {
    // Return sum digits of a
    let sum = 0;
    while (a) {
        sum += a % 10;
        a = (a - a % 10) / 10;
    }
    return sum;
}

function luckyNumber(a) {
    //return true if a lucky number and false otherwise
    let sum = 0;
    while (a) {
        sum = a % 10 -sum;
        a = (a - a % 10) / 10;
    }
    return !sum;

}