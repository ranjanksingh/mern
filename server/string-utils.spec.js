const { isAnagram, isPalindrome } = require('./string-utils');


test('racecar is palindrome or not', () => {
    expect(isPalindrome('racecar')).toBeTruthy();
})

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
