let myName = "William Crupi";
let numberOfLetters = myName.length;
let mySentence = "A sentence with the word Hi Bello World";
let mySentence2 = "This sentence is long and needs to be shorter";
let shorterSentence = mySentence2.slice(0,14);
console.log(shorterSentence);
let modifiedSentence = mySentence2.replace("is long","way to long");
console.log(modifiedSentence);
console.log("There are " +numberOfLetters+ " letters in " + myName);
if(mySentence.indexOf("Hello World")>=0) 
    console.log("Hello is part of the sentence")
else console.log("Hello is not part of the sentence");
if(mySentence.indexOf("Hi")>=0) 
    console.log("Hi is part of the sentence")
else console.log("HI is not part of the sentence");