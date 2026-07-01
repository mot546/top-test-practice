import {
    capitalize,
    reverseString,
    calcObj
} from './functions.js';

// capitalize
test('Capitalize first Letter', ()=>{
    const input = ['word', 'example', ' word', '  example'];
    const expected = ['Word', 'Example','Word', 'Example'];
    input.forEach((actual, index)=>{
        expect(capitalize(actual)).toBe(expected[index]);
    });
});
test('Works with Non Alphabet of First String', ()=>{
    expect(capitalize("*(word")).toBe('Word');
});

//  reverseString
test('reverseString working',()=>{
    const input = ['word', 'example'];
    const expected = ['drow', 'elpmaxe'];
    input.forEach((actual, index)=>{
        expect(reverseString(actual)).toBe(expected[index]);
    });
});

//calcu object
test('calcu obj exists', ()=>{
    expect(calcObj).toBeDefined();
});
test('add, substract, divide, multiply methods exists in calcObj', ()=>{
    expect(calcObj.add).toBeDefined();
    expect(calcObj.sub).toBeDefined();
    expect(calcObj.div).toBeDefined();
    expect(calcObj.mult).toBeDefined();
});
test('correct calculation for add', ()=>{
    const digits = [Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)];
    expect(calcObj.add(digits[0], digits[1])).toBe(digits[0] + digits[1]);
});
test('correct calculation for substraction', ()=>{
     const digits = [Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)];
    expect(calcObj.add(digits[0], digits[1])).toBe(digits[0] - digits[1]);
});