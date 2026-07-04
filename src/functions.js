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
    add: (a,b)=> a + b,
    sub: (a,b)=> a - b,
    div: (a,b)=> a / b,
    mult:(a,b)=> a * b,
};  

function shiftAlphabet(key){
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let i = 0;
    const shiftedAlphabet = alphabet.map((char, index)=>{
        if(index >= (alphabet.length - key)){
            const letterAtEnd = alphabet[i];
            i += 1;
            const lower = String(letterAtEnd).toLowerCase();
            return letterAtEnd + lower;
        }
        const lowerr = String(alphabet[key+index]).toLowerCase();
        return alphabet[key+index] + lowerr; 
    });
    return shiftedAlphabet.join('');
}
export function caesarCipher(wordInput,key){
    const alphabet = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';
    const shiftedAlphabet = shiftAlphabet(key);
    const toEncrypt = wordInput.split('');
    const encrypted = toEncrypt.map((char)=>{
        if(alphabet.includes(char)){
            return [...shiftedAlphabet].filter((shiftedChar, index)=>[...alphabet][index] === char)
        }
        if(toEncrypt.includes(char)){
            return char;
        }
        return " ";
    });
    return encrypted.join('');
};