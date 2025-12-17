function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    var result = "";

    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";

    return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("cat", "small", "jumped", "silently"));
