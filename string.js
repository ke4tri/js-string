const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

let str = "I am Please locate where too 'locate' occurs!!"
let pos = str.lastIndexOf("occurs");
console.log('Print pos: ' + pos);
console.log('Length : ' + str.length);
console.log('Locate : ' + str.indexOf("locate",27));
console.log('Search: ' + str.search('too'));
console.log('Search: ' + str.search('am'));
let str3 = ('Search: ' + str.search('am'));

let str2 = "Apple, Banana, Kiwi";
let res = str2.slice(7,13);
let res2 = str2.slice(-12,-6)



console.log('slice: ' + res2 )
console.log('slice: ' + res)

printToDom(str3, 'test1');
printToDom(pos, 'test2');
printToDom(str, 'test3');
printToDom(`${pos} ${str}` + ` cow ${str3}`, 'test4');
