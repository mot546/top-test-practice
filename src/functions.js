export const capitalize = (word)=>{
    const allAlpha = /[a-zA-Z]/;
    const firstLetter = [...word].find(char => allAlpha.test(char));
    const index = [...word].findIndex(char => char === firstLetter);
    const restOfTheWord = word.slice([index+1]);
    return firstLetter.toUpperCase() + restOfTheWord;
};

export const reverseString = (word) => {
    let reversedWord = "";
    for(let i = word.length; i > 0; i -= 1){
        reversedWord += word[i-1];
    }
    return reversedWord;
};

export const calcObj = {
    add: ()=>{},
    sub: ()=>{},
    div: ()=>{},
    mult:()=>{},
};