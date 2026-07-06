import {
    capitalize,
    reverseString,
    calcObj,
    caesarCipher,
    anAnalyzer

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

// calcu object
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
    expect(calcObj.sub(digits[0], digits[1])).toBe(digits[0] - digits[1]);
});
test('correct calculation for division', ()=>{
    const digits = [Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)];
    expect(calcObj.div(digits[0], digits[1])).toBeCloseTo(digits[0] / digits[1]);
});
test('correct calculation for multiplication', ()=>{
    const digits = [Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)];
    expect(calcObj.mult(digits[0], digits[1])).toBeCloseTo(digits[0] * digits[1]);
});

// caesar shifter
test('ceasar exists',()=>{
    expect(caesarCipher).toBeDefined();
});
test('xyz becomes abc', ()=>{
    expect(caesarCipher('xyz',3)).toBe('abc');
});
test('abc becomes def', ()=>{
    expect(caesarCipher('abc',3)).toBe('def');
});
test('works with space',()=>{
    expect(caesarCipher('abc xyz',3)).toBe('def abc');
});
test('works with special chars',()=>{
    expect(caesarCipher('abc## xyz',3)).toBe('def## abc');
});
test('working keys',()=>{
    expect(caesarCipher('abcdefghijklmnop',5)).toBe('fghijklmnopqrstu');
});

// an analyzer
test('analyzer exists',()=>{
    expect(anAnalyzer).toBeDefined();
});
test('returns an object of averagen,min,max, length', ()=>{
    const expected = {
   average: 4,
   min: 1,
   max: 8,
   length: 6
    };
    const input = [1,8,3,4,2,6];
    expect(anAnalyzer(input)).toEqual(expected);
});
test('returns the right average', ()=>{
    const expected = {
   average: 5,
   min: 1,
   max: 10,
   length: 7
    };
    const input = [1,8,3,4,2,6,10];
    expect(anAnalyzer(input)).toEqual(expected);
});
test('returns the right min', ()=>{
    const expected = {
   average: 7,
   min: 2,
   max: 13,
   length: 7
    };
    const input = [13,8,3,4,2,6,10];
    expect(anAnalyzer(input)).toEqual(expected);
});
test('returns the right max', ()=>{
    const expected = {
   average: 7,
   min: 2,
   max: 13,
   length: 7
    };
    const input = [13,8,3,4,2,6,10];
    expect(anAnalyzer(input)).toEqual(expected);
});
test('returns the right length', ()=>{
    const expected = {
   average: 7,
   min: 2,
   max: 13,
   length: 7
    };
    const input = [13,8,3,4,2,6,10];
    expect(anAnalyzer(input)).toEqual(expected);
});
