const { sum, positive, negative } = require('./math-utils');
const { isPalindrome, isAnagram } = require('./string-utils');
const { add, mul, sub, div } = require('./calculator');


describe('testing math utilities', () => {
    let vals;
    let sum_of_vals;
    let pos_vals;
    let neg_vals;

    beforeAll(() => {
        pos_vals = [2, 1, 3];
        neg_vals = [-2, -1, -1];
        vals = pos_vals.concat(neg_vals);
        sum_of_vals = vals.reduce((x, y) => x + y, 0);
    })

    test('the sum of vals should be 2', () => {
        expect(sum(vals)).toBe(sum_of_vals);
    });

    test('should get positive values', () => {
        expect(positive(vals)).toEqual(pos_vals);
    });

    test('should get negative values', () => {
        expect(negative(vals)).toEqual(neg_vals);
    });
});

describe('testing string utilities', () => {

    test.each(["racecar", "radar", "level", "refer", "deified", "civic"])(
        'testing %s for palindrome', (word) => {
            expect(isPalindrome(word)).toBeTruthy();
        },
    );

    test.each([["arc", "car"], ["cat", "act"], ["cider", "cried"]])(
        'testing if %s and %s are anagrams ', (word1, word2) => {
            expect(isAnagram(word1, word2)).toBeTruthy();
        },
    );
});

describe('calculator test' , ()=> {
    test('2 + 3 = 5', () => {
        expect(add(2, 3)).toBe(5);
      });
      
      test('3 * 4 = 12', () => {
        expect(mul(3, 4)).toBe(12);
      });
      
      test('5 - 6 = -1', () => {
        expect(sub(5, 6)).toBe(-1);
      });
      
      test('8 / 4 = 2', () => {
        expect(div(8, 4)).toBe(2);
      });
      

});